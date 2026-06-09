import { NextRequest, NextResponse } from 'next/server';

function decodeJwtPayload(token: string) {
  const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
  const json = Buffer.from(base64, 'base64').toString('utf-8');
  return JSON.parse(json) as { exp?: number };
}

function isTokenValid(token: string) {
  try {
    const { exp } = decodeJwtPayload(token);
    if (!exp) return true;
    return exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

export function proxy(request: NextRequest) {
  const token = request.cookies.get('token')?.value;

  if (!token || !isTokenValid(token)) {
    const loginUrl = new URL('/login', request.url);
    const response = NextResponse.redirect(loginUrl);
    response.cookies.delete('token');
    response.cookies.delete('session');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/account/:path*', '/onBoarding/:path*'],
};

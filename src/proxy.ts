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
  const session = request.cookies.get('session')?.value;

  const isAuthenticated = !!token && isTokenValid(token) && !!session;

  const authOnlyRoutes = [
    '/login',
    '/cadastro',
    '/resetPassword',
    '/setNewPassword',
  ];
  const isAuthRoute = authOnlyRoutes.includes(request.nextUrl.pathname);

  if (!isAuthenticated && !isAuthRoute) {
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('token');
    response.cookies.delete('session');
    return response;
  }

  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/account/:path*',
    '/onBoarding/:path*',
    '/login',
    '/cadastro',
    '/resetPassword',
    '/setNewPassword',
  ],
};

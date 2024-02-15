import { NextRequest, NextResponse } from 'next/server'
import { sessionNameUserInfo } from './data/static-info'

// routes where only unauthenticated user can access
const authRoutes = ['/login', '/cadastro']

export function middleware(request: NextRequest) {
  const hasAuthToken = request.cookies.has(sessionNameUserInfo)

  if (!hasAuthToken) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (authRoutes.includes(request.nextUrl.pathname) && hasAuthToken) {
    return NextResponse.redirect(new URL('/me', request.url))
  }
}

export const config = {
  matcher: ['/onBoarding', '/login', '/cadastro'],
}

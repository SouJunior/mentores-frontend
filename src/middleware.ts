import { NextRequest, NextResponse } from 'next/server'
import { sessionNameUserInfo } from './data/static-info'

export function middleware(request: NextRequest) {
  const hasAuthToken = request.cookies.has(sessionNameUserInfo)

  if (!hasAuthToken) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: ['/onBoarding'],
}

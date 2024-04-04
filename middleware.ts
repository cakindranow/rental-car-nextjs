import { cookies } from 'next/headers'
import { NextResponse, NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    
  // If the user is authenticated, continue as normal
  if (cookies().has('token')) {
    console.log(cookies().get('token'))
    return NextResponse.next()
  }
 
  // Redirect to login page if not authenticated
  return NextResponse.redirect(new URL('/auth/login', request.url))
}
 
export const config = {
  matcher: [
    '/',
    '/home',
    '/home/:path*',
  ],
}
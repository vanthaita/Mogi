import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { removeTokenFromCookies } from "./app/action/removeRt";

const protectedRoutes = ['/dashboard', '/dashboard/(.*)'];
const authOnlyRoutes = ['/sign-in', '/sign-up'];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const authToken = request.cookies.get('access_token');
    const refreshToken = request.cookies.get('refresh_token')

    if (!authToken && protectedRoutes.some((path) => pathname.startsWith(path))) {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    if (authToken && authOnlyRoutes.some((path) => pathname.startsWith(path))) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (authToken && protectedRoutes.some((path) => pathname.startsWith(path))) {
        return NextResponse.next();
    }
    if (authToken && refreshToken) {
      if (authToken && authOnlyRoutes.some((path) => pathname.startsWith(path))) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
      }
  
      try {
        const payload = JSON.parse(
          Buffer.from(refreshToken.value.split('.')[1], 'base64').toString()
        );
        const exp = payload.exp * 1000;
        const currentTime = Date.now();
        const isTokenExpiringSoon = exp - currentTime < 3 * 24 * 60 * 60 * 1000;
        
        if (isTokenExpiringSoon) {
          removeTokenFromCookies();
          return NextResponse.redirect(new URL('/sign-in', request.url));
        }
      } catch (err) {
        console.error('Failed to decode refresh token', err);
        return NextResponse.redirect(new URL('/sign-in', request.url));
      }
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/sign-in',
        '/sign-up',
        '/dashboard',
        '/dashboard/:path*',
    ]
};

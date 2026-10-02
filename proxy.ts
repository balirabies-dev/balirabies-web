import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, languages, unlocalizedPath } from "./app/lib/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = unlocalizedPath(pathname);
    return NextResponse.redirect(url, 308);
  }
  if (languages.some(({ code }) => pathname === `/${code}` || pathname.startsWith(`/${code}/`))) return NextResponse.next();
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = { matcher: ["/((?!_next|api|.*\\..*).*)"] };

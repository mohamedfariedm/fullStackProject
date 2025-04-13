import { i18nRouter } from "next-i18n-router";
import { i18nRouterConfig } from "./i18nRouterConfig";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  const locale = pathname.split("/")[1]; // e.g. 'en', 'ar'
  const remainingPath = pathname.split("/").slice(2).join("/"); // e.g. 'admin', 'admin/login'

  const isAdmin = remainingPath.startsWith("admin");
  const isLoginPage = remainingPath === "admin/login";
  const isOnAdminHome = remainingPath === "admin";

  const localeCookie = request.cookies.get("NEXT_LOCALE");
  const authCookie = request.cookies.get("auth");
  const isLoggedIn = authCookie?.value === "1";

  // Set default locale cookie
  if (!localeCookie) {
    const response = i18nRouter(request, i18nRouterConfig);
    response.cookies.set("NEXT_LOCALE", locale || "en");
    return response;
  }

  // ✅ Protect /admin routes (except login)
  if (isAdmin && !isLoginPage) {
    if (!isLoggedIn) {
      const loginUrl = new URL(`/${locale}/admin/login`, request.url);
      return NextResponse.redirect(loginUrl);
    }
    // Prevent redirect loop
    if (isLoggedIn && isOnAdminHome) {
      return NextResponse.next();
    }
  }

  // ✅ Allow login page through
  if (isLoginPage && isLoggedIn) {
    // If already logged in, go to /admin dashboard
    return NextResponse.redirect(new URL(`/${locale}/admin`, request.url));
  }

  return i18nRouter(request, i18nRouterConfig);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function detectLocale(acceptLanguage: string | null): "pl" | "en" {
  if (!acceptLanguage) return "pl";
  const preferred = acceptLanguage
    .split(",")
    .map((part) => {
      const [lang, q = "q=1"] = part.trim().split(";");
      const quality = parseFloat(q.replace("q=", "")) || 0;
      return { lang: lang.toLowerCase().split("-")[0], quality };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { lang } of preferred) {
    if (lang === "pl") return "pl";
    if (lang === "en") return "en";
  }
  return "pl";
}

export function proxy(request: NextRequest) {
  const locale = detectLocale(request.headers.get("accept-language"));
  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: "/",
};

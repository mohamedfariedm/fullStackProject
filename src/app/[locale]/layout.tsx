import { i18nRouterConfig } from "@/i18nRouterConfig";
import { dir } from "i18next";
import type { Metadata } from "next";
import GlobalProvider from "../../Providers";
import Script from "next/script";



export const metadata: Metadata = {
  title: "King Stone - Marble & Tiles",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export function generateStaticParams() {
  return i18nRouterConfig.locales.map((locale) => ({ locale }));
}



export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  return (
    <html lang={locale} dir={dir(locale)}>
        <head>
    <meta charSet="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>King Stone - Marble & Tiles</title>
    <link rel="shortcut icon" href="images/favicon.ico" />
    <link rel="stylesheet" href="/css/bootstrap.min.css" />
    <link rel="stylesheet" href="/css/jquery.mCustomScrollbar.min.css" />
    <link rel="stylesheet" href="/css/animations.min.css" />
    <link rel="stylesheet" href="/css/owl.carousel.min.css" />
    <link rel="stylesheet" href="/fonts/font-awesome/css/all.min.css" />
    <link rel="stylesheet" href="/css/ionicons.min.css" />
    <link rel="stylesheet" href="/fonts/themify-icons/themify-icons.css" />
    <link rel="stylesheet" href="/fonts/flaticon/flaticon.css" />
    <link rel="stylesheet" href="/css/style.css" />
    <link rel="stylesheet" href="/css/responsive.css" />
    <link rel="stylesheet" href="/css/magnific-popup.min.css" />
    <link rel="stylesheet" href="/rev/css/rs6.css" />
    <link rel="stylesheet" href="/rev/fonts/font-awesome/css/font-awesome.css" />
    <link
      rel="stylesheet"
      href="/rev/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css"
    />
    <link rel="stylesheet" href="/rev/fonts/pe-icon-7-stroke/css/helper.css" />
  </head>
      <body className="bukra">
        <main className="w-full">
          <GlobalProvider locale={locale}>{children}</GlobalProvider>
        </main>
        <Script src="/js/jquery.min.js"></Script>
    <Script src="/js/bootstrap.min.js"></Script>
    <Script src="/js/owl.carousel.min.js"></Script>
    <Script src="/js/progressbar.js"></Script>

    <Script src="/js/isotope.pkgd.min.js"></Script>
    <Script src="/js/jquery.countTo.min.js"></Script>
    <Script src="/js/wow.min.js"></Script>
    <Script src="/js/jquery.magnific-popup.min.js"></Script>
    <Script src="/js/jquery.mCustomScrollbar.min.js"></Script>
    <Script src="/js/custom.js"></Script>
    <Script src="/js/progressbar.js"></Script>
    <Script src="/rev/js/rbtools.min.js"></Script>
    <Script src="/rev/js/rs6.min.js"></Script>
    <Script src="/js/rev-custom.js"></Script>

      </body>

    </html>
  );
}

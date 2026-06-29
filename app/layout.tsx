import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import PromoCodesProvider from "./components/promo/PromoCodesProvider";
import ConsentManager from "./components/ConsentManager";
import { getPromoCodes } from "./lib/promo-codes";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://allyonoguru.com"),
  title: {
    default: "AllYonoGuru — Yono Game All Apps Directory",
    template: "%s | AllYonoGuru.com",
  },
  description:
    "AllYonoGuru is an independent directory of Android skill-based game apps. Find, compare, and download Yono game apps — Rummy Guru, Teen Patti Guru, and more.",
  authors: [{ name: "AllYonoGuru.com", url: "https://allyonoguru.com" }],
  creator: "AllYonoGuru.com",
  publisher: "AllYonoGuru.com",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://allyonoguru.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://allyonoguru.com",
    siteName: "AllYonoGuru.com",
    title: "AllYonoGuru — Yono Game All Apps Directory",
    description:
      "Independent directory of Android skill-based game apps. Find Yono game apps — Rummy Guru, Teen Patti Guru, and more.",
    images: [
      {
        url: "https://allyonoguru.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AllYonoGuru.com — Yono Game All Apps Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AllYonoGuru — Yono Game All Apps Directory",
    description:
      "Independent directory of Android skill-based game apps. Find, compare, and download Yono game apps.",
    images: ["https://allyonoguru.com/og-image.png"],
  },
  category: "technology",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const promoEntries = await getPromoCodes();

  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="alternate" hrefLang="en-IN" href="https://allyonoguru.com" />
        <link rel="alternate" hrefLang="x-default" href="https://allyonoguru.com" />
        <meta name="theme-color" content="#020817" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body
        style={{
          fontFamily: "var(--font-jakarta), 'Plus Jakarta Sans', system-ui, sans-serif",
          backgroundColor: "#020817",
          color: "#f1f5f9",
          minHeight: "100vh",
        }}
      >
        <PromoCodesProvider entries={promoEntries}>
          {children}
        </PromoCodesProvider>
        <ConsentManager />
      </body>
    </html>
  );
}

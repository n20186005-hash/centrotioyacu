import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" }
  ],
};

export const metadata: Metadata = {
  title: "Centro turístico Tio Yacu — Rioja, Peru",
  description: "A travel guide to Centro turístico Tio Yacu in Rioja, Peru. Explore this natural ecological tourism scenic area in the Amazon region.",
  metadataBase: new URL(`https://${process.env.CURRENT_SITE_DOMAIN || 'centrotioyacu.com'}`),
  alternates: {
    canonical: "/es",
    languages: {
      "es": "/es",
      "en": "/en",
      "zh": "/zh",
      "qu": "/qu",
      "x-default": "/es",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    alternateLocale: ["en_US", "zh_CN", "qu_PE"],
    title: "Centro turístico Tio Yacu — Rioja, Peru",
    description: "A travel guide to Centro turístico Tio Yacu in Rioja, Peru. Explore this natural ecological tourism scenic area in the Amazon region.",
    siteName: "Centro turístico Tio Yacu Travel Guide",
    images: [
      {
        url: "/gallery/centro-turistico-tio-yacu (1).jpg",
        width: 1200,
        height: 630,
        alt: "Centro turístico Tio Yacu - Rioja, Peru",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

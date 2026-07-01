import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN}`;

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  const localeObj: Record<string, string> = {
    es: 'es_PE',
    en: 'en_US',
    zh: 'zh_CN',
    qu: 'qu_PE',
  };
  const alternateLocales = ["es_PE", "en_US", "zh_CN", "qu_PE"].filter(l => l !== localeObj[locale]);
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: "Centro turístico Tio Yacu — Rioja, Peru",
      template: "%s | Centro turístico Tio Yacu",
    },
    description:
      locale === 'es' ? "Guía de viaje al Centro turístico Tio Yacu en Rioja, Perú. Descubre este hermoso atractivo turístico natural en la región San Martín." :
      locale === 'zh' ? "Centro turístico Tio Yacu 旅行指南——探索秘鲁里奥哈自然旅游胜地，圣马丁大区生态景区。" :
      locale === 'qu' ? "Centro turístico Tio Yacu rikuy, Rioja, Piruw. Pachamama puriy." :
      "A travel guide to Centro turístico Tio Yacu in Rioja, Peru. Discover this natural ecological tourism scenic area in the San Martín region.",
    keywords: [
      "Centro turístico Tio Yacu",
      "Rioja tourism",
      "Peru natural attraction",
      "San Martín tourism",
      "Amazon tourism Peru",
      "Rioja attractions",
      "Peru ecotourism",
      "Natural scenic area Peru",
      "Amazon rainforest tourism",
      "Rioja travel guide",
    ],
    authors: [{ name: "Centro turístico Tio Yacu Travel Guide" }],
    creator: "Centro turístico Tio Yacu Travel Guide",
    publisher: "Centro turístico Tio Yacu Travel Guide",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: localeObj[locale] || 'es_PE',
      alternateLocale: alternateLocales,
      url: `${baseUrl}/${locale}`,
      title: "Centro turístico Tio Yacu — Rioja, Peru",
      description: (locale === 'es' ? "Guía de viaje al Centro turístico Tio Yacu en Rioja, Perú. Descubre este hermoso atractivo turístico natural en la región San Martín." :
      (locale === 'zh' ? "Centro turístico Tio Yacu 旅行指南——探索秘鲁里奥哈自然旅游胜地，圣马丁大区生态景区。" :
      (locale === 'qu' ? "Centro turístico Tio Yacu rikuy, Rioja, Piruw. Pachamama puriy." :
      "A travel guide to Centro turístico Tio Yacu in Rioja, Peru. Discover this natural ecological tourism scenic area in the San Martín region."))),
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
    twitter: {
      card: "summary_large_image",
      title: "Centro turístico Tio Yacu — Rioja, Peru",
      description:
        "A travel guide to Centro turístico Tio Yacu in Rioja, Peru.",
      images: ["/gallery/centro-turistico-tio-yacu (1).jpg"],
    },
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
      canonical: `/${locale}`,
      languages: {
        "es": "/es",
        "en": "/en",
        "zh": "/zh",
        "qu": "/qu",
        "x-default": "/es",
      },
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "en" }, { locale: "zh" }, { locale: "qu" }];
}

import { generateSchema } from "../schema";

function SchemaScript({ locale }: { locale: string }) {
  const schema = generateSchema(locale);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} className={`${cormorant.variable} ${dmSans.variable}`}>
      <SchemaScript locale={locale} />
      <body>{children}</body>
    </html>
  );
}

import { notFound } from "next/navigation";
import { LangProvider } from "@/components/LangProvider";
import { Nav, Footer } from "@/components/SiteFrame";
import type { Locale } from "@/i18n/translations";
import "@/components/nearby.css";

export default async function GuideLayout({children, params}: {children: React.ReactNode; params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (!["en","es","zh","qu"].includes(locale)) notFound();
  return <LangProvider initialLocale={locale as Locale}><Nav/>{children}<Footer/></LangProvider>;
}
import type { Metadata } from "next";
import type { Locale } from "@/i18n/translations";
import { baseUrl } from "./site-url";
export function guideMeta(locale: Locale, path: string, title: string, description: string, photo?: string): Metadata {
  const url = `${baseUrl}/${locale}${path}`;
  const languages = Object.fromEntries(["en","es","zh","qu"].map(l => [l,`${baseUrl}/${l}${path}`]));
  return {title,description,alternates:{canonical:url,languages:{...languages,"x-default":languages.es}},openGraph:{title,description,url,images:photo?[{url:photo}]:undefined},twitter:{card:"summary_large_image",title,description,images:photo?[photo]:undefined}};
}
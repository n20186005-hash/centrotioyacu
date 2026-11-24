import {baseUrl} from "@/lib/site-url";
import places from "@/lib/destination-index.json";
import type {MetadataRoute} from "next";
export const dynamic="force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const locales=["en","es","zh","qu"];
  return ["","/nearby",...places.map(p=>"/nearby/"+p.slug)].flatMap(path=>{
    const languages=Object.fromEntries(locales.map(locale=>[locale,`${baseUrl}/${locale}${path}`]));
    return locales.map(locale=>({url:languages[locale],alternates:{languages:{...languages,"x-default":languages.es}},changeFrequency:"weekly" as const,priority:path?0.8:1}));
  });
}

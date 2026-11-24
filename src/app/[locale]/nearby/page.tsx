import NearbyDirectory from "@/components/NearbyDirectory";
import {guideLabels} from "@/lib/guide-labels";
import {guideMeta} from "@/lib/guide-meta";
import type {Locale} from "@/i18n/translations";
type Params = {params: Promise<{locale: Locale}>};
export async function generateMetadata({params}:Params) {
  const {locale} = await params;
  return guideMeta(locale,"/nearby",guideLabels[locale].directory,guideLabels[locale].lead);
}
export default async function Page({params}:Params) {
  const {locale}=await params;
  return <main className="area-index"><NearbyDirectory locale={locale} full/></main>;
}
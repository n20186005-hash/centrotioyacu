import Link from "next/link";
import { notFound } from "next/navigation";
import type {Locale} from "@/i18n/translations";
import {guideLabels} from "@/lib/guide-labels";
import {guideMeta} from "@/lib/guide-meta";
import guides from "@/lib/destinations.json";
type Params = {params: Promise<{locale: Locale;slug:string}>};
export function generateStaticParams() {return guides.map(({slug})=>({slug}));}
export const dynamicParams = false;
export async function generateMetadata({params}: Params) {
  const {locale,slug}=await params;
  const p=guides.find(g=>g.slug===slug);
  if(!p) notFound();
  return guideMeta(locale,"/nearby/"+slug,p.local[locale].name,p.local[locale].story,p.photo);
}
export default async function GuidePage({params}:Params) {
  const {locale,slug}=await params;
  const place=guides.find(p=>p.slug===slug);
  if(!place) notFound();
  const l=guideLabels[locale], c=place.local[locale];
  const hours=place.id===5?l.sat:place.hours==="day"?l.day:place.hours==="reserve"?l.reserve:place.hours==="museum"?l.museum:place.hours;
  const reference:Record<number,string>={5:`${l.adult} S/ 2 · ${l.child} S/ 1`,11:`${l.adult} S/ 5 · ${l.child} S/ 3`,17:"S/ 3",18:`${l.adult} S/ 5 · ${l.child} S/ 3`,20:`${l.adult} S/ 5 · ${l.child} S/ 3`};
  const fee=reference[place.id] ? l.price+" "+reference[place.id] : [0,10,23,28].includes(place.id)?l.free:l.unpriced;
  const map="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(place.local.es.name+", "+place.address+", San Martín, Perú");
  const near=guides.filter(p=>p.regional===place.regional);
  const next=near[(near.findIndex(p=>p.slug===slug)+1)%near.length];
  const qs=[[c.question,c.answer],[l.start,c.route[0]+" · "+place.address],[l.howlong,l.allow+" · "+place.minutes+" "+l.minutes]];
  return <main className="place-page">
    <header className="place-hero"><img src={place.photo} alt={c.name} fetchPriority="high"/><div><Link href={`/${locale}/nearby`}>{l.directory}</Link><h1>{c.name}</h1><p>{place.regional?l.regional:l.local}</p><a href={map}>{place.address}</a></div></header>
    <article className="place-body"><section><h2>{l.visit}</h2><p>{c.story}</p></section>
    <section><h2>{l.facts}</h2><dl>{[[l.address,place.address],[l.time,place.minutes+" "+l.minutes],[l.hours,hours],[l.fees,fee]].map(([k,v])=><div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></section>
    <section><h2>{l.route}</h2><ol>{c.route.map(step=><li key={step}>{step}</li>)}</ol></section>
    <section><h2>{l.plan}</h2><p>{place.regional?l.regionbase:l.valleybase}</p><a href={map}>{l.map}</a></section>
    <section><h2>{l.faq}</h2>{qs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
    <aside><a href={place.source} rel="noreferrer">{l.source} · {place.source.includes("mincetur")?"MINCETUR":"PROMPERÚ"}</a></aside>
    <section><h2>{l.next}</h2><div className="place-nav"><Link href={`/${locale}/nearby/${next.slug}`}>{next.local[locale].name}</Link><Link href={`/${locale}/nearby`}>{l.more}</Link><Link href={`/${locale}`}>{l.home}</Link></div></section>
    </article></main>;
}
import Link from "next/link";
import { guideLabels } from "@/lib/guide-labels";
import places from "@/lib/destination-index.json";
import type { Locale } from "@/i18n/translations";
import "./nearby.css";

export default function NearbyDirectory({locale, full = false}: {locale: Locale; full?: boolean}) {
  const l = guideLabels[locale];
  const Heading = full ? "h1" : "h2";
  return <section id="nearby" className="area-directory">
    <div className="area-inner"><Heading>{l.directory}</Heading><p className="area-intro">{l.lead}</p>
    {[false, true].map(region => <section key={String(region)}>
      <h3>{region ? l.regional : l.local}</h3>
      <div className="area-cards">{places.filter(p => p.regional === region).map(p =>
        <Link className="area-card" key={p.slug} href={`/${locale}/nearby/${p.slug}`}>
          <img src={p.photo} alt="" loading="lazy" width="360" height="200" />
          <span><strong>{p.names[locale]}</strong><small>{p.address}</small></span>
        </Link>)}</div>
    </section>)}</div>
  </section>;
}

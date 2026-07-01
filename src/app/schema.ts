export function generateSchema(locale: string) {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN}`;
  const lang = locale === "en" ? "en-US" : locale === "es" ? "es-PE" : locale === "qu" ? "qu-PE" : "zh-CN";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TouristAttraction", "Park"],
        "name": locale === "en" ? "Centro turístico Tio Yacu" : locale === "es" ? "Centro turístico Tio Yacu" : locale === "qu" ? "Centro turístico Tio Yacu" : "Centro turístico Tio Yacu（蒂奥雅库旅游中心）",
        "description": locale === "en"
          ? "Centro turístico Tio Yacu is a natural ecological tourism scenic area in Rioja, Peru, featuring Amazon rainforest ecology, river activities, and indigenous culture. A perfect destination for ecotourism and nature lovers."
          : locale === "es"
          ? "El Centro turístico Tio Yacu es un área escénica de turismo ecológico natural en Rioja, Perú, con ecología de selva amazónica, actividades de río y cultura indígena. Un destino perfecto para ecoturismo y amantes de la naturaleza."
          : locale === "qu"
          ? "Centro turístico Tio Yacu nisqa Piruw Rioja llaqtapi, Amazonas sachakunawan, mayukunawan, runakunap kawsayninwan tiyan. Pachamama puriypaq allin."
          : "Centro turístico Tio Yacu 是秘鲁里奥哈的一处自然生态旅游景区，拥有亚马逊雨林生态、河流活动和文化。是生态旅游和自然爱好者的完美目的地。",
        "url": `${baseUrl}/${locale}`,
        "touristType": ["NaturalAttraction", "Ecotourism", "AmazonRainforest", "RiverActivities"],
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -6.045719,
          "longitude": -77.225492
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "attractionType",
            "value": "Natural ecological tourism scenic area",
            "description": "Natural attraction with Amazon rainforest ecology and river activities"
          },
          {
            "@type": "PropertyValue",
            "name": "rating",
            "value": "4.6/5",
            "description": "Rated 4.6 out of 5 with 5,071 Google reviews"
          }
        ],
        "isAccessibleForFree": true,
        "maximumAttendeeCapacity": 500,
        "publicAccess": true,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rioja 22841",
          "addressLocality": "Rioja",
          "addressRegion": "San Martín",
          "addressCountry": "PE",
          "geo": "2P57+G26"
        },
        "subjectOf": [
          {
            "@type": "CreativeWork",
            "headline": locale === "en" ? "Centro turístico Tio Yacu: Amazon Nature Paradise" : locale === "es" ? "Centro turístico Tio Yacu: Paraíso Natural Amazónico" : locale === "qu" ? "Centro turístico Tio Yacu: Pachamama Puriy" : "Centro turístico Tio Yacu：亚马逊自然天堂",
            "about": "Guide to Centro turístico Tio Yacu natural ecological tourism scenic area in Rioja, featuring Amazon rainforest ecology and river activities"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": `${baseUrl}/${locale}`
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": locale === "en" ? "Rioja Attractions" : locale === "es" ? "Atractivos de Rioja" : locale === "qu" ? "Rioja atractivokuna" : "里奥哈景点",
            "item": `${baseUrl}/${locale}`
          }
        ]
      }
    ]
  };
}

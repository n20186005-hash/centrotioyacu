export type Locale = "zh" | "en" | "es" | "qu";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };
export type TimelineEvent = { period: string; description: string };
export type HistorySection = { subtitle: string; content: string };
export type EcologySection = { subtitle: string; content: string };
export type CultureSection = { subtitle: string; content: string };

export type Translations = {
  nav: { about: string; history: string; ecology: string; culture: string; visiting: string; transportation: string; tips: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  about: { title: string; p1: string; p2: string; highlights: { title: string; items: string[] }; timeline: { title: string; events: TimelineEvent[] }; management: { title: string; content: string } };
  history: { title: string; intro: string; sections: HistorySection[] };
  ecology: { title: string; sections: EcologySection[] };
  culture: { title: string; intro: string; sections: CultureSection[]; events: { title: string; items: string[] } };
  visiting: { title: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; birds: { title: string; content: string }; bring: { title: string; items: string[] }; route: { title: string; content: string } };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; city: { title: string; content: string; steps: string[] }; selfDrive: { title: string; content: string; steps: string[] } };
  tips: { title: string; items: string[] };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { about: "景点概览", history: "历史沿革", ecology: "生态环境", culture: "文化与活动", visiting: "游览指南", transportation: "交通接驳", tips: "游览建议", gallery: "照片画廊", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: { tagline: "秘鲁圣马丁大区 · 自然旅游胜地", title: "Centro turístico Tio Yacu", subtitle: "秘鲁里奥哈 · 自然生态旅游景区", cta: "探索景区" },
    rating: { reviews: "条评价", source: "Google 评论" },
    about: {
      title: "景点概览",
      p1: "Centro turístico Tio Yacu 位于秘鲁圣马丁大区里奥哈省，是一处以自然生态为主题的旅游胜地。景区坐落在亚马逊河支流畔，拥有丰富的热带雨林资源和原始自然风光。\n\n这里是大自然爱好者的天堂，游客可以亲近自然、观察野生动植物、享受亚马逊地区的独特生态系统。景区致力于可持续旅游发展，让游客在欣赏美景的同时，也能了解和保护亚马逊雨林生态。",
      p2: "Tio Yacu 在当地方言中有着特殊含义，景区以其原始的自然风貌、清澈的河流和丰富的生物多样性吸引着越来越多的游客。这里不仅是旅游目的地，更是生态教育和文化体验的重要场所。",
      highlights: { title: "景点亮点", items: ["地理位置: 秘鲁里奥哈省圣马丁大区", "景区性质: 自然生态旅游景区", "特色: 亚马逊雨林、河流活动、土著文化", "评分: Google 4.6分（5,071条评价）"] },
      timeline: { title: "景区发展沿革", events: [
        { period: "规划建设", description: "Centro turístico Tio Yacu 作为里奥哈地区新兴的自然旅游景区规划建设，旨在为游客提供安全、舒适的自然体验环境。" },
        { period: "设施完善", description: "景区逐步完善旅游设施，添加雨林徒步、河流活动、生态观察等项目，成为圣马丁大区重要的自然旅游目的地。" },
        { period: "持续发展", description: "景区不断完善各类设施，新增文化体验、生态教育等项目，在Google上获得了4.6分的高评分。" }
      ]},
      management: { title: "管理与维护", content: "景区由当地政府和管理团队共同管理维护，是市民和游客重要的自然生态旅游场所。请爱护景区环境，保持整洁。" }
    },
    history: {
      title: "历史沿革",
      intro: "Centro turístico Tio Yacu 作为里奥哈地区新兴的自然旅游景区，承载着保护亚马逊生态和发展可持续旅游的重要使命。\n\n景区的发展体现了秘鲁政府对亚马逊地区生态旅游的重视，为游客提供亲近自然、了解亚马逊文化的机会。",
      sections: [
        { subtitle: "景区开发建设", content: "随着秘鲁对亚马逊地区生态旅游的重视，Centro turístico Tio Yacu 逐步开发建设，旨在为游客提供安全、舒适的自然体验环境，同时保护当地生态环境。" },
        { subtitle: "生态旅游发展", content: "景区以可持续发展为理念，在保护原始生态的前提下，逐步完善旅游设施，成为圣马丁大区重要的自然旅游目的地，在Google上获得了4.6分的高评分。" }
      ]
    },
    ecology: {
      title: "生态环境",
      sections: [
        { subtitle: "热带雨林生态", content: "景区位于亚马逊雨林边缘地带，拥有丰富的热带雨林生态系统。这里植被茂密，生物多样性极高，是观察亚马逊动植物的绝佳地点。\n\n游客可以在专业向导的带领下，探索原始雨林，了解热带植物的奥秘和亚马逊生态的复杂性。" },
        { subtitle: "河流与水体", content: "景区毗邻亚马逊河支流，河水清澈，是许多水生动物的栖息地。游客可以在河中游泳、划船，享受清凉的河水，观察水鸟和河豚等水生生物。\n\n河流不仅是游客娱乐的场所，也是当地生态系统的重要组成部分，维持着丰富的生物多样性。" },
        { subtitle: "野生动植物观察", content: "景区内生活着丰富多样的野生动植物，包括热带鸟类、猴子、树懒、淡水海豚等。这里是观鸟和野生动物摄影的理想地点。\n\n景区提供专业的生态导览服务，让游客在专业人士的带领下安全地观察和了解亚马逊野生动物。" }
      ]
    },
    culture: {
      title: "文化与社区活动",
      intro: "Centro turístico Tio Yacu 不仅是自然旅游景区，更是了解亚马逊土著文化、体验当地社区生活的重要窗口。",
      sections: [
        { subtitle: "亚马逊土著文化", content: "景区周边生活着亚马逊土著居民，游客可以了解他们的传统生活方式、手工艺制作、传统医药知识等。这种文化体验让游客对亚马逊文化有更深入的了解。\n\n当地社区积极参与景区管理和旅游服务，通过旅游收入改善生活条件，同时保护和传承自己的文化。" },
        { subtitle: "生态旅游活动", content: "景区提供多种生态旅游活动，包括雨林徒步、河流泛舟、野生动植物观察、星空观测等。这些活动让游客充分感受亚马逊的自然魅力。\n\n专业向导会为游客讲解雨林知识、识别动植物、分享生态保护的理念，使每次游览都成为一次生动的自然教育课程。" }
      ],
      events: { title: "景区文化活动", items: [
        "雨林徒步：在专业向导带领下探索热带雨林",
        "河流活动：游泳、划船、观察水生动植物",
        "野生动植物观察：观察热带鸟类、猴子等",
        "文化体验：了解亚马逊土著文化与传统",
        "生态教育：学习亚马逊生态保护知识",
        "星空观测：在无光污染的环境中观赏星空"
      ]}
    },
    visiting: {
      title: "游览指南",
      hours: { title: "开放时间", content: "08:00 – 17:00\n每日开放", note: "⚠️ 提醒：建议白天前往，注意安全。部分活动可能需要提前预约。" },
      price: { title: "费用", content: "景区门票费用请现场咨询\n部分活动可能单独收费", note: "具体费用和优惠政策建议提前查询或致电咨询。" },
      duration: { title: "建议游览时长", content: "建议预留 4 – 6 小时", note: "若计划进行多种活动（如雨林徒步、河流活动、文化体验等），建议预留半天或更长时间。" },
      birds: { title: "生态观察", content: "景区是观察亚马逊动植物的绝佳地点。在这里，您可以观察到热带鸟类、猴子、树懒等野生动物，感受亚马逊雨林的神奇魅力。\n\n建议您在专业向导的带领下进行生态观察，这样既安全又能获得更专业的知识和体验。" },
      bring: { title: "游览建议物品", items: ["舒适的步行鞋（雨林徒步需要）", "防蚊虫用品（亚马逊地区必备）", "防晒用品与帽子", "轻便防水衣物（雨林气候多变）", "相机或手机（记录美好时光）", "饮用水和零食", "望远镜（观鸟和观察野生动物）"] },
      route: { title: "推荐活动路线", content: "我们特别推荐以下景区游览路线：\n\n1. 约08:00 从景区入口进入，首先进行雨林徒步，了解热带雨林生态\n2. 约10:00 前往河流区域，可以享受游泳、划船等水上活动\n3. 约12:00 在景区内享用午餐或休息\n4. 约13:30 参加野生动植物观察活动，在专业向导带领下观察亚马逊动物\n5. 约15:00 体验亚马逊土著文化，了解当地传统\n6. 约16:30 自由活动，拍摄美景或购买当地手工艺品\n\n这条路线能让您充分体验景区的自然和文化魅力。" }
    },
    transportation: {
      title: "交通接驳",
      airport: { title: "从塔拉波托机场出发", content: "距离塔拉波托机场约 120 公里，车程约 3-4 小时。", options: [
        { name: "出租车/包车(最便捷)", price: "约 $80 - $120 美元", time: "约 3-4 小时", steps: ["在机场出口处乘坐出租车或包车", "前往里奥哈市的 Centro turístico Tio Yacu", "路况较好，沿途可欣赏安第斯山脉风光"] },
        { name: "公共交通(经济实惠)", price: "约 $10 - $20 美元", time: "约 4-5 小时", steps: ["在塔拉波托乘坐长途汽车前往里奥哈", "到达里奥哈后转乘当地交通前往景区", "建议提前了解班次时间"] }
      ]},
      city: { title: "从里奥哈市内前往", content: "景区位于里奥哈市附近，从市区前往十分方便。", steps: ["导航: 在 Google Maps 中输入 Centro turístico Tio Yacu", "打车或使用当地交通前往景区", "从里奥哈市中心出发约15-30分钟即可到达"] },
      selfDrive: { title: "自驾前往", content: "从塔拉波托或里奥哈自驾前往景区非常方便。", steps: ["导航至 Centro turístico Tio Yacu, Rioja, Peru", "道路状况良好，适合自驾", "建议提前了解路线和路况"] }
    },
    tips: { title: "游览建议", items: [
      "建议白天前往，注意安全",
      "推荐早晨或傍晚时分游览，避开正午烈日",
      "适合自然爱好者和生态旅游爱好者",
      "请做好防蚊虫措施，建议携带防蚊液",
      "建议穿着长袖长裤，防止蚊虫叮咬和植物划伤",
      "请注意保持景区整洁，不要乱扔垃圾",
      "建议携带望远镜，便于观察鸟类等野生动物",
      "如果想进行专业生态观察，建议提前预约向导服务",
      "建议携带防水袋，保护电子设备和贵重物品",
      "建议穿着舒适的徒步鞋，方便在雨林中行走",
      "建议提前了解当地天气情况，准备合适衣物"
    ] },
    gallery: { title: "精彩照片", viewMore: "在 Google Maps 查看更多相片" },
    reviews: { title: "游客评价", subtitle: "来自 Google Maps 的真实评价", viewMore: "在 Google Maps 查看更多评价" },
    faq: { title: "常见问题", subtitle: "深入了解 Centro turístico Tio Yacu", items: [
      { question: "Centro turístico Tio Yacu 的开放时间是？", answer: "景区每日开放，开放时间为08:00-17:00。建议白天前往，注意安全。部分活动可能需要提前预约。" },
      { question: "进入景区需要门票吗？", answer: "景区门票费用请现场咨询。具体费用和优惠政策建议提前查询或致电咨询。部分特色活动可能需要单独付费。" },
      { question: "景区有哪些特色活动？", answer: "景区的特色活动包括：\n1. 雨林徒步——在专业向导带领下探索热带雨林；\n2. 河流活动——游泳、划船、观察水生动植物；\n3. 野生动植物观察——观察热带鸟类、猴子、树懒等；\n4. 文化体验——了解亚马逊土著文化和传统；\n5. 生态教育——学习亚马逊生态保护知识；\n6. 星空观测——在无光污染的环境中观赏星空。" },
      { question: "如何前往 Centro turístico Tio Yacu？", answer: "景区位于秘鲁里奥哈市附近。从塔拉波托机场打车约3-4小时，从里奥哈市内出发约15-30分钟即可到达。具体导航可在 Google Maps 中搜索景区名称。" },
      { question: "景区附近还有哪些值得一游的景点？", answer: "里奥哈和圣马丁大区有许多值得游览的景点，包括：\n1. 塔拉波托——圣马丁大区重要城市；\n2. 亚马逊雨林保护区——体验原始雨林风光；\n3. 当地市场和餐厅——品尝正宗亚马逊美食；\n4. 土著社区参观——了解亚马逊土著文化；\n5. 河流探险——探索亚马逊河支流的神秘魅力。" }
    ]},
    location: { title: "地图位置", address: "2P57+G26, Rioja 22841\n秘鲁里奥哈省", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "作为自然旅游景区，请与我们一起爱护环境、保护生态。保持景区整洁，共同维护这一美好的自然场所。", text: "© 2026 Centro turístico Tio Yacu 指南 · 保留所有权利。\n本网站是一个独立的第三方指南项目，致力于准确传播里奥哈旅游信息。我们与当地政府或其他官方机构没有任何关联。", made: "本网站是一个独立的第三方指南项目。为探索者与学习者而制。", linksTitle: "相关链接", links: [
      { name: "秘鲁国家旅游局官方指南", url: "https://www.peru.travel/es/destinos/san-martin" },
      { name: "里奥哈省市政府官网", url: "https://www.gob.pe/municipalidad-provincial-de-rioja-mpr-rioja" },
      { name: "圣马丁大区政府", url: "https://www.gob.pe/regionsanmartin" },
      { name: "Caminos Andinos - 圣马丁生态旅游指南", url: "https://caminosandinos.travel/es/destination-listing/san-martin/" },
      { name: "秘鲁外贸和旅游部", url: "https://www.gob.pe/mincetur" },
      { name: "秘鲁国家自然保护区管理局", url: "https://www.gob.pe/sernanp" }
    ]}
  },

  en: {
    nav: { about: "Overview", history: "History", ecology: "Ecology", culture: "Culture & Activities", visiting: "Visit Guide", transportation: "Getting There", tips: "Travel Tips", gallery: "Photo Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: { tagline: "San Martín, Peru · Natural Tourist Attraction", title: "Centro turístico Tio Yacu", subtitle: "Rioja, Peru · Natural Ecological Tourism Scenic Area", cta: "Explore the Scenic Area" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    about: {
      title: "Overview",
      p1: "Centro turístico Tio Yacu is located in Rioja Province, San Martín Region, Peru. It is a tourist attraction with a theme of natural ecology. The scenic area is situated by the tributary of the Amazon River, with rich tropical rainforest resources and original natural landscapes.\n\nThis is a paradise for nature lovers, where visitors can get close to nature, observe wildlife and plants, and enjoy the unique ecosystem of the Amazon region. The scenic area is committed to sustainable tourism development, allowing visitors to appreciate the beautiful scenery while also understanding and protecting the Amazon rainforest ecology.",
      p2: "Tio Yacu has a special meaning in the local dialect. The scenic area attracts more and more visitors with its original natural style, clear rivers and rich biodiversity. It is not only a tourist destination, but also an important place for ecological education and cultural experience.",
      highlights: { title: "Highlights", items: ["Location: Rioja Province, San Martín Region, Peru", "Character: Natural ecological tourism scenic area", "Features: Amazon rainforest, river activities, indigenous culture", "Rating: Google 4.6/5 (5,071 reviews)"] },
      timeline: { title: "Scenic Area Development Timeline", events: [
        { period: "Planning & Construction", description: "Centro turístico Tio Yacu was planned and constructed as an emerging natural tourism scenic area in the Rioja region, aiming to provide visitors with safe and comfortable natural experience environment." },
        { period: "Facility Improvement", description: "The scenic area gradually improved tourism facilities, adding rainforest hiking, river activities, ecological observation and other projects, becoming an important natural tourism destination in San Martín Region." },
        { period: "Continuous Development", description: "The scenic area continuously improves various facilities, adding cultural experience, ecological education and other projects, obtaining a high Google rating of 4.6 points." }
      ]},
      management: { title: "Management & Maintenance", content: "The scenic area is managed and maintained by the local government and management team. Please help keep the scenic area clean and tidy." }
    },
    history: {
      title: "History & Development",
      intro: "As an emerging natural tourism scenic area in the Rioja region, Centro turístico Tio Yacu carries the important mission of protecting the Amazon ecology and developing sustainable tourism.\n\nThe development of the scenic area reflects the Peruvian government's emphasis on ecotourism in the Amazon region, providing visitors with opportunities to get close to nature and understand Amazon culture.",
      sections: [
        { subtitle: "Scenic Area Development & Construction", content: "With Peru's emphasis on ecotourism in the Amazon region, Centro turístico Tio Yacu has been gradually developed and constructed, aiming to provide visitors with a safe and comfortable natural experience environment while protecting the local ecological environment." },
        { subtitle: "Ecotourism Development", content: "The scenic area takes sustainable development as its concept. While protecting the original ecology, it gradually improves tourism facilities and becomes an important natural tourism destination in the San Martín Region, with a high Google rating of 4.6 points." }
      ]
    },
    ecology: {
      title: "Ecology & Environment",
      sections: [
        { subtitle: "Tropical Rainforest Ecology", content: "The scenic area is located on the edge of the Amazon rainforest, with rich tropical rainforest ecosystem. The vegetation here is dense and biodiversity is extremely high, making it an excellent place to observe Amazon wildlife and plants.\n\nVisitors can explore the original rainforest under the guidance of professional guides, understand the mysteries of tropical plants and the complexity of the Amazon ecology." },
        { subtitle: "Rivers & Water Bodies", content: "The scenic area is adjacent to the tributary of the Amazon River. The river water is clear and is a habitat for many aquatic animals. Visitors can swim and boat in the river, enjoy the cool river water, and observe aquatic animals such as waterbirds and river dolphins.\n\nThe river is not only a place for tourists to have fun, but also an important part of the local ecosystem, maintaining rich biodiversity." },
        { subtitle: "Wildlife & Plant Observation", content: "The scenic area is home to rich and diverse wildlife and plants, including tropical birds, monkeys, sloths, freshwater dolphins, etc. It is an ideal place for bird watching and wildlife photography.\n\nThe scenic area provides professional ecological guide services, allowing visitors to safely observe and understand Amazon wildlife under the guidance of professionals." }
      ]
    },
    culture: {
      title: "Culture & Community Activities",
      intro: "Centro turístico Tio Yacu is not only a natural tourism scenic area, but also an important window to understand Amazon indigenous culture and experience local community life.",
      sections: [
        { subtitle: "Amazon Indigenous Culture", content: "Amazon indigenous residents live around the scenic area. Visitors can understand their traditional lifestyle, handicraft production, traditional medicine knowledge, etc. This cultural experience allows visitors to have a deeper understanding of Amazon culture.\n\nLocal communities actively participate in scenic area management and tourism services, improving their living conditions through tourism income while protecting and inheriting their own culture." },
        { subtitle: "Ecotourism Activities", content: "The scenic area provides a variety of ecotourism activities, including rainforest hiking, river boating, wildlife and plant observation, stargazing, etc. These activities allow visitors to fully experience the natural charm of the Amazon.\n\nProfessional guides will explain rainforest knowledge, identify animals and plants, and share ecological protection concepts, making each tour a vivid natural education course." }
      ],
      events: { title: "Scenic Area Cultural Activities", items: [
        "Rainforest Hiking: Explore tropical rainforest under professional guide",
        "River Activities: Swimming, boating, observing aquatic life",
        "Wildlife Observation: Observe tropical birds, monkeys, etc.",
        "Cultural Experience: Learn about Amazon indigenous culture and traditions",
        "Ecological Education: Learn Amazon ecological protection knowledge",
        "Stargazing: Observe starry sky in environment without light pollution"
      ]}
    },
    visiting: {
      title: "Visitor Guide",
      hours: { title: "Opening Hours", content: "08:00 – 17:00\nOpen daily", note: "⚠️ Note: Daytime visits are recommended. Please be careful. Some activities may require advance reservation." },
      price: { title: "Admission", content: "Please inquire on-site for ticket prices\nSome activities may charge separately", note: "It is recommended to check in advance or call for consultation on specific fees and preferential policies." },
      duration: { title: "Recommended Duration", content: "Recommended: 4 – 6 hours", note: "If you plan to engage in various activities (such as rainforest hiking, river activities, cultural experience, etc.), consider reserving half a day or longer." },
      birds: { title: "Ecological Observation", content: "The scenic area is an excellent place to observe Amazon wildlife and plants. Here, you can observe tropical birds, monkeys, sloths and other wild animals, and feel the magical charm of the Amazon rainforest.\n\nIt is recommended that you conduct ecological observation under the guidance of professional guides, which is both safe and can obtain more professional knowledge and experience." },
      bring: { title: "Recommended Items", items: ["Comfortable walking shoes (needed for rainforest hiking)", "Insect repellent (essential in Amazon region)", "Sun protection & hat", "Lightweight waterproof clothing (rainforest climate is changeable)", "Camera or phone (to record wonderful moments)", "Drinking water and snacks", "Binoculars (for bird watching and wildlife observation)"] },
      route: { title: "Recommended Activity Route", content: "We especially recommend the following scenic area visit route:\n\n1. ~08:00: Enter from the scenic area entrance, first take a rainforest hike to understand tropical rainforest ecology\n2. ~10:00: Head to the river area, enjoy swimming, boating and other water activities\n3. ~12:00: Enjoy lunch or rest in the scenic area\n4. ~13:30: Participate in wildlife observation activities, observe Amazon animals under professional guide\n5. ~15:00: Experience Amazon indigenous culture and understand local traditions\n6. ~16:30: Free activities, take photos of beautiful scenery or buy local handicrafts\n\nThis route allows you to fully experience the natural and cultural charm of the scenic area." }
    },
    transportation: {
      title: "Getting There",
      airport: { title: "From Tarapoto Airport", content: "About 120 km from Tarapoto Airport, approx. 3-4 hours by car.", options: [
        { name: "Taxi/Chartered Car (Most Convenient)", price: "About $80 - $120 USD", time: "About 3-4 hours", steps: ["Take a taxi or chartered car at the airport exit", "Head to Centro turístico Tio Yacu in Rioja", "Good road conditions, enjoy Andean mountain scenery along the way"] },
        { name: "Public Transportation (Economical)", price: "About $10 - $20 USD", time: "About 4-5 hours", steps: ["Take a long-distance bus from Tarapoto to Rioja", "After arriving in Rioja, transfer to local transportation to the scenic area", "It is recommended to understand the schedule in advance"] }
      ]},
      city: { title: "From Within Rioja", content: "The scenic area is located near Rioja city, very convenient to access from the city.", steps: ["Navigation: Enter Centro turístico Tio Yacu in Google Maps", "Take a taxi or use local transportation to the scenic area", "About 15-30 minutes from downtown Rioja"] },
      selfDrive: { title: "Driving", content: "It is very convenient to drive from Tarapoto or Rioja to the scenic area.", steps: ["Navigate to Centro turístico Tio Yacu, Rioja, Peru", "Good road conditions, suitable for self-driving", "It is recommended to understand the route and road conditions in advance"] }
    },
    tips: { title: "Travel Tips", items: [
      "Daytime visits are recommended. Please be careful",
      "Morning or evening visits are recommended to avoid midday sun",
      "Suitable for nature lovers and ecotourism enthusiasts",
      "Please take insect repellent measures, it is recommended to carry mosquito repellent",
      "It is recommended to wear long sleeves and long pants to prevent mosquito bites and plant scratches",
      "Please keep the scenic area clean and tidy—let's preserve this environment together",
      "It is recommended to carry binoculars for observing birds and other wild animals",
      "If you want to conduct professional ecological observation, it is recommended to reserve guide services in advance",
      "It is recommended to carry waterproof bags to protect electronic devices and valuables",
      "Comfortable hiking shoes are recommended for easy walking in the rainforest",
      "It is recommended to understand local weather conditions in advance and prepare appropriate clothing"
    ] },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps" },
    reviews: { title: "Visitor Reviews", subtitle: "Real reviews from Google Maps", viewMore: "View More Reviews on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn more about Centro turístico Tio Yacu", items: [
      { question: "What are the opening hours of Centro turístico Tio Yacu?", answer: "The scenic area is open daily from 08:00-17:00. Daytime visits are recommended. Please be careful. Some activities may require advance reservation." },
      { question: "Is there an entrance fee for the scenic area?", answer: "Please inquire on-site for ticket prices. It is recommended to check in advance or call for consultation on specific fees and preferential policies. Some characteristic activities may require separate payment." },
      { question: "What special activities does the scenic area have?", answer: "The special activities of the scenic area include:\n1. Rainforest Hiking——explore tropical rainforest under professional guide;\n2. River Activities——swimming, boating, observing aquatic life;\n3. Wildlife Observation——observe tropical birds, monkeys, sloths, etc.;\n4. Cultural Experience——understand Amazon indigenous culture and traditions;\n5. Ecological Education——learn Amazon ecological protection knowledge;\n6. Stargazing——observe starry sky in environment without light pollution." },
      { question: "How to get to Centro turístico Tio Yacu?", answer: "The scenic area is located near Rioja city, Peru. It's about 3-4 hours by taxi from Tarapoto Airport, and about 15-30 minutes from downtown Rioja. For specific navigation, search for the scenic area name in Google Maps." },
      { question: "What other attractions are worth visiting near the scenic area?", answer: "Rioja and San Martín Region have many attractions worth visiting, including:\n1. Tarapoto——important city in San Martín Region;\n2. Amazon Rainforest Reserve——experience original rainforest scenery;\n3. Local markets and restaurants——taste authentic Amazon cuisine;\n4. Indigenous community visits——understand Amazon indigenous culture;\n5. River exploration——explore the mysterious charm of Amazon River tributaries." }
    ]},
    location: { title: "Map Location", address: "2P57+G26, Rioja 22841\nRioja Province, Peru", openMaps: "View Location on Google Maps" },
    footer: { callToAction: "As a natural tourism scenic area, please join us in caring for the environment and protecting ecology. Keep the scenic area clean and maintain this beautiful natural place together.", text: "© 2026 Centro turístico Tio Yacu Guide · All rights reserved.\nThis website is an independent third-party guide project dedicated to accurately sharing tourism information about Rioja. We are not affiliated with the local government or any official authority.", made: "This website is an independent third-party guide project. Made for explorers and learners.", linksTitle: "Related Links", links: [
      { name: "Peru National Tourism Bureau Official Guide", url: "https://www.peru.travel/es/destinos/san-martin" },
      { name: "Rioja Provincial Municipal Government", url: "https://www.gob.pe/municipalidad-provincial-de-rioja-mpr-rioja" },
      { name: "San Martín Regional Government", url: "https://www.gob.pe/regionsanmartin" },
      { name: "Caminos Andinos - San Martín Ecotourism Guide", url: "https://caminosandinos.travel/es/destination-listing/san-martin/" },
      { name: "Peru Ministry of Foreign Trade and Tourism", url: "https://www.gob.pe/mincetur" },
      { name: "Peru National Service of Natural Protected Areas", url: "https://www.gob.pe/sernanp" }
    ]}
  },

  es: {
    nav: { about: "Descripción", history: "Historia", ecology: "Ecología", culture: "Cultura y Actividades", visiting: "Guía de Visita", transportation: "Cómo Llegar", tips: "Consejos", gallery: "Galería de Fotos", reviews: "Reseñas", faq: "Preguntas Frecuentes", location: "Ubicación" },
    hero: { tagline: "San Martín, Perú · Atractivo Turístico Natural", title: "Centro turístico Tio Yacu", subtitle: "Rioja, Perú · Área Scénica de Turismo Ecológico Natural", cta: "Explora el Área Scénica" },
    rating: { reviews: "reseñas", source: "Google Reviews" },
    about: {
      title: "Descripción General",
      p1: "El Centro turístico Tio Yacu se encuentra en la Provincia de Rioja, Región San Martín, Perú. Es un atractivo turístico con tema de ecología natural. El área scénica está situada junto al afluente del Río Amazonas, con ricos recursos de selva tropical y paisajes naturales originales.\n\nEste es un paraíso para los amantes de la naturaleza, donde los visitantes pueden acercarse a la naturaleza, observar fauna y flora silvestre, y disfrutar del ecosistema único de la región amazónica. El área scénica está comprometida con el desarrollo del turismo sostenible, permitiendo a los visitantes apreciar el hermoso paisaje mientras comprenden y protegen la ecología de la selva amazónica.",
      p2: "Tio Yacu tiene un significado especial en el dialecto local. El área scénica atrae a más y más visitantes con su estilo natural original, ríos claros y rica biodiversidad. No es solo un destino turístico, sino también un lugar importante para la educación ecológica y la experiencia cultural.",
      highlights: { title: "Datos Destacados", items: ["Ubicación: Provincia de Rioja, Región San Martín, Perú", "Carácter: Área scénica de turismo ecológico natural", "Características: Selva amazónica, actividades de río, cultura indígena", "Calificación: Google 4.6/5 (5,071 reseñas)"] },
      timeline: { title: "Línea de Tiempo del Desarrollo del Área Scénica", events: [
        { period: "Planificación y Construcción", description: "Centro turístico Tio Yacu fue planificado y construido como un área scénica de turismo natural emergente en la región de Rioja, con el objetivo de proporcionar a los visitantes un entorno de experiencia natural seguro y cómodo." },
        { period: "Mejora de Instalaciones", description: "El área scénica mejoró gradualmente las instalaciones turísticas, agregando caminatas por selva, actividades de río, observación ecológica y otros proyectos, convirtiéndose en un destino de turismo natural importante en la Región San Martín." },
        { period: "Desarrollo Continuo", description: "El área scénica mejora continuamente varias instalaciones, agregando experiencia cultural, educación ecológica y otros proyectos, obteniendo una alta calificación de Google de 4.6 puntos." }
      ]},
      management: { title: "Gestión y Mantenimiento", content: "El área scénica es gestionada y mantenida por el gobierno local y el equipo de gestión. Por favor, ayude a mantener el área scénica limpia y ordenada." }
    },
    history: {
      title: "Historia y Desarrollo",
      intro: "Como un área scénica de turismo natural emergente en la región de Rioja, el Centro turístico Tio Yacu lleva la importante misión de proteger la ecología amazónica y desarrollar el turismo sostenible.\n\nEl desarrollo del área scénica refleja la importancia que el gobierno peruano otorga al ecoturismo en la región amazónica, proporcionando a los visitantes oportunidades para acercarse a la naturaleza y comprender la cultura amazónica.",
      sections: [
        { subtitle: "Desarrollo y Construcción del Área Scénica", content: "Con la importancia que Perú otorga al ecoturismo en la región amazónica, el Centro turístico Tio Yacu ha sido desarrollado y construido gradualmente, con el objetivo de proporcionar a los visitantes un entorno de experiencia natural seguro y cómodo mientras se protege el entorno ecológico local." },
        { subtitle: "Desarrollo de Ecoturismo", content: "El área scénica toma el desarrollo sostenible como su concepto. Mientras se protege la ecología original, mejora gradualmente las instalaciones turísticas y se convierte en un destino de turismo natural importante en la Región San Martín, con una alta calificación de Google de 4.6 puntos." }
      ]
    },
    ecology: {
      title: "Ecología y Medio Ambiente",
      sections: [
        { subtitle: "Ecología de Selva Tropical", content: "El área scénica está ubicada en el borde de la selva amazónica, con un rico ecosistema de selva tropical. La vegetación aquí es densa y la biodiversidad es extremadamente alta, lo que la convierte en un excelente lugar para observar fauna y flora silvestre amazónica.\n\nLos visitantes pueden explorar la selva original bajo la guía de guías profesionales, comprender los misterios de las plantas tropicales y la complejidad de la ecología amazónica." },
        { subtitle: "Ríos y Cuerpos de Agua", content: "El área scénica está junto al afluente del Río Amazonas. El agua del río es clara y es un hábitat para muchos animales acuáticos. Los visitantes pueden nadar y navegar en el río, disfrutar del fresco agua del río, y observar animales acuáticos como aves acuáticas y delfines de río.\n\nEl río no es solo un lugar para que los turistas se diviertan, sino también una parte importante del ecosistema local, manteniendo una rica biodiversidad." },
        { subtitle: "Observación de Fauna y Flora Silvestre", content: "El área scénica es el hogar de una fauna y flora silvestre rica y diversa, incluyendo aves tropicales, monos, perezosos, delfines de agua dulce, etc. Es un lugar ideal para el avistamiento de aves y la fotografía de vida silvestre.\n\nEl área scénica proporciona servicios profesionales de guía ecológica, permitiendo a los visitantes observar y comprender la vida silvestre amazónica de manera segura bajo la guía de profesionales." }
      ]
    },
    culture: {
      title: "Cultura y Actividades Comunitarias",
      intro: "El Centro turístico Tio Yacu no es solo un área scénica de turismo natural, sino también una ventana importante para comprender la cultura indígena amazónica y experimentar la vida de la comunidad local.",
      sections: [
        { subtitle: "Cultura Indígena Amazónica", content: "Residentes indígenas amazónicos viven alrededor del área scénica. Los visitantes pueden comprender su estilo de vida tradicional, producción de artesanías, conocimiento de medicina tradicional, etc. Esta experiencia cultural permite a los visitantes tener una comprensión más profunda de la cultura amazónica.\n\nLas comunidades locales participan activamente en la gestión del área scénica y los servicios turísticos, mejorando sus condiciones de vida a través de los ingresos del turismo mientras protegen y heredan su propia cultura." },
        { subtitle: "Actividades de Ecoturismo", content: "El área scénica proporciona una variedad de actividades de ecoturismo, incluyendo caminatas por la selva, navegación por ríos, observación de fauna y flora silvestre, observación de estrellas, etc. Estas actividades permiten a los visitantes experimentar completamente el encanto natural del Amazonas.\n\nLos guías profesionales explicarán conocimientos de selva, identificarán animales y plantas, y compartirán conceptos de protección ecológica, haciendo que cada tour sea un curso vívido de educación natural." }
      ],
      events: { title: "Actividades Culturales del Área Scénica", items: [
        "Caminata por Selva: Explorar selva tropical bajo guía profesional",
        "Actividades de Río: Natación, navegación, observación de vida acuática",
        "Observación de Fauna Silvestre: Observar aves tropicales, monos, etc.",
        "Experiencia Cultural: Aprender sobre cultura y tradiciones indígenas amazónicas",
        "Educación Ecológica: Aprender conocimientos de protección ecológica amazónica",
        "Observación de Estrellas: Observar cielo estrellado en ambiente sin contaminación lumínica"
      ]}
    },
    visiting: {
      title: "Guía de Visita",
      hours: { title: "Horario de Apertura", content: "08:00 – 17:00\nAbierto diariamente", note: "⚠️ Nota: Se recomiendan las visitas diurnas. Por favor, tenga cuidado. Algunas actividades pueden requerir reserva previa." },
      price: { title: "Entrada", content: "Por favor consultar los precios de entrada en el lugar\nAlgunas actividades pueden cobrar separadamente", note: "Se recomienda consultar con anticipación o llamar para consulta sobre tarifas específicas y políticas preferenciales." },
      duration: { title: "Duración Recomendada", content: "Recomendado: 4 – 6 horas", note: "Si planea participar en varias actividades (como caminatas por selva, actividades de río, experiencia cultural, etc.), considere reservar medio día o más." },
      birds: { title: "Observación Ecológica", content: "El área scénica es un excelente lugar para observar fauna y flora silvestre amazónica. Aquí, puede observar aves tropicales, monos, perezosos y otros animales silvestres, y sentir el encanto mágico de la selva amazónica.\n\nSe recomienda que realice observación ecológica bajo la guía de guías profesionales, lo cual es seguro y puede obtener conocimientos y experiencias más profesionales." },
      bring: { title: "Artículos Recomendados", items: ["Zapatos cómodos para caminar (necesarios para caminatas por selva)", "Repelente de insectos (esencial en región amazónica)", "Protección solar y sombrero", "Ropa impermeable ligera (clima de selva es cambiante)", "Cámara o teléfono (para registrar momentos maravillosos)", "Agua potable y bocadillos", "Binoculares (para avistamiento de aves y observación de fauna silvestre)"] },
      route: { title: "Ruta de Actividades Recomendada", content: "Recomendamos especialmente la siguiente ruta de visita al área scénica:\n\n1. ~08:00: Ingrese desde la entrada del área scénica, primero tome una caminata por la selva para comprender la ecología de la selva tropical\n2. ~10:00: Diríjase al área del río, disfrute de natación, navegación y otras actividades acuáticas\n3. ~12:00: Disfrute del almuerzo o descanse en el área scénica\n4. ~13:30: Participe en actividades de observación de fauna y flora silvestre, observe animales amazónicos bajo guía profesional\n5. ~15:00: Experimente la cultura indígena amazónica y comprenda las tradiciones locales\n6. ~16:30: Actividades libres, tome fotos del hermoso paisaje o compre artesanías locales\n\nEsta ruta le permite experimentar completamente el encanto natural y cultural del área scénica." }
    },
    transportation: {
      title: "Cómo Llegar",
      airport: { title: "Desde el Aeropuerto de Tarapoto", content: "A unos 120 km del Aeropuerto de Tarapoto, aproximadamente 3-4 horas en automóvil.", options: [
        { name: "Taxi/Auto Alquilado (Más Conveniente)", price: "Aprox. $80 - $120 USD", time: "Aproximadamente 3-4 horas", steps: ["Tomar un taxi o auto alquilado en la salida del aeropuerto", "Dirigirse al Centro turístico Tio Yacu en Rioja", "Buenas condiciones de carretera, disfrute del paisaje de los Andes en el camino"] },
        { name: "Transporte Público (Económico)", price: "Aprox. $10 - $20 USD", time: "Aproximadamente 4-5 horas", steps: ["Tomar un autobús de larga distancia de Tarapoto a Rioja", "Después de llegar a Rioja, transfiera al transporte local al área scénica", "Se recomienda entender el horario con anticipación"] }
      ]},
      city: { title: "Desde el Interior de Rioja", content: "El área scénica está ubicada cerca de la ciudad de Rioja, muy conveniente para acceder desde la ciudad.", steps: ["Navegación: Ingresar Centro turístico Tio Yacu en Google Maps", "Tomar un taxi o usar transporte local al área scénica", "Aproximadamente 15-30 minutos desde el centro de Rioja"] },
      selfDrive: { title: "Conduciendo", content: "Es muy conveniente conducir desde Tarapoto o Rioja al área scénica.", steps: ["Navegar al Centro turístico Tio Yacu, Rioja, Perú", "Buenas condiciones de carretera, adecuadas para conducción propia", "Se recomienda entender la ruta y condiciones de carretera con anticipación"] }
    },
    tips: { title: "Consejos de Viaje", items: [
      "Se recomiendan las visitas diurnas. Por favor, tenga cuidado",
      "Se recomiendan las visitas matutinas o vespertinas para evitar el sol del mediodía",
      "Adecuado para amantes de la naturaleza y entusiastas de ecoturismo",
      "Por favor tome medidas repelentes de insectos, se recomienda llevar repelente",
      "Se recomienda usar mangas largas y pantalones largos para prevenir picaduras de insectos y raspaduras de plantas",
      "Por favor mantenga el área scénica limpia y ordenada—preservemos juntos este entorno",
      "Se recomienda llevar binoculares para observar aves y otros animales silvestres",
      "Si desea realizar observación ecológica profesional, se recomienda reservar servicios de guía con anticipación",
      "Se recomienda llevar bolsas impermeables para proteger dispositivos electrónicos y objetos de valor",
      "Se recomiendan zapatos de caminata cómodos para caminar fácilmente en la selva",
      "Se recomienda comprender las condiciones climáticas locales con anticipación y preparar ropa apropiada"
    ] },
    gallery: { title: "Galería de Fotos", viewMore: "Ver Más en Google Maps" },
    reviews: { title: "Reseñas", subtitle: "Reseñas de Google Maps", viewMore: "Más Reseñas" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Aprenda más sobre el Centro turístico Tio Yacu", items: [
      { question: "¿Cuál es el horario de apertura del Centro turístico Tio Yacu?", answer: "El área scénica está abierta diariamente de 08:00-17:00. Se recomiendan las visitas diurnas. Por favor, tenga cuidado. Algunas actividades pueden requerir reserva previa." },
      { question: "¿Hay tarifa de entrada al área scénica?", answer: "Por favor consultar los precios de entrada en el lugar. Se recomienda consultar con anticipación o llamar para consulta sobre tarifas específicas y políticas preferenciales. Algunas actividades características pueden requerir pago separado." },
      { question: "¿Qué actividades especiales tiene el área scénica?", answer: "Las actividades especiales del área scénica incluyen:\n1. Caminata por Selva——explorar selva tropical bajo guía profesional;\n2. Actividades de Río——natación, navegación, observación de vida acuática;\n3. Observación de Fauna Silvestre——observar aves tropicales, monos, perezosos, etc.;\n4. Experiencia Cultural——comprender cultura y tradiciones indígenas amazónicas;\n5. Educación Ecológica——aprender conocimientos de protección ecológica amazónica;\n6. Observación de Estrellas——observar cielo estrellado en ambiente sin contaminación lumínica." },
      { question: "¿Cómo llegar al Centro turístico Tio Yacu?", answer: "El área scénica está ubicada cerca de la ciudad de Rioja, Perú. Unos 3-4 horas en taxi desde el Aeropuerto de Tarapoto, y unos 15-30 minutos desde el centro de Rioja. Para navegación específica, busque el nombre del área scénica en Google Maps." },
      { question: "¿Qué otras atracciones vale la pena visitar cerca del área scénica?", answer: "Rioja y la Región San Martín tienen muchas atracciones que vale la pena visitar, incluyendo:\n1. Tarapoto——ciudad importante en la Región San Martín;\n2. Reserva de Selva Amazónica——experimente el paisaje de selva original;\n3. Mercados locales y restaurantes——pruebe auténtica cocina amazónica;\n4. Visitas a comunidades indígenas——comprenda la cultura indígena amazónica;\n5. Exploración de ríos——explore el encanto misterioso de los afluentes del Río Amazonas." }
    ]},
    location: { title: "Ubicación en el Mapa", address: "2P57+G26, Rioja 22841\nProvincia de Rioja, Perú", openMaps: "Ver Ubicación en Google Maps" },
    footer: { callToAction: "Como un área scénica de turismo natural, por favor únanse a nosotros para cuidar el entorno y proteger la ecología. Mantenga el área scénica limpia y mantenga este hermoso lugar natural juntos.", text: "© 2026 Guía del Centro turístico Tio Yacu · Todos los derechos reservados.\nEste sitio web es un proyecto de guía independiente de terceros dedicado a compartir información turística precisa sobre Rioja. No estamos afiliados con el gobierno local ni ninguna autoridad oficial.", made: "Este sitio web es un proyecto de guía independiente de terceros. Hecho para exploradores y aprendices.", linksTitle: "Enlaces Relacionados", links: [
      { name: "Guía Oficial de Turismo Nacional de Perú", url: "https://www.peru.travel/es/destinos/san-martin" },
      { name: "Gobierno Municipal Provincial de Rioja", url: "https://www.gob.pe/municipalidad-provincial-de-rioja-mpr-rioja" },
      { name: "Gobierno Regional de San Martín", url: "https://www.gob.pe/regionsanmartin" },
      { name: "Caminos Andinos - Guía de Ecoturismo de San Martín", url: "https://caminosandinos.travel/es/destination-listing/san-martin/" },
      { name: "Ministerio de Comercio Exterior y Turismo de Perú", url: "https://www.gob.pe/mincetur" },
      { name: "Servicio Nacional de Áreas Naturales Protegidas por el Estado de Perú", url: "https://www.gob.pe/sernanp" }
    ]}
  },

  qu: {
    nav: { about: "Qhaway", history: "Ñawpa", ecology: "Pachamama", culture: "Kultura", visiting: "Rimay", transportation: "Chaykamuy", tips: "Yachay", gallery: "Rikuy", reviews: "Niykuna", faq: "Tapuykuna", location: "Maypi" },
    hero: { tagline: "San Martín, Piruw · Pachamama Puriy", title: "Centro turístico Tio Yacu", subtitle: "Rioja, Piruw · Pachamama Rikuy", cta: "Rikuy" },
    rating: { reviews: "niykuna", source: "Google niykuna" },
    about: {
      title: "Qhaway",
      p1: "Centro turístico Tio Yacu nisqa Piruw San Martín suyupi, Rioja pruwinsyapi tiyan. Pachamama puriy kachkan. Mayu patapi tiyan, sachakunapas achka kachkan.\n\nKaypi puriqkuna Pachamamawan tinkun, sachakunata rikun, pachamamata yupaychanku. Kaypi puriyqa sapa kutilla allin, Pachamamata yupaychanapaq.",
      p2: "Tio Yacu nisqaqa runakunap siminpi mana riqsiq. Maypipas, sachakunapas, mayukunapas achka kachkan. Kaypi puriyqa allin, yachanapaqpas.",
      highlights: { title: "Rikuy", items: ["Maypi: Rioja, San Martín, Piruw", "Allin: Pachamama puriy", "Achka: Sachakuna, mayukuna, runakuna", "Google: 4.6/5 (5,071 niykuna)"] },
      timeline: { title: "Ñawpa", events: [
        { period: "Puriy ruway", description: "Centro turístico Tio Yacu nisqa Rioja llaqtapi musuq puriy, Pachamamata amachanapaq." },
        { period: "Pachamama puriy wiñay", description: "Kay puriyqa Pachamamata amachan, allin puriyta ruwan. San Martín suyupi achka runakuna kaypi purinku." }
      ]},
      management: { title: "Amahana", content: "Kay puriyqa runakunawan allin puriy. Pachamamata ama waqlliychu." }
    },
    history: {
      title: "Ñawpa",
      intro: "Centro turístico Tio Yacu nisqa Rioja llaqtapi musuq puriy, Pachamamata amachanapaq, allin puriyta ruwanapaq.",
      sections: [
        { subtitle: "Puriy ruway", content: "Piruw mama llaqtapas Amazonas suyupi puriyta munan, chayrayku Centro turístico Tio Yacu ruwakun. Puriquqkuna Pachamamata rikunku, allinta purinku." },
        { subtitle: "Pachamama puriy wiñay", content: "Kay puriyqa Pachamamata amachan, allin puriyta ruwan. San Martín suyupi achka runakuna kaypi purinku, allinta niykuna Google nisqapi." }
      ]
    },
    ecology: {
      title: "Pachamama",
      sections: [
        { subtitle: "Sachakuna", content: "Kay puriyqa sachakunawan achka. Sachakuna hatun, q'omer achka. Puriquqkuna sachakunata rikunku, allinta yachanku." },
        { subtitle: "Mayukuna", content: "Mayu achka kachkan, yaku llimp'u. Puriquqkuna yakuwan pukllanku, mayupi purinku. Kaypi allin pukllay." },
        { subtitle: "Animalikuna", content: "Animalikuna achka kachkan: pisqukuna, k'usillukuna, wanaku hina. Puriquqkuna animalikunata rikunku, rikch'aykunkupas." }
      ]
    },
    culture: {
      title: "Kultura",
      intro: "Centro turístico Tio Yacu nisqaqa puriylla churapan, runakunap kawsaynintapas yachanapaq.",
      sections: [
        { subtitle: "Runakunap kawsaynin", content: "Kaypi runakuna kawsanku, munayninkuta ruwanku. Puriquqkuna runakunap kawsayninta yachanku, allinta rikunku." },
        { subtitle: "Pachamama puriy", content: "Kaypi puriyqa sachakunawan, mayukunawan, animalikunawan tinkun. Puriquqkuna Pachamamata yupaychanku." }
      ],
      events: { title: "Ruwaykuna", items: [
        "Sachakunata puriy",
        "Mayupi pukllay",
        "Animalikunata rikuy",
        "Runakunata yachay",
        "Pachamamata yupaychay",
        "Quyllurkunata rikuy"
      ]}
    },
    visiting: {
      title: "Puriy",
      hours: { title: "Punchaw", content: "08:00 – 17:00\nSapa punchaw", note: "⚠️ Allinta puriy." },
      price: { title: "Qullqi", content: "Qullqita chaypi tapuy", note: "Qullqita payllana mana riqsiyqa, tapuy." },
      duration: { title: "Unay", content: "4 – 6 ura", note: "Achka ruwayta munanki chayqa, achka unay puriy." },
      birds: { title: "Animalikunata rikuy", content: "Kaypi animalikuna achka: pisqukuna, k'usillukuna. Allinta rikunku, achka yachanku." },
      bring: { title: "Apamuy", items: ["Allin zapatukuna (sachakunapi puriy)", "Ch'uspi mana kachun (pachamama)", "Intita amachakuy", "Paraspa mana ruphachun p'achakuna", "Kamera (rikch'anapaq)", "Yakupas, mikhunapas", "Pisqukunata rikunanapaq"] },
      route: { title: "Puriy", content: "Kaykunata ruway:\n1. 08:00 - Puriy qallariy\n2. 10:00 - Mayupi pukllay\n3. 12:00 - Mikhuy\n4. 13:30 - Animalikunata rikuy\n5. 15:00 - Runakunata yachay\n6. 16:30 - Rikch'anakuna" }
    },
    transportation: {
      title: "Chaykamuy",
      airport: { title: "Tarapoto nisqamanta", content: "Tarapoto nisqapi antanka pampa, 120 km karu.", options: [
        { name: "Taxi (Allin)", price: "$80 - $120", time: "3-4 ura", steps: ["Antanka pampapi taxita apamuy", "Rioja man chayamuy", "Allin ñan"] },
        { name: "Omnibus (Pisi qullqi)", price: "$10 - $20", time: "4-5 ura", steps: ["Omnibus apamuy", "Rioja man chayamuy", "Chaymantá puriy"] }
      ]},
      city: { title: "Rioja llaqtamanta", content: "Rioja llaqtapi kachkan, chaykamuy allin.", steps: ["Google Maps nisqapi maskuy", "Taxita chayamuy", "15-30 uchu"] },
      selfDrive: { title: "Kuti puriy", content: "Kuti puriy allin, Rioja man chayay.", steps: ["Google Maps nisqapi maskuy", "Kuti puriy", "Allin ñan"] }
    },
    tips: { title: "Yachay", items: [
      "Allinta puriy",
      "Ch'uspi mana kachun",
      "Pachamamata yupaychay",
      "Allin zapatukuna apamuy",
      "Yaku apamuy",
      "Paraspa mana ruphachun"
    ] },
    gallery: { title: "Rikuy", viewMore: "Google Maps nisqapi astawan rikuy" },
    reviews: { title: "Niykuna", subtitle: "Google Maps nisqamanta", viewMore: "Astawan niykuna" },
    faq: { title: "Tapuykuna", subtitle: "Yachay", items: [
      { question: "Centro turístico Tio Yacu hayk'aq kachkan?", answer: "Sapa punchaw 08:00-17:00. Allinta puriy." },
      { question: "Qullqi paganan chá?", answer: "Qullqita chaypi tapuy. Mana riqsiyqa, tapuy." },
      { question: "Imakunata ruway atikun?", answer: "Sachakunapi puriy, mayupi pukllay, animalikunata rikuy, runakunata yachay." },
      { question: "Maymantá chayamuy atikun?", answer: "Taraponto nisqamanta taxi 3-4 ura, Rioja nisqamanta 15-30 uchu." },
      { question: "Imakunata astawan rikuy atikun?", answer: "Rioja llaqtapi achka, Taraponto, sachakuna, mayukuna." }
    ]},
    location: { title: "Maypipas", address: "2P57+G26, Rioja 22841\nPiruw, Rioja", openMaps: "Google Maps nisqapi maytapas rikuy" },
    footer: { callToAction: "Pachamamata yupaychay, allinta puriy. Pachamama mana waqllinachu.", text: "© 2026 Centro turístico Tio Yacu. Kayqa puriy yachay, runakunapaq.", made: "Kayqa puriy yachay, runakunapaq.", linksTitle: "Imakunata", links: [
      { name: "Peru Turismo", url: "https://www.peru.travel/es/destinos/san-martin" },
      { name: "Rioja Gobierno", url: "https://www.gob.pe/municipalidad-provincial-de-rioja-mpr-rioja" },
      { name: "San Martín Gobierno", url: "https://www.gob.pe/regionsanmartin" },
      { name: "Caminos Andinos", url: "https://caminosandinos.travel/es/destination-listing/san-martin/" },
      { name: "MINCETUR", url: "https://www.gob.pe/mincetur" },
      { name: "SERNANP", url: "https://www.gob.pe/sernanp" }
    ]}
  }
};

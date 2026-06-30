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
      p1: "Centro turístico Tio Yacu 位于秘鲁圣马丁大区里奥哈省，是一处以高地丛林（Selva Alta）自然生态为主题的休闲旅游胜地。景区最著名的特征是清澈见底的地下泉水涌出地（Naciente），水温常年冰凉，是 Yacu 河的发源地。\n\n这里是里奥哈市民和游客钟爱的日间玩水胜地，游客可以在清澈的泉水中游泳、租借轮胎漂流、在河岸草地上野餐，享受安第斯山脉东麓高地丛林的独特生态系统。景区致力于可持续旅游发展，让游客在享受清凉泉水的同时，也能了解和保护高地丛林生态。",
      p2: "\"Tio Yacu\" 是一个跨文化词汇：在西班牙语中，\"Tio\" 意为叔伯；而在盖丘亚语（Quechua）中，\"Yacu\" 的意思是水。因此，Tio Yacu 可以被优美地翻译为\"水之尊者\"或\"水之伯父\"。这个名字不仅体现了当地人对这片神圣泉水的敬畏，也暗示了水源在安第斯-亚马逊文化中的重要地位。",
      highlights: { title: "景点亮点", items: ["地理位置: 秘鲁里奥哈省圣马丁大区（高地丛林 Selva Alta）", "核心特征: 地下泉水涌出地（Naciente），水质清澈冰凉", "主要活动: 游泳、玩水、轮胎漂流、草地野餐", "评分: Google 4.6分（5,071条评价）"] },
      timeline: { title: "景区发展沿革", events: [
        { period: "水源保护", description: "Tio Yacu 泉水长期以来被当地社区视为神圣的水源发源地（Naciente）。政府和社区共同致力于保护这一高地丛林地下水系统，确保其永续利用。" },
        { period: "休闲设施建设", description: "随着里奥哈市人口的增长和旅游业的发展，景区逐步完善基础设施，添加游泳区域、野餐区、停车场等，成为圣马丁大区重要的家庭休闲目的地。" },
        { period: "生态旅游发展", description: "景区在保护环境的前提下，逐步推广生态旅游和教育项目，让游客了解高地丛林水文生态和泉水保护的重要性，在Google上获得了4.6分的高评分。" }
      ]},
      management: { title: "管理与维护", content: "景区由当地政府、社区和管理团队共同管理维护，是里奥哈市民和游客重要的日间休闲娱乐场所。请爱护景区环境，不要乱扔垃圾，共同保护这片清澈的泉水。" }
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
        { subtitle: "💧 高地丛林水文生态：泉水与地质", content: "Tio Yacu 并非一条普通的河流，而是一处壮观的地下泉水涌出地（Naciente）。要理解它那如水晶般清澈、常年冰凉的水质，我们需要将视线深入到秘鲁圣马丁大区（San Martín）高地丛林的地表之下。\n\nTio Yacu 位于著名的上梅奥河流域（Cuenca del Alto Mayo），这一带的地质结构以典型的喀斯特地貌（Karst Topography）为主。当充沛的热带雨水降落在安第斯山脉东麓时，水分渗入多孔的石灰岩层，在漫长的地下暗河穿行过程中，岩层过滤掉了水中的泥沙与悬浮杂质。经过层层净化的地下水，最终在 Tio Yacu 这个坐标点冲破地表，喷涌而出。\n\n这也是为什么您在源头处能看到水底沙石如同沸腾般翻滚的原因。这道清泉随后汇入周边水系，滋养了里奥哈盆地（Rioja Basin）独特的微生态圈，为兰花、蝴蝶以及众多高地丛林特有物种提供了完美的栖息地。" },
        { subtitle: "🦋 高地丛林动植物：鸟类、蝴蝶与兰花", content: "与深处的亚马逊热带雨林不同，Tio Yacu 位于高地丛林（Selva Alta），海拔较高，气候凉爽。这里的生态系统以高地丛林动植物为主：\n\n• 鸟类：蜂鸟（Colibrí）、巨嘴鸟（Tucán）、伞鸟（Paujil）等高地丛林特有鸟类\n• 蝴蝶：多种色彩斑斓的高地蝴蝶，在泉水周边的花丛中飞舞\n• 兰花：高地丛林是多种兰花的天然栖息地，有些品种仅在此区域生长\n• 小型哺乳动物：如树懒（Perezoso）、猴子等，但通常不在核心景区出现\n\n这里不是观察淡水海豚或大型亚马逊动物的地方，而是观察高地丛林精细生态的绝佳地点。" },
        { subtitle: "♻️ 环保倡议：保护脆弱的地下水系统", content: "Tio Yacu 的清澈源于极其脆弱的地下水循环系统。任何地表的化学污染或垃圾，都可能对这片古老的喀斯特含水层造成不可逆的破坏。\n\n作为负责任的生态探索者，请在游览时坚持\"无痕山林（Leave No Trace）\"原则：\n• 不要使用化学防晒霜或肥皂进入泉水（选择物理防晒）\n• 将所有垃圾带走，不要留在河岸\n• 不要在泉眼区域使用洗涤剂或洗发水\n• 尊重当地社区的水源保护规定\n\n共同守护这片大自然的馈赠，让清澈的泉水永续流淌。" }
      ]
    },
    culture: {
      title: "文化与传说",
      intro: "在深入了解 Tio Yacu 之前，不妨先解读它的名字和文化意义。这是一个典型的跨文化词汇，承载着安第斯-亚马逊文化的深厚底蕴。",
      sections: [
        { subtitle: "🌿 词源与文化：\"Tio Yacu\" 的含义", content: "\"Tio Yacu\" 是一个典型的跨文化词汇：\n\n• 在西班牙语中，\"Tio\" 意为叔伯或长者\n• 在盖丘亚语（Quechua）中，\"Yacu\" 的意思是水\n\n因此，Tio Yacu 可以被优美地翻译为\"水之尊者\"或\"水之伯父\"。这个拟人化的名字，暗示了当地人对这片水域深深的敬畏。在圣马丁高地丛林（Selva Alta）的原住民宇宙观中，河流的发源地（Nacientes）从来不仅仅是地理现象，它们是地球呼吸的窗口，是连接地下世界与现实世界的灵性通道。\n\n\"Tio Yacu\" 这个名字体现了水源在当地文化中的神圣地位，也反映了安第斯-亚马逊文化对水的崇拜。" },
        { subtitle: "🏞️ 社区与休闲文化：家庭野餐与玩水传统", content: "Tio Yacu 不仅是一个自然景点，更是里奥哈市民重要的社交和休闲空间。每逢周末和节假日，当地家庭会来到这里：\n\n• 在清澈的泉水中游泳、玩水\n• 在河岸草地上铺上野餐垫，享用家庭聚餐\n• 租借轮胎或充气泳圈，在清凉的河水中漂流\n• 孩子们在浅水区嬉戏，大人们则在树荫下聊天休息\n\n这种家庭式的休闲文化，体现了高地丛林社区与自然的和谐关系。游客可以融入当地社区，体验真正的秘鲁家庭休闲方式。" }
      ],
      events: { title: "景区活动推荐", items: [
        "泉水游泳：在清澈冰凉的泉水中游泳，感受地下水的清凉",
        "轮胎漂流：租借轮胎或充气泳圈，在河水中轻松漂流",
        "草地野餐：在河岸草地上铺上野餐垫，享用美食",
        "观鸟与蝴蝶：观察高地丛林特有的鸟类和蝴蝶",
        "生态教育：了解泉水成因和高地丛林生态",
        "社区互动：与当地家庭交流，体验秘鲁家庭休闲文化"
      ]}
    },
    visiting: {
      title: "游览指南",
      hours: { title: "开放时间", content: "08:00 – 17:00\n每日开放", note: "⚠️ 提醒：Tio Yacu 是日间休闲景区，建议白天前往。请注意安全，照顾好老人和儿童。" },
      price: { title: "费用", content: "景区门票费用请现场咨询\n游泳和野餐免费，轮胎/泳圈租赁可能收费", note: "具体费用和租赁价格建议提前查询或致电咨询。" },
      duration: { title: "建议游览时长", content: "建议预留 3 – 5 小时", note: "若计划野餐和玩水，建议预留半天时间。周末和节假日人较多，建议早点到达。" },
      birds: { title: "生态观察：高地丛林的精细生态", content: "Tio Yacu 是观察高地丛林（Selva Alta）精细生态的绝佳地点。在这里，您可以观察到：\n\n• 蜂鸟（Colibrí）：多种蜂鸟在泉水周边的花朵上采蜜\n• 蝴蝶：色彩斑斓的高地蝴蝶在河岸飞舞\n• 兰花：高地丛林特有兰花品种，有些仅在泉水周边生长\n• 小型鱼类：清澈的泉水中可见小型高地鱼类\n\n与深处的亚马逊不同，这里没有大型野生动物，但生态系统的精细度和独特性极高。建议您慢慢观察，发现高地丛林的微妙之美。" },
      bring: { title: "游览建议物品", items: ["泳衣和毛巾（玩水和游泳需要）", "防晒用品与帽子（高地阳光依然强烈）", "防蚊虫用品（高地丛林必备）", "野餐垫和食物（草地野餐）", "换洗衣物（玩水后更换）", "防水袋（保护手机和贵重物品）", "水鞋或防滑拖鞋（河底可能不平）", "望远镜（观察鸟类和蝴蝶）"] },
      route: { title: "推荐活动路线", content: "我们特别推荐以下 Tio Yacu 游览路线：\n\n1. 约08:00 从景区入口进入，首先在泉眼区域观察地下水涌出的壮观景象\n2. 约09:00 换上泳衣，在指定的游泳区域享受清澈冰凉的泉水\n3. 约11:00 租借轮胎或充气泳圈，在河水中轻松漂流\n4. 约12:30 在河岸草地上铺上野餐垫，享用午餐\n5. 约14:00 观察泉周边的鸟类和蝴蝶，了解高地丛林生态\n6. 约15:30 在树荫下休息，与当地家庭交流\n7. 约16:30 收拾物品，准备离开\n\n这条路线能让您充分体验 Tio Yacu 的清凉泉水和家庭休闲氛围。" }
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
      "建议白天前往，注意安全，照顾好老人和儿童",
      "推荐早晨前往，避开中午的烈日和周末的人群",
      "适合家庭和朋友聚会，是理想的野餐和玩水胜地",
      "请做好防蚊虫措施，高地丛林地区蚊虫依然存在",
      "建议携带防晒用品，高地阳光依然强烈",
      "请注意保持景区整洁，将所有垃圾带走，保护泉水",
      "建议使用物理防晒（长袖衣物、帽子），避免化学防晒霜污染泉水",
      "建议携带防水袋，保护手机和贵重物品",
      "建议穿着水鞋或防滑拖鞋，河底可能不平",
      "建议携带野餐垫和食物，在草地野餐",
      "建议提前了解天气情况，选择晴天前往"
    ] },
    gallery: { title: "精彩照片", viewMore: "在 Google Maps 查看更多相片" },
    reviews: { title: "游客评价", subtitle: "来自 Google Maps 的真实评价", viewMore: "在 Google Maps 查看更多评价" },
    faq: { title: "常见问题", subtitle: "深入了解 Centro turístico Tio Yacu", items: [
      { question: "Centro turístico Tio Yacu 的开放时间是？", answer: "景区每日开放，开放时间为08:00-17:00。建议白天前往，注意安全，照顾好老人和儿童。" },
      { question: "进入景区需要门票吗？游泳和野餐收费吗？", answer: "景区门票费用和具体政策请现场咨询。通常，游泳和野餐是免费的，但轮胎/泳圈租赁可能收费。建议提前查询或致电咨询。" },
      { question: "Tio Yacu 的水质如何？为什么这么清澈？", answer: "Tio Yacu 的水质极其清澈，这是因为它是地下泉水涌出地（Naciente）。地下水经过石灰岩层的天然过滤，去除了泥沙和杂质，最终在 Tio Yacu 涌出地表。水温常年冰凉，非常清爽。\n\n为了保护这一脆弱的地下水系统，请避免使用化学防晒霜和肥皂进入泉水。" },
      { question: "景区有哪些推荐活动？适合儿童吗？", answer: "Tio Yacu 是家庭友好的景区，特别适合儿童和家庭：\n1. 泉水游泳——在清澈冰凉的泉水中游泳（有浅水区）\n2. 轮胎漂流——租借轮胎或充气泳圈，在河水中漂流\n3. 草地野餐——在河岸草地上野餐\n4. 观鸟和蝴蝶——观察高地丛林特有的鸟类和蝴蝶\n\n请注意照顾好儿童，确保他们在安全区域游玩。" },
      { question: "如何前往 Centro turístico Tio Yacu？", answer: "景区位于秘鲁里奥哈市附近。从塔拉波托机场打车约3-4小时，从里奥哈市内出发约15-30分钟即可到达。具体导航可在 Google Maps 中搜索\"Centro turístico Tio Yacu, Rioja, Peru\"。" },
      { question: "Tio Yacu 的名字有什么含义？", answer: "\"Tio Yacu\" 是一个跨文化词汇：\n• \"Tio\"（西班牙语）：叔伯或长者\n• \"Yacu\"（盖丘亚语）：水\n\n因此，Tio Yacu 意为\"水之尊者\"或\"水之伯父\"，体现了当地人对这片神圣泉水的敬畏。在安第斯-亚马逊文化中，河流发源地（Naciente）被视为神圣之地。" },
      { question: "景区附近还有哪些值得一游的景点？", answer: "里奥哈和圣马丁大区有许多值得游览的景点，包括：\n1. 塔拉波托——圣马丁大区重要城市，拥有机场和旅游设施；\n2. 上梅奥河流域（Cuenca del Alto Mayo）——探索高地丛林生态；\n3. 里奥哈市中心——品尝正宗秘鲁美食；\n4. 当地市场——购买高地丛林特产和手工艺品；\n5. 周边瀑布和温泉——探索更多自然景观。" }
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
      p1: "Centro turístico Tio Yacu is located in Rioja Province, San Martín Region, Peru. It is a recreational tourist attraction with a theme of highland jungle (Selva Alta) natural ecology. The most famous feature of the scenic area is the clear underground spring outlet (Naciente), with year-round cool and refreshing water, which is the source of the Yacu River.\n\nThis is a favorite daytime water playground for Rioja citizens and tourists. Visitors can swim in the clear spring water, rent tires for floating, have picnics on the riverside grassland, and enjoy the unique ecosystem of the highland jungle on the eastern foothills of the Andes. The scenic area is committed to sustainable tourism development, allowing visitors to enjoy the cool spring water while also understanding and protecting the highland jungle ecology.",
      p2: "\"Tio Yacu\" is a cross-cultural term: in Spanish, \"Tio\" means uncle or elder; while in Quechua, \"Yacu\" means water. Therefore, Tio Yacu can be beautifully translated as \"The Reverent of Water\" or \"The Uncle of Water\". This name not only reflects the local people's reverence for this sacred spring water, but also implies the important status of water sources in Andean-Amazon culture.",
      highlights: { title: "Highlights", items: ["Location: Rioja Province, San Martín Region, Peru (Highland Jungle Selva Alta)", "Core Feature: Underground spring outlet (Naciente), crystal clear and cool water", "Main Activities: Swimming, water play, tire floating, grassland picnic", "Rating: Google 4.6/5 (5,071 reviews)"] },
      timeline: { title: "Scenic Area Development Timeline", events: [
        { period: "Water Source Protection", description: "The Tio Yacu spring has long been regarded as a sacred water source (Naciente) by the local community. The government and community work together to protect this highland jungle groundwater system to ensure its sustainable use." },
        { period: "Recreation Facility Construction", description: "With the growth of Rioja's population and tourism development, the scenic area gradually improved infrastructure, adding swimming areas, picnic areas, parking lots, etc., becoming an important family recreation destination in San Martín Region." },
        { period: "Ecotourism Development", description: "While protecting the environment, the scenic area gradually promotes ecotourism and education projects, allowing visitors to understand the importance of highland jungle hydrological ecology and spring water protection, obtaining a high Google rating of 4.6 points." }
      ]},
      management: { title: "Management & Maintenance", content: "The scenic area is jointly managed and maintained by the local government, community, and management team. It is an important daytime recreation and entertainment place for Rioja citizens and tourists. Please help keep the scenic area environment clean, do not litter, and jointly protect this clear spring water." }
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
        { subtitle: "💧 Highland Jungle Hydrological Ecology: Spring Water & Geology", content: "Tio Yacu is not an ordinary river, but a spectacular underground spring outlet (Naciente). To understand its crystal-clear, year-round cool water quality, we need to look deep beneath the surface of the highland jungle in San Martín Region, Peru.\n\nTio Yacu is located in the famous Upper Mayo River Basin (Cuenca del Alto Mayo). The geological structure of this area is mainly typical Karst Topography. When abundant tropical rainwater falls on the eastern foothills of the Andes, the water does not directly flow into surface runoff, but infiltrates into the porous limestone layer. During the long underground river journey, the rock layer filters out sediment and suspended impurities in the water. The purified groundwater finally breaks through the surface at the Tio Yacu coordinate point and gushes out.\n\nThis is also why you can see the sand and stones at the bottom of the water boiling like boiling at the source. This clear spring then flows into the surrounding water system, nourishing the unique micro-ecological circle of the Rioja Basin, providing a perfect habitat for orchids, butterflies, and many highland jungle endemic species." },
        { subtitle: "🦋 Highland Jungle Flora and Fauna: Birds, Butterflies & Orchids", content: "Different from the deep Amazon rainforest, Tio Yacu is located in the highland jungle (Selva Alta), with higher altitude and cool climate. The ecosystem here is mainly highland jungle flora and fauna:\n\n• Birds: Hummingbirds (Colibrí), Toucans (Tucán), Paujil (Paujil) and other highland jungle endemic birds\n• Butterflies: Various colorful highland butterflies dancing among the flowers around the spring\n• Orchids: Highland jungle is a natural habitat for various orchids, some species only grow in this area\n• Small mammals: Such as sloths (Perezoso), monkeys, etc., but usually do not appear in the core scenic area\n\nThis is not a place to observe freshwater dolphins or large Amazon animals, but an excellent place to observe the fine ecology of highland jungle." },
        { subtitle: "♻️ Environmental Initiative: Protecting the Fragile Groundwater System", content: "The clarity of Tio Yacu comes from an extremely fragile groundwater cycle system. Any surface chemical pollution or garbage may cause irreversible damage to this ancient karst aquifer.\n\nAs a responsible ecological explorer, please adhere to the \"Leave No Trace\" principle when visiting:\n• Do not use chemical sunscreen or soap to enter the spring water (choose physical sunscreen)\n• Take all garbage away, do not leave it on the river bank\n• Do not use detergents or shampoo in the spring area\n• Respect the water source protection regulations of the local community\n\nLet's protect this gift of nature together, so that the clear spring water can flow forever." }
      ]
    },
    culture: {
      title: "Culture & Legends",
      intro: "Before deeply understanding Tio Yacu, let's first interpret its name and cultural significance. This is a typical cross-cultural term, carrying the profound heritage of Andean-Amazon culture.",
      sections: [
        { subtitle: "🌿 Etymology & Culture: The Meaning of \"Tio Yacu\"", content: "\"Tio Yacu\" is a typical cross-cultural term:\n\n• In Spanish, \"Tio\" means uncle or elder\n• In Quechua, \"Yacu\" means water\n\nTherefore, Tio Yacu can be beautifully translated as \"The Reverent of Water\" or \"The Uncle of Water\". This personified name implies the local people's deep reverence for this water area. In the indigenous cosmology of the highland jungle (Selva Alta) of San Martín, the source of the river (Nacientes) is never just a geographical phenomenon, they are the window of the earth's breathing, the spiritual channel connecting the underground world and the real world.\n\nThe name \"Tio Yacu\" reflects the sacred status of water sources in local culture, and also reflects the Andean-Amazon culture's worship of water." },
        { subtitle: "🏞️ Community & Recreation Culture: Family Picnic & Water Play Tradition", content: "Tio Yacu is not only a natural attraction, but also an important social and recreational space for Rioja citizens. Every weekend and holiday, local families come here:\n\n• Swim and play in the clear spring water\n• Spread picnic mats on the riverside grassland and enjoy family dinners\n• Rent tires or inflatable swim rings, float in the cool river water\n• Children play in the shallow water area, while adults chat and rest under the shade of trees\n\nThis family-style recreational culture reflects the harmonious relationship between the highland jungle community and nature. Visitors can integrate into the local community and experience the real Peruvian family leisure style." }
      ],
      events: { title: "Recommended Scenic Area Activities", items: [
        "Spring Swimming: Swim in the clear and cool spring water, feel the coolness of groundwater",
        "Tire Floating: Rent tires or inflatable swim rings, float easily in the river water",
        "Grassland Picnic: Spread picnic mats on the riverside grassland and enjoy food",
        "Bird and Butterfly Watching: Observe endemic birds and butterflies of highland jungle",
        "Ecological Education: Understand the cause of spring water and highland jungle ecology",
        "Community Interaction: Communicate with local families and experience Peruvian family leisure culture"
      ]}
    },
    visiting: {
      title: "Visitor Guide",
      hours: { title: "Opening Hours", content: "08:00 – 17:00\nOpen daily", note: "⚠️ Note: Tio Yacu is a daytime recreation scenic area. Daytime visits are recommended. Please pay attention to safety and take good care of the elderly and children." },
      price: { title: "Fees", content: "Please inquire on-site for ticket prices\nSwimming and picnic are free, tire/swim ring rental may be charged", note: "It is recommended to check in advance or call for consultation on specific fees and rental prices." },
      duration: { title: "Recommended Duration", content: "Recommended: 3 – 5 hours", note: "If you plan to have a picnic and play in the water, it is recommended to reserve half a day. Weekends and holidays have more people, so it is recommended to arrive early." },
      birds: { title: "Ecological Observation: Fine Ecology of Highland Jungle", content: "Tio Yacu is an excellent place to observe the fine ecology of highland jungle (Selva Alta). Here, you can observe:\n\n• Hummingbirds (Colibrí): Various hummingbirds gather nectar on the flowers around the spring\n• Butterflies: Colorful highland butterflies dancing on the river bank\n• Orchids: Highland jungle endemic orchid varieties, some only grow around the spring\n• Small fish: Small highland fish can be seen in the clear spring water\n\nDifferent from the deep Amazon, there are no large wild animals here, but the fineness and uniqueness of the ecosystem are extremely high. It is recommended that you observe slowly and discover the subtle beauty of the highland jungle." },
      bring: { title: "Recommended Items", items: ["Swimwear and towel (needed for water play and swimming)", "Sun protection & hat (highland sun is still strong)", "Insect repellent (essential in highland jungle)", "Picnic mat and food (for grassland picnic)", "Change of clothes (change after water play)", "Waterproof bag (to protect phone and valuables)", "Water shoes or non-slip sandals (river bottom may be uneven)", "Binoculars (for observing birds and butterflies)"] },
      route: { title: "Recommended Activity Route", content: "We especially recommend the following Tio Yacu visit route:\n\n1. ~08:00: Enter from the scenic area entrance, first observe the spectacular scene of underground water gushing at the spring area\n2. ~09:00: Change into swimwear, enjoy the clear and cool spring water in the designated swimming area\n3. ~11:00: Rent tires or inflatable swim rings, float easily in the river water\n4. ~12:30: Spread picnic mat on the riverside grassland and enjoy lunch\n5. ~14:00: Observe birds and butterflies around the spring, understand highland jungle ecology\n6. ~15:30: Rest under the shade of trees, communicate with local families\n7. ~16:30: Pack up items, prepare to leave\n\nThis route allows you to fully experience the cool spring water and family leisure atmosphere of Tio Yacu." }
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
      "Daytime visits are recommended. Please pay attention to safety and take good care of the elderly and children",
      "Morning visits are recommended to avoid the midday sun and weekend crowds",
      "Suitable for family and friends gatherings, ideal place for picnic and water play",
      "Please take insect repellent measures, mosquitoes still exist in highland jungle areas",
      "It is recommended to carry sun protection, highland sun is still strong",
      "Please keep the scenic area clean, take all garbage away, protect the spring water",
      "It is recommended to use physical sunscreen (long sleeves, hat), avoid chemical sunscreen polluting the spring water",
      "It is recommended to carry waterproof bags to protect phone and valuables",
      "It is recommended to wear water shoes or non-slip sandals, the river bottom may be uneven",
      "It is recommended to bring picnic mats and food for grassland picnic",
      "It is recommended to understand the weather in advance and choose sunny days to go"
    ] },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps" },
    reviews: { title: "Visitor Reviews", subtitle: "Real reviews from Google Maps", viewMore: "View More Reviews on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn more about Centro turístico Tio Yacu", items: [
      { question: "What are the opening hours of Centro turístico Tio Yacu?", answer: "The scenic area is open daily from 08:00-17:00. Daytime visits are recommended. Please pay attention to safety and take good care of the elderly and children." },
      { question: "Is there an entrance fee? Is swimming and picnic free?", answer: "Please inquire on-site for ticket prices and specific policies. Usually, swimming and picnic are free, but tire/swim ring rental may be charged. It is recommended to check in advance or call for consultation." },
      { question: "How is the water quality of Tio Yacu? Why is it so clear?", answer: "The water quality of Tio Yacu is extremely clear, because it is an underground spring outlet (Naciente). Groundwater is naturally filtered by limestone layers, removing sediment and impurities, and finally gushes out at Tio Yacu. The water temperature is cool all year round, very refreshing.\n\nIn order to protect this fragile groundwater system, please avoid using chemical sunscreen and soap to enter the spring water." },
      { question: "What activities are recommended in the scenic area? Is it suitable for children?", answer: "Tio Yacu is a family-friendly scenic area, especially suitable for children and families:\n1. Spring swimming——swim in the clear and cool spring water (with shallow water area)\n2. Tire floating——rent tires or inflatable swim rings, float in the river water\n3. Grassland picnic——have a picnic on the riverside grassland\n4. Bird and butterfly watching——observe endemic birds and butterflies of highland jungle\n\nPlease take good care of children and ensure that they play in safe areas." },
      { question: "How to get to Centro turístico Tio Yacu?", answer: "The scenic area is located near Rioja city, Peru. It's about 3-4 hours by taxi from Tarapoto Airport, and about 15-30 minutes from downtown Rioja. For specific navigation, search for \"Centro turístico Tio Yacu, Rioja, Peru\" in Google Maps." },
      { question: "What is the meaning of the name Tio Yacu?", answer: "\"Tio Yacu\" is a cross-cultural term:\n• \"Tio\" (Spanish): Uncle or elder\n• \"Yacu\" (Quechua): Water\n\nTherefore, Tio Yacu means \"The Reverent of Water\" or \"The Uncle of Water\", reflecting the local people's reverence for this sacred spring water. In Andean-Amazon culture, the source of the river (Naciente) is regarded as a sacred place." },
      { question: "What other attractions are worth visiting near the scenic area?", answer: "There are many attractions worth visiting in Rioja and San Martín Region, including:\n1. Tarapoto——important city in San Martín Region, with airport and tourist facilities;\n2. Upper Mayo River Basin (Cuenca del Alto Mayo)——explore highland jungle ecology;\n3. Rioja city center——taste authentic Peruvian cuisine;\n4. Local markets——buy highland jungle specialties and handicrafts;\n5. Surrounding waterfalls and hot springs——explore more natural landscapes." }
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
    nav: { about: "Descripción", history: "Historia", ecology: "Ecología", culture: "Cultura y Leyendas", visiting: "Guía de Visita", transportation: "Cómo Llegar", tips: "Consejos", gallery: "Galería de Fotos", reviews: "Reseñas", faq: "Preguntas Frecuentes", location: "Ubicación" },
    hero: { tagline: "San Martín, Perú · Atractivo Turístico Natural", title: "Centro turístico Tio Yacu", subtitle: "Rioja, Perú · Área de Recreación en Selva Alta", cta: "Explora el Área Scénica" },
    rating: { reviews: "reseñas", source: "Google Reviews" },
    about: {
      title: "Descripción General",
      p1: "El Centro turístico Tio Yacu se encuentra en la Provincia de Rioja, Región San Martín, Perú. Es un atractivo turístico recreacional con un tema de ecología natural de selva alta (Selva Alta). La característica más famosa del área scénica es la salida de agua subterránea clara (Naciente), con agua fresca y refrescante durante todo el año, que es la fuente del Río Yacu.\n\nEste es un lugar de juego de agua diurno favorito para los ciudadanos de Rioja y los turistas. Los visitantes pueden nadar en el agua de manantial clara, alquilar neumáticos para flotar, tener picnics en el pastizal ribereño, y disfrutar del ecosistema único de la selva alta en las estribaciones orientales de los Andes. El área scénica está comprometida con el desarrollo del turismo sostenible, permitiendo a los visitantes disfrutar del agua de manantial fresca mientras comprenden y protegen la ecología de la selva alta.",
      p2: "\"Tio Yacu\" es un término intercultural: en español, \"Tio\" significa tío o anciano; mientras que en quechua, \"Yacu\" significa agua. Por lo tanto, Tio Yacu puede traducirse bellamente como \"El Reverento del Agua\" o \"El Tío del Agua\". Este nombre no solo refleja el profundo respeto de la gente local por esta agua de manantial sagrada, sino que también implica el estado importante de las fuentes de agua en la cultura andino-amazónica.",
      highlights: { title: "Datos Destacados", items: ["Ubicación: Provincia de Rioja, Región San Martín, Perú (Selva Alta)", "Característica Central: Salida de agua subterránea (Naciente), agua cristalina y fresca", "Actividades Principales: Natación, juego de agua, flotación con neumáticos, picnic en pastizal", "Calificación: Google 4.6/5 (5,071 reseñas)"] },
      timeline: { title: "Línea de Tiempo del Desarrollo del Área Scénica", events: [
        { period: "Protección de Fuente de Agua", description: "El manantial de Tio Yacu ha sido considerado durante mucho tiempo como una fuente de agua sagrada (Naciente) por la comunidad local. El gobierno y la comunidad trabajan juntos para proteger este sistema de aguas subterráneas de selva alta y asegurar su uso sostenible." },
        { period: "Construcción de Instalaciones Recreacionales", description: "Con el crecimiento de la población de Rioja y el desarrollo turístico, el área scénica mejoró gradualmente la infraestructura, agregando áreas de natación, áreas de picnic, estacionamiento, etc., convirtiéndose en un destino importante de recreación familiar en la Región San Martín." },
        { period: "Desarrollo de Ecoturismo", description: "Mientras protege el medio ambiente, el área scénica promueve gradualmente proyectos de ecoturismo y educación, permitiendo a los visitantes comprender la importancia de la ecología hidrológica de selva alta y la protección de agua de manantial, obteniendo una alta calificación de Google de 4.6 puntos." }
      ]},
      management: { title: "Gestión y Mantenimiento", content: "El área scénica es gestionada y mantenida conjuntamente por el gobierno local, la comunidad y el equipo de gestión. Es un lugar importante de recreación y entretenimiento diurno para los ciudadanos de Rioja y los turistas. Por favor, ayude a mantener el ambiente del área scénica limpio, no dese basura, y proteja conjuntamente esta agua de manantial clara." }
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
        { subtitle: "💧 Ecología Hidrológica de Selva Alta: Agua de Manantial y Geología", content: "Tio Yacu no es un río ordinario, sino una espectacular salida de agua subterránea (Naciente). Para comprender su calidad de agua cristalina y fresca durante todo el año, necesitamos mirar profundamente debajo de la superficie de la selva alta (Selva Alta) en la Región San Martín, Perú.\n\nTio Yacu está ubicado en la famosa Cuenca del Alto Mayo. La estructura geológica de esta área es principalmente topografía kárstica típica. Cuando el abundante agua de lluvia tropical cae en las estribaciones orientales de los Andes, el agua no fluye directamente hacia la escorrentía superficial, sino que se infiltra en la capa de piedra caliza porosa. Durante el largo viaje del río subterráneo, la capa rocosa filtra el sedimento y las impurezas suspendidas en el agua. El agua subterránea purificada finalmente rompe la superficie en el punto de coordenadas de Tio Yacu y brota.\n\nEsta es también la razón por la que puede ver la arena y las piedras en el fondo del agua hirviendo como hirviendo en la fuente. Este manantial claro luego fluye hacia el sistema de agua circundante, nutriendo la microecología única de la Cuenca de Rioja, proporcionando un hábitat perfecto para orquídeas, mariposas y muchas especies endémicas de selva alta." },
        { subtitle: "🦋 Flora y Fauna de Selva Alta: Aves, Mariposas y Orquídeas", content: "Diferente de la selva tropical amazónica profunda, Tio Yacu está ubicado en la selva alta (Selva Alta), con mayor altitud y clima fresco. El ecosistema aquí se compone principalmente de flora y fauna de selva alta:\n\n• Aves: Colibríes (Colibrí), tucanes (Tucán), paujil (Paujil) y otras aves endémicas de selva alta\n• Mariposas: Varias mariposas de selva alta coloridas bailando entre las flores alrededor del manantial\n• Orquídeas: La selva alta es un hábitat natural para varias orquídeas, algunas especies solo crecen en esta área\n• Mamíferos pequeños: Como perezosos (Perezoso), monos, etc., pero generalmente no aparecen en el área scénica central\n\nEste no es un lugar para observar delfines de agua dulce o grandes animales amazónicos, sino un lugar excelente para observar la ecología fina de selva alta." },
        { subtitle: "♻️ Iniciativa Ambiental: Protegiendo el Frágil Sistema de Aguas Subterráneas", content: "La claridad de Tio Yacu proviene de un sistema de ciclo de agua subterránea extremadamente frágil. Cualquier contaminación química superficial o basura puede causar daño irreversible a este antiguo acuífero kárstico.\n\nComo explorador ecológico responsable, por favor adhiérase al principio de \"No Dejar Rastro\" al visitar:\n• No use protector solar químico o jabón para entrar en el agua del manantial (elija protector solar físico)\n• Lleve toda la basura, no la deje en la orilla del río\n• No use detergentes o champú en el área del manantial\n• Respete las regulaciones de protección de fuentes de agua de la comunidad local\n\nProtejamos juntos este regalo de la naturaleza, para que el agua de manantial clara pueda fluir para siempre." }
      ]
    },
    culture: {
      title: "Cultura y Leyendas",
      intro: "Antes de comprender profundamente Tio Yacu, analicemos su nombre y significado cultural. Este es un término típicamente intercultural, que lleva la profunda herencia de la cultura andino-amazónica.",
      sections: [
        { subtitle: "🌿 Etimología y Cultura: El Significado de \"Tio Yacu\"", content: "\"Tio Yacu\" es un término intercultural típico:\n\n• En español, \"Tio\" significa tío o anciano\n• En quechua, \"Yacu\" significa agua\n\nPor lo tanto, Tio Yacu puede traducirse bellamente como \"El Reverento del Agua\" o \"El Tío del Agua\". Este nombre personificado implica el profundo respeto de la gente local por esta área de agua. En la cosmología indígena de la selva alta (Selva Alta) de San Martín, las fuentes de los ríos (Nacientes) nunca son solo fenómenos geográficos, son ventanas de la respiración de la tierra, canales espirituales que conectan el mundo subterráneo y el mundo real.\n\nEl nombre \"Tio Yacu\" refleja el estado sagrado de las fuentes de agua en la cultura local, y también refleja la adoración del agua en la cultura andino-amazónica." },
        { subtitle: "🏞️ Cultura Comunitaria y Recreacional: Tradición de Picnic Familiar y Juego de Agua", content: "Tio Yacu no es solo un atractivo natural, sino también un importante espacio social y recreacional para los ciudadanos de Rioja. Cada fin de semana y día festivo, las familias locales vienen aquí:\n\n• Nadar y jugar en el agua de manantial clara\n• Extender mantas de picnic en el pastizal ribereño y disfrutar de cenas familiares\n• Alquilar neumáticos o anillos de natación inflables, flotar en el agua de río fresca\n• Los niños juegan en el área de aguas poco profundas, mientras los adultos chaten y descansen bajo la sombra de los árboles\n\nEsta cultura recreacional familiar refleja la relación armoniosa entre la comunidad de selva alta y la naturaleza. Los visitantes pueden integrarse en la comunidad local y experimentar el verdadero estilo de ocio familiar peruano." }
      ],
      events: { title: "Actividades Recomendadas del Área Scénica", items: [
        "Natación en Manantial: Nadar en el agua de manantial clara y fresca, sentir la frescura del agua subterránea",
        "Flotación con Neumáticos: Alquilar neumáticos o anillos de natación inflables, flotar fácilmente en el agua del río",
        "Picnic en Pastizal: Extender mantas de picnic en el pastizal ribereño y disfrutar comida",
        "Observación de Aves y Mariposas: Observar aves y mariposas endémicas de selva alta",
        "Educación Ecológica: Comprender la causa del agua de manantial y la ecología de selva alta",
        "Interacción Comunitaria: Comunicarse con familias locales y experimentar la cultura de ocio familiar peruana"
      ]}
    },
    visiting: {
      title: "Guía de Visita",
      hours: { title: "Horario de Apertura", content: "08:00 – 17:00\nAbierto diariamente", note: "⚠️ Nota: Tio Yacu es un área scénica de recreación diurna. Se recomiendan las visitas diurnas. Por favor, preste atención a la seguridad y cuide bien a los ancianos y niños." },
      price: { title: "Tarifas", content: "Por favor consultar los precios de entrada en el lugar\nNatación y picnic son gratuitos, alquiler de neumáticos/anillos puede tener costo", note: "Se recomienda consultar con anticipación o llamar para consulta sobre tarifas específicas y precios de alquiler." },
      duration: { title: "Duración Recomendada", content: "Recomendado: 3 – 5 horas", note: "Si planea tener un picnic y jugar en el agua, se recomienda reservar medio día. Los fines de semana y días festivos hay más personas, se recomienda llegar temprano." },
      birds: { title: "Observación Ecológica: Ecología Fina de Selva Alta", content: "Tio Yacu es un lugar excelente para observar la ecología fina de la selva alta (Selva Alta). Aquí, puede observar:\n\n• Colibríes (Colibrí): Varios colibríes recolectan néctar en las flores alrededor del manantial\n• Mariposas: Mariposas de selva alta coloridas bailando en la orilla del río\n• Orquídeas: Variedades de orquídeas endémicas de selva alta, algunas solo crecen alrededor del manantial\n• Peces pequeños: Peces de selva alta pequeños se pueden ver en el agua de manantial clara\n\nDiferente de la Amazonía profunda, no hay animales salvajes grandes aquí, pero la fineza y singularidad del ecosistema son extremadamente altas. Se recomienda que observe lentamente y descubra la belleza sutil de la selva alta." },
      bring: { title: "Artículos Recomendados", items: ["Traje de baño y toalla (necesarios para juego de agua y natación)", "Protección solar y sombrero (el sol de selva alta todavía es fuerte)", "Repelente de insectos (esencial en selva alta)", "Manta de picnic y comida (para picnic en pastizal)", "Ropa de cambio (cambiar después del juego de agua)", "Bolsa impermeable (para proteger teléfono y objetos de valor)", "Zapatos de agua o sandalias antideslizantes (el fondo del río puede ser irregular)", "Binoculares (para observar aves y mariposas)"] },
      route: { title: "Ruta de Actividades Recomendada", content: "Recomendamos especialmente la siguiente ruta de visita a Tio Yacu:\n\n1. ~08:00: Ingrese desde la entrada del área scénica, primero observe la escena espectacular de agua subterránea brotando en el área del manantial\n2. ~09:00: Cambie al traje de baño, disfrute del agua de manantial clara y fresca en el área de natación designada\n3. ~11:00: Alquile neumáticos o anillos de natación inflables, flote fácilmente en el agua del río\n4. ~12:30: Extienda la manta de picnic en el pastizal ribereño y disfrute el almuerzo\n5. ~14:00: Observe aves y mariposas alrededor del manantial, comprenda la ecología de selva alta\n6. ~15:30: Descanse bajo la sombra de los árboles, comunique con familias locales\n7. ~16:30: Empaque los artículos, prepárese para salir\n\nEsta ruta le permite experimentar completamente el agua de manantial fresca y la atmósfera de ocio familiar de Tio Yacu." }
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
      "Se recomiendan las visitas diurnas. Por favor, preste atención a la seguridad y cuide bien a los ancianos y niños",
      "Se recomiendan las visitas matutinas para evitar el sol del mediodía y la multitud de fin de semana",
      "Adecuado para reuniones familiares y de amigos, lugar ideal para picnic y juego de agua",
      "Por favor tome medidas repelentes de insectos, los mosquitos todavía existen en áreas de selva alta",
      "Se recomienda llevar protección solar, el sol de selva alta todavía es fuerte",
      "Por favor mantenga el área scénica limpia, lleve toda la basura, proteja el agua de manantial",
      "Se recomienda usar protector solar físico (mangas largas, sombrero), evite que el protector solar químico contamine el agua de manantial",
      "Se recomienda llevar bolsas impermeables para proteger teléfono y objetos de valor",
      "Se recomiendan zapatos de agua o sandalias antideslizantes, el fondo del río puede ser irregular",
      "Se recomienda traer mantas de picnic y comida para picnic en pastizal",
      "Se recomienda comprender el clima con anticipación y elegir días soleados para ir"
    ] },
    gallery: { title: "Galería de Fotos", viewMore: "Ver Más en Google Maps" },
    reviews: { title: "Reseñas", subtitle: "Reseñas de Google Maps", viewMore: "Más Reseñas" },
    faq: { title: "Preguntas Frecuentes", subtitle: "Aprenda más sobre el Centro turístico Tio Yacu", items: [
      { question: "¿Cuál es el horario de apertura del Centro turístico Tio Yacu?", answer: "El área scénica está abierta diariamente de 08:00-17:00. Se recomiendan las visitas diurnas. Por favor, preste atención a la seguridad y cuide bien a los ancianos y niños." },
      { question: "¿Hay tarifa de entrada? ¿Es gratuita la natación y el picnic?", answer: "Por favor consultar los precios de entrada y políticas específicas en el lugar. Usualmente, la natación y el picnic son gratuitos, pero el alquiler de neumáticos/anillos de natación puede tener costo. Se recomienda consultar con anticipación o llamar para consulta." },
      { question: "¿Cómo es la calidad del agua de Tio Yacu? ¿Por qué es tan clara?", answer: "La calidad del agua de Tio Yacu es extremadamente clara, porque es una salida de agua subterránea (Naciente). El agua subterránea es filtrada naturalmente por capas de piedra caliza, removiendo sedimento e impurezas, y finalmente brota en Tio Yacu. La temperatura del agua es fresca durante todo el año, muy refrescante.\n\nPara proteger este frágil sistema de agua subterránea, por favor evite usar protector solar químico y jabón para entrar en el agua de manantial." },
      { question: "¿Qué actividades se recomiendan en el área scénica? ¿Es adecuado para niños?", answer: "Tio Yacu es un área scénica amigable para familias, especialmente adecuada para niños y familias:\n1. Natación en manantial——nadar en el agua de manantial clara y fresca (con área de aguas poco profundas)\n2. Flotación con neumáticos——alquilar neumáticos o anillos de natación inflables, flotar en el agua del río\n3. Picnic en pastizal——tener un picnic en el pastizal ribereño\n4. Observación de aves y mariposas——observar aves y mariposas endémicas de selva alta\n\nPor favor cuide bien a los niños y asegúrese de que jueguen en áreas seguras." },
      { question: "¿Cómo llegar al Centro turístico Tio Yacu?", answer: "El área scénica está ubicada cerca de la ciudad de Rioja, Perú. Unos 3-4 horas en taxi desde el Aeropuerto de Tarapoto, y unos 15-30 minutos desde el centro de Rioja. Para navegación específica, busque \"Centro turístico Tio Yacu, Rioja, Perú\" en Google Maps." },
      { question: "¿Cuál es el significado del nombre Tio Yacu?", answer: "\"Tio Yacu\" es un término intercultural:\n• \"Tio\" (español): Tío o anciano\n• \"Yacu\" (quechua): Agua\n\nPor lo tanto, Tio Yacu significa \"El Reverento del Agua\" o \"El Tío del Agua\", reflejando el profundo respeto de la gente local por esta agua de manantial sagrada. En la cultura andino-amazónica, la fuente del río (Naciente) se considera un lugar sagrado." },
      { question: "¿Qué otras atracciones vale la pena visitar cerca del área scénica?", answer: "Hay muchas atracciones que vale la pena visitar en Rioja y la Región San Martín, incluyendo:\n1. Tarapoto——ciudad importante en la Región San Martín, con aeropuerto e instalaciones turísticas;\n2. Cuenca del Alto Mayo——explore la ecología de selva alta;\n3. Centro de Rioja——pruebe auténtica cocina peruana;\n4. Mercados locales——compre especialidades de selva alta y artesanías;\n5. Cataratas y aguas termales circundantes——explore más paisajes naturales." }
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
    nav: { about: "Qhaway", history: "Ñawpa", ecology: "Pachamama", culture: "Simi", visiting: "Rimay", transportation: "Chaykamuy", tips: "Yachay", gallery: "Rikuy", reviews: "Niykuna", faq: "Tapuykuna", location: "Maypi" },
    hero: { tagline: "San Martín, Piruw · Yaku Puriy", title: "Centro turístico Tio Yacu", subtitle: "Rioja, Piruw · Yaku Naciente", cta: "Rikuy" },
    rating: { reviews: "niykuna", source: "Google niykuna" },
    about: {
      title: "Qhaway",
      p1: "Centro turístico Tio Yacu nisqa Piruw San Martín suyupi, Rioja pruwinsyapi tiyan. Kayqa Selva Alta nisqa sachakunap urqu sutipi tiyan. Tio Yacu nisqa Yaku (quechua simipi: yaku) naciente nisqa, yaku allin lliimphu, chiri. Kay yaku Rioja mayu pakirin.",
      p2: "\"Tio Yacu\" nisqa iskay simikunamanta: \"Tio\" (kastilla simipi: tiyu), \"Yacu\" (quechua simipi: yaku). Chayrayku Tio Yacu nisqa \"Yaku Tayta\" nisqataq rampinchik. Runakunaqa yaku nisqata yupaychanku, ama waqlliykuchu.",
      highlights: { title: "Rikuy", items: ["Maypi: Rioja, San Martín, Piruw (Selva Alta)", "Yaku: Naciente, lliimphu, chiri", "Ruway: Mayupi pukllay, tiyulana, picnic", "Google: 4.6/5 (5,071 niykuna)"] },
      timeline: { title: "Ñawpa", events: [
        { period: "Yaku amachay", description: "Tio Yacu yaku nisqa mana wañunachu, ama qatiykuchu. Runakunaqa yaku amachanku, allinta purirkuchu." },
        { period: "Puriy wiñay", description: "Kay puriyqa Rioja llaqtapi achka runakunapaq. Mayupi pukllanku, tiyulananku, kusikunku." }
      ]},
      management: { title: "Amahana", content: "Kay puriyqa allin kananpaq, pachamamata ama waqlliychu. Yaku lliimphu kanampaq, ama basurata ukyaman churaykuychu." }
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
      title: "Yaku Pachamama",
      sections: [
        { subtitle: "Yaku Naciente", content: "Tio Yacu nisqa manam hina mayuchu. Kayqa yaku ukumanta lluqsirmuq (naciente). Yaku allin lliimphu, chiri. Kayqa neruka, sachakuna allinta yachanku.\n\nYaku allin lliimphu kanpaq, rumikuna yaku filtranku. Chayrayku yaku lliimphu, mana millaychu." },
        { subtitle: "Pisqukuna, Mariposas", content: "Kaypi pisqukuna achka: Colibrí, Tucán. Mariposas achka kachkan, sumaq. Orqu sachakunapi orqukuna achka." },
        { subtitle: "Yaku Amahay", content: "Yaku mana milachu. Ama basurata ukyaman churaykuychu. Yaku lliimphu kanampaq, ama químico nisqata ukyaman churaykuychu.\n\nPachamamata yupaychay, yaku amachay." }
      ]
    },
    culture: {
      title: "Simi",
      intro: "\"Tio Yacu\" nisqa simi yachay. Tio (kastilla): tiyu. Yacu (quechua): yaku. Chayrayku \"Yaku Tayta\". Runakunaqa yaku yupaychanku.",
      sections: [
        { subtitle: "Yaku Simi", content: "Yakuqa kawsaypaq. Runakunaqa yakuyman pitsqa. Ama yaku waqlliykuychu.\n\nTio Yacu nisqa yaku pakirin. Kay yaku allin, chiri. Runakunaqa kusikunku, mayupi pukllanku." },
        { subtitle: "Ayllu Kusikuy", content: "Rioja runakuna kaypi kusikunku. Mayupi pukllanku, tiyulananku, mikhunku. Ayllu kusikuy allin.\n\nKaypi puriqkuna rikunku, yachanku." }
      ],
      events: { title: "Ruwaykuna", items: [
        "Mayupi pukllay - Yaku lliimphu, chiri",
        "Neumático nisqawan mayupi puriy",
        "Pastizalpi tiyulana - Picnic",
        "Pisqukunata, mariposasta rikuy",
        "Yaku yachay - Naciente yachay",
        "Aylluwan rimay - Rioja runakuna"
      ]}
    },
    visiting: {
      title: "Puriy",
      hours: { title: "Punchaw", content: "08:00 – 17:00\nSapa punchaw", note: "⚠️ Allinta puriy. Wawaqunata amachay." },
      price: { title: "Qullqi", content: "Qullqita chaypi tapuy\nMayupi pukllay mana qullqiyuqchu", note: "Neumático nisqapaq qullqi." },
      duration: { title: "Unay", content: "3 – 5 ura", note: "Achka unay munanki chayqa, achka unay puriy." },
      birds: { title: "Yaku Pachamama", content: "Kaypi pisqukuna achka: Colibrí, Tucán. Mariposas achka. Orqukuna achka. Yaku lliimphu, sumaq." },
      bring: { title: "Apamuy", items: ["Traje de baño (mayupi pukllaypaq)", "Intita amachakuy", "Ch'uspi mana kachun", "Manta (picnicpaq)", "Mikhuna", "Yaku mikhunapaq", "Zapatos de agua"] },
      route: { title: "Puriy", content: "Kaykunata ruway:\n1. 08:00 - Puriy qallariy, yaku rikuy\n2. 09:00 - Mayupi pukllay\n3. 11:00 - Neumático nisqawan puriy\n4. 12:30 - Picnic\n5. 14:00 - Pisqukunata rikuy\n6. 15:30 - Samay, rimay\n7. 16:30 - Rikch'anakuna" }
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
      "Allinta puriy. Wawaqunata amachay.",
      "Ch'uspi mana kachun (selva altapi ch'uspi kan)",
      "Intita amachakuy (inti achka)",
      "Yaku lliimphu kanampaq, ama basurata ukyaman churaykuychu",
      "Yaku mikhunapaq apamuy",
      "Manta apamuy (picnicpaq)",
      "Samay, kusikuy"
    ] },
    gallery: { title: "Rikuy", viewMore: "Google Maps nisqapi astawan rikuy" },
    reviews: { title: "Niykuna", subtitle: "Google Maps nisqamanta", viewMore: "Astawan niykuna" },
    faq: { title: "Tapuykuna", subtitle: "Yachay", items: [
      { question: "Centro turístico Tio Yacu hayk'aq kachkan?", answer: "Sapa punchaw 08:00-17:00. Allinta puriy. Wawaqunata amachay." },
      { question: "Qullqi paganan chá? Mayupi pukllay?", answer: "Mayupi pukllay mana qullqiyuqchu. Neumático nisqapaq qullqi." },
      { question: "Yaku imaynachá lliimphu?", answer: "Yaku naciente. Ukumanta lluqsirmuq. Rumikuna yaku filtranku. Chayrayku lliimphu.\n\nYaku ama waqlliykuychu." },
      { question: "Imakunata ruway atikun?", answer: "Mayupi pukllay, neumático nisqawan puriy, picnic, pisqukunata rikuy. Aylluwan kusikuy." },
      { question: "Maymantá chayamuy atikun?", answer: "Taraponto nisqamanta taxi 3-4 ura, Rioja nisqamanta 15-30 uchu." },
      { question: "\"Tio Yacu\" imaynachá?", answer: "\"Tio\" (kastilla): tiyu. \"Yacu\" (quechua): yaku. Chayrayku \"Yaku Tayta\". Yaku yupaychanapaq." }
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

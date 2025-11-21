type Lang = "ru" | "en" | "ko";

type SubCategory = {
  id: string;
  emoji: string;
};

type Category = {
  id: string;
  emoji: string;
  importance: number;
  sub: SubCategory[];
};

const CATEGORIES: Category[] = [
  {
    id: "cars",
    emoji: "🚗",
    importance: 1,
    sub: [
      { id: "sedan", emoji: "🚘" },
      { id: "suv", emoji: "🚙" },
      { id: "minivan", emoji: "🚐" },
      { id: "pickup", emoji: "🛻" },
      { id: "van", emoji: "🚐" },
    ],
  },
  {
    id: "trucks",
    emoji: "🚚",
    importance: 1,
    sub: [
      { id: "light_truck", emoji: "🚚" },
      { id: "heavy_truck", emoji: "🚛" },
      { id: "refrigerated", emoji: "❄️" },
      { id: "dump", emoji: "⛰️" },
      { id: "tow", emoji: "🚨" },
    ],
  },
  {
    id: "special",
    emoji: "🏗️",
    importance: 2,
    sub: [
      { id: "excavator", emoji: "⛏️" },
      { id: "loader", emoji: "🦺" },
      { id: "crane", emoji: "🏗️" },
      { id: "forklift", emoji: "📦" },
      { id: "road", emoji: "🛣️" },
    ],
  },
  {
    id: "parts",
    emoji: "⚙️",
    importance: 1,
    sub: [
      { id: "engine", emoji: "🧱" },
      { id: "transmission", emoji: "🔩" },
      { id: "suspension", emoji: "🛞" },
      { id: "body", emoji: "🚘" },
      { id: "electrical", emoji: "💡" },
    ],
  },
  {
    id: "equipment",
    emoji: "🏭",
    importance: 3,
    sub: [
      { id: "industrial", emoji: "🏭" },
      { id: "construction", emoji: "🧱" },
      { id: "energy", emoji: "⚡" },
      { id: "solar", emoji: "☀️" },
      { id: "other_machinery", emoji: "🛠️" },
    ],
  },
  {
    id: "electronics",
    emoji: "📡",
    importance: 4,
    sub: [
      { id: "consumer", emoji: "📱" },
      { id: "pro_tv", emoji: "📺" },
      { id: "network", emoji: "🌐" },
      { id: "cctv", emoji: "🎥" },
      { id: "office", emoji: "💻" },
    ],
  },
];

const SECTION_TITLE: Record<Lang, string> = {
  ru: "Что можно закупать из Кореи",
  en: "What you can source from Korea",
  ko: "한국에서 수출 가능한 품목",
};

const SECTION_DESC: Record<Lang, string> = {
  ru: "Базовые направления. Для каждого клиента мы собираем индивидуальный микс: автомобили + запчасти + техника + любое оборудование в одном контейнере.",
  en: "Main export directions. For each partner we build a custom mix: vehicles + parts + machinery + equipment in one container.",
  ko: "기본 수출 카테고리입니다. 차량, 부품, 장비, 설비 등을 한 컨테이너에 믹스하여 맞춤 구성이 가능합니다.",
};

const CATEGORY_LABEL: Record<
  string,
  {
    ru: string;
    en: string;
    ko: string;
    noteRu: string;
    noteEn: string;
    noteKo: string;
  }
> = {
  cars: {
    ru: "Легковые автомобили",
    en: "Passenger cars",
    ko: "승용차",
    noteRu:
      "Hyundai, Kia и другие популярные модели для перепродажи и личного использования.",
    noteEn:
      "Hyundai, Kia and other popular models for resale or personal use.",
    noteKo: "현대, 기아 등 내수/수출용 인기 모델 중심.",
  },
  trucks: {
    ru: "Грузовики и коммерческий транспорт",
    en: "Trucks & commercial",
    ko: "트럭 · 상용차",
    noteRu:
      "Малотоннажные, среднетоннажные и тяжёлые грузовики, в том числе рефрижераторы.",
    noteEn: "Light/medium/heavy-duty trucks including refrigerated trucks.",
    noteKo: "소형/중형/대형 트럭 및 냉동 탑차 등.",
  },
  special: {
    ru: "Спецтехника",
    en: "Heavy machinery",
    ko: "특장 · 중장비",
    noteRu:
      "Экскаваторы, погрузчики, краны и другая техника для стройки и карьеров.",
    noteEn: "Excavators, loaders, cranes and other construction/mining machines.",
    noteKo: "굴삭기, 로더, 크레인 등 건설/광산 장비.",
  },
  parts: {
    ru: "Двигатели и запчасти",
    en: "Engines & parts",
    ko: "엔진 · 부품",
    noteRu:
      "Контейнеры только с запчастями или микс: кузов, ходовая, электрика.",
    noteEn: "Full-part containers or mixed loads: body, suspension, electrical.",
    noteKo: "엔진/미션 단독 또는 바디/하체/전장 혼합 적재.",
  },
  equipment: {
    ru: "Оборудование и техника",
    en: "Equipment & machinery",
    ko: "설비 · 기계",
    noteRu:
      "Промышленное, строительное, энергетическое оборудование по запросу.",
    noteEn:
      "Industrial, construction and energy-related equipment on request.",
    noteKo: "산업/건설/에너지 관련 설비 주문형 수출.",
  },
  electronics: {
    ru: "Электроника и техника",
    en: "Electronics & devices",
    ko: "전자 · 디바이스",
    noteRu:
      "Партии электроники, офисной техники, CCTV, сетевого оборудования.",
    noteEn:
      "Batches of electronics, office equipment, CCTV and networking gear.",
    noteKo: "전자제품, 사무기기, CCTV, 네트워크 장비 등.",
  },
};

const SUB_LABEL: Record<string, { ru: string; en: string; ko: string }> = {
  sedan: { ru: "Седаны", en: "Sedans", ko: "세단" },
  suv: { ru: "Кроссоверы / SUV", en: "SUV / Crossovers", ko: "SUV/크로스오버" },
  minivan: { ru: "Минивэны / MPV", en: "Minivans / MPV", ko: "미니밴/MPV" },
  pickup: { ru: "Пикапы", en: "Pickups", ko: "픽업" },
  van: { ru: "Фургоны", en: "Vans", ko: "밴" },
  light_truck: { ru: "Малотоннажные", en: "Light-duty", ko: "소형 트럭" },
  heavy_truck: {
    ru: "Тягачи / тяжёлые",
    en: "Heavy-duty / tractors",
    ko: "대형/트랙터",
  },
  refrigerated: { ru: "Рефрижераторы", en: "Refrigerated", ko: "냉동탑" },
  dump: { ru: "Самосвалы", en: "Dump trucks", ko: "덤프" },
  tow: { ru: "Эвакуаторы", en: "Tow trucks", ko: "렉카" },
  excavator: { ru: "Экскаваторы", en: "Excavators", ko: "굴삭기" },
  loader: { ru: "Погрузчики", en: "Loaders", ko: "로더" },
  crane: { ru: "Краны", en: "Cranes", ko: "크레인" },
  forklift: {
    ru: "Вилочные погрузчики",
    en: "Forklifts",
    ko: "지게차",
  },
  road: { ru: "Дорожная техника", en: "Road equipment", ko: "도로 장비" },
  engine: { ru: "Двигатели", en: "Engines", ko: "엔진" },
  transmission: { ru: "Коробки передач", en: "Transmissions", ko: "미션" },
  suspension: {
    ru: "Подвеска / ходовая",
    en: "Suspension / chassis",
    ko: "하체/서스펜션",
  },
  body: {
    ru: "Кузовные элементы",
    en: "Body parts",
    ko: "판금/외장",
  },
  electrical: {
    ru: "Электрика / электроника",
    en: "Electrical / electronics",
    ko: "전장/전기",
  },
  industrial: {
    ru: "Промышленное оборудование",
    en: "Industrial equipment",
    ko: "산업 설비",
  },
  construction: {
    ru: "Строительная техника",
    en: "Construction equipment",
    ko: "건설 장비",
  },
  energy: { ru: "Энергетика", en: "Energy", ko: "에너지 설비" },
  solar: {
    ru: "Солнечные панели / инверторы",
    en: "Solar panels / inverters",
    ko: "태양광 패널/인버터",
  },
  other_machinery: {
    ru: "Другое оборудование",
    en: "Other machinery",
    ko: "기타 기계",
  },
  consumer: {
    ru: "Бытовая электроника",
    en: "Consumer electronics",
    ko: "가전제품",
  },
  pro_tv: {
    ru: "TV / панели / дисплеи",
    en: "TV / panels / displays",
    ko: "TV/패널/디스플레이",
  },
  network: {
    ru: "Сетевое / серверное",
    en: "Networking / server",
    ko: "네트워크/서버",
  },
  cctv: {
    ru: "CCTV / системы безопасности",
    en: "CCTV / security",
    ko: "CCTV/보안",
  },
  office: {
    ru: "Офисная техника",
    en: "Office equipment",
    ko: "사무 기기",
  },
};

interface CategoriesSectionProps {
  lang: Lang;
}

export default function CategoriesSection({ lang }: CategoriesSectionProps) {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-16 border-t border-slate-800/60 pt-10">
      <h2 className="text-xl sm:text-2xl font-bold mb-3">
        {SECTION_TITLE[lang]}
      </h2>
      <p className="text-sm text-slate-300 mb-6 max-w-3xl">
        {SECTION_DESC[lang]}
      </p>

      <div className="grid md:grid-cols-3 gap-5">
        {CATEGORIES.map((cat) => {
          const label = CATEGORY_LABEL[cat.id];
          if (!label) return null;

          let note: string;
          if (lang === "ru") note = label.noteRu;
          else if (lang === "en") note = label.noteEn;
          else note = label.noteKo;

          return (
            <div
              key={cat.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{cat.emoji}</span>
                  <div className="font-semibold text-sm">
                    {label[lang]}
                  </div>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                  {cat.importance === 1 &&
                    (lang === "ru"
                      ? "Основное"
                      : lang === "en"
                      ? "Core"
                      : "핵심")}
                  {cat.importance === 2 &&
                    (lang === "ru"
                      ? "Проекты"
                      : lang === "en"
                      ? "Projects"
                      : "프로젝트")}
                  {cat.importance === 3 &&
                    (lang === "ru"
                      ? "По запросу"
                      : lang === "en"
                      ? "On request"
                      : "요청형")}
                  {cat.importance === 4 &&
                    (lang === "ru"
                      ? "Опционально"
                      : lang === "en"
                      ? "Optional"
                      : "옵션")}
                </span>
              </div>

              <p className="text-[11px] text-slate-400 mb-3">
                {note}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {cat.sub.map((sub) => {
                  const s = SUB_LABEL[sub.id];
                  if (!s) return null;
                  return (
                    <div
                      key={sub.id}
                      className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-200"
                    >
                      <span>{sub.emoji}</span>
                      <span>{s[lang]}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

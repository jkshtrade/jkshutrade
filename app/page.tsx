export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Шапка */}
      <header className="max-w-6xl mx-auto px-4 pt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-teal-400 to-cyan-500 flex items-center justify-center text-slate-950 font-extrabold text-lg shadow-lg shadow-teal-500/30">
            JK
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-300">
              JKSHUTRADE GLOBAL
            </div>
            <div className="text-[11px] text-slate-500">
              Cars • Containers • Partnership
            </div>
          </div>
        </div>

        <nav className="hidden sm:flex items-center gap-4 text-xs text-slate-300">
          <a href="#services" className="hover:text-teal-400 transition">
            Services
          </a>
          <a href="#routes" className="hover:text-teal-400 transition">
            Routes
          </a>
          <a href="#process" className="hover:text-teal-400 transition">
            How it works
          </a>
          <a href="#contacts" className="hover:text-teal-400 transition">
            Contacts
          </a>
          <div className="h-4 w-px bg-slate-700" />
          <a href="/ru" className="hover:text-teal-400 transition">
            RU
          </a>
          <a href="/tj" className="hover:text-teal-400 transition">
            TJ
          </a>
          <a href="/en" className="hover:text-teal-400 transition">
            EN
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 pb-20 pt-10 grid md:grid-cols-[1.2fr,1fr] gap-10 md:gap-16 items-center">
        {/* Левая часть: текст */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-slate-900/60 px-3 py-1 text-[11px] text-teal-300 mb-4">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
            From South Korea to the world
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            Cars from Korea{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500">
              Where Quality Meets Global Trust
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 mb-6 max-w-xl">
            Экспорт корейских автомобилей, спецтехники, двигателей и контейнерных
            грузов. Полный цикл: подбор, проверка, погрузка, логистика до вашего
            города. Работаем прозрачно, с реальными видео-отчётами с площадок
            Кореи.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <a
              href="https://wa.me/XXXXXXXXXXX"
              target="_blank"
              className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs sm:text-sm font-semibold shadow-lg shadow-teal-500/40 transition"
            >
              WhatsApp — запрос машины
            </a>
            <a
              href="https://t.me/XXXXXXXXXXX"
              target="_blank"
              className="px-5 py-2.5 rounded-xl border border-slate-600 hover:border-teal-400 hover:bg-slate-900 text-xs sm:text-sm text-slate-200 transition"
            >
              Telegram — консультация
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-[11px] sm:text-xs text-slate-400">
            <div>
              <div className="text-lg font-bold text-teal-300">10+</div>
              <div>years with Korea market*</div>
            </div>
            <div>
              <div className="text-lg font-bold text-teal-300">5</div>
              <div>main export directions</div>
            </div>
            <div>
              <div className="text-lg font-bold text-teal-300">100%</div>
              <div>photo/video transparency</div>
            </div>
          </div>
        </div>

        {/* Правая часть: карточка маршрута */}
        <div className="relative">
          <div className="absolute -top-6 -right-4 h-32 w-32 rounded-full bg-teal-500/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-4 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-5 sm:p-6 shadow-2xl shadow-black/60">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                Premium Export Route
              </div>
              <div className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-teal-300 border border-teal-500/40">
                Live from Korea
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-200">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Origin</span>
                <span className="font-semibold">Incheon / Pyeongtaek, Korea</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Destination</span>
                <span className="font-semibold">
                  Tajikistan · CIS · Middle East · Africa
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Modes</span>
                <span className="font-semibold">Container · Ro-Ro · Parts & Engines</span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-[11px]">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
                <div className="text-[10px] text-slate-400 mb-1">WHY JKSHUTRADE</div>
                <ul className="space-y-1 text-slate-200">
                  <li>• Прямой контакт из Кореи</li>
                  <li>• Видео с каждой площадки</li>
                  <li>• Детальный расчёт “под ключ”</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
                <div className="text-[10px] text-slate-400 mb-1">BEST FOR</div>
                <ul className="space-y-1 text-slate-200">
                  <li>• Авто-дилеры</li>
                  <li>• Перекупщики</li>
                  <li>• Оптовики по запчастям</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 text-[10px] text-slate-500">
              *Опыт работы с корейским рынком, логистикой и экспортом автомобилей
              для стран СНГ и других регионов.
            </div>
          </div>
        </div>
      </section>

      {/* УСЛУГИ */}
      <section
        id="services"
        className="max-w-6xl mx-auto px-4 pb-16 border-t border-slate-800/60 pt-10"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Что именно мы делаем</h2>
        <p className="text-sm text-slate-300 mb-6 max-w-2xl">
          Мы не просто “отправляем машины”. Мы строим долгосрочное партнёрство:
          от подбора на корейских площадках до выгрузки в вашем городе.
        </p>

        <div className="grid md:grid-cols-3 gap-5 text-sm">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-xs text-teal-300 mb-1">01 • Подбор и проверка</div>
            <div className="font-semibold mb-2">Авто, спецтехника, двигатели</div>
            <ul className="space-y-1 text-slate-300 text-xs">
              <li>— Поиск по Encar, аукционам, площадкам</li>
              <li>— Проверка по VIN, технический осмотр</li>
              <li>— Реальные фото и видео, без фильтров</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-xs text-teal-300 mb-1">02 • Логистика и погрузка</div>
            <div className="font-semibold mb-2">Контейнеры и Ro-Ro</div>
            <ul className="space-y-1 text-slate-300 text-xs">
              <li>— Профессиональная укладка авто и запчастей</li>
              <li>— Фото и видео внутри контейнера</li>
              <li>— Оптимизация мест, чтобы снизить стоимость</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-xs text-teal-300 mb-1">
              03 • Документы и сопровождение
            </div>
            <div className="font-semibold mb-2">Прозрачность и контроль</div>
            <ul className="space-y-1 text-slate-300 text-xs">
              <li>— Инвойсы, пакеты документов для таможни</li>
              <li>— Консультации по растаможке</li>
              <li>— Поддержка до фактического получения авто</li>
            </ul>
          </div>
        </div>
      </section>

      {/* МАРШРУТЫ */}
      <section
        id="routes"
        className="max-w-6xl mx-auto px-4 pb-16 border-t border-slate-800/60 pt-10"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Основные направления</h2>
        <p className="text-sm text-slate-300 mb-6 max-w-2xl">
          Мы открыты для любой страны, но исторически сильны в СНГ и на развивающихся
          рынках.
        </p>

        <div className="grid md:grid-cols-3 gap-5 text-sm">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="font-semibold mb-1">Таджикистан / Центральная Азия</div>
            <p className="text-xs text-slate-300 mb-2">
              Контейнеры через Корею → Китай → Средняя Азия. Опыт именно под этот регион.
            </p>
            <ul className="text-[11px] text-slate-400 space-y-1">
              <li>• Легковые авто</li>
              <li>• Микроавтобусы</li>
              <li>• Запчасти и двигатели</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="font-semibold mb-1">СНГ и Россия</div>
            <p className="text-xs text-slate-300 mb-2">
              Авто для перепродажи, рынков, автосалонов. Гибкая схема оплаты и отправки.
            </p>
            <ul className="text-[11px] text-slate-400 space-y-1">
              <li>• Популярные корейские модели</li>
              <li>• Спецтехника</li>
              <li>• Коммерческий транспорт</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="font-semibold mb-1">Ближний Восток / Африка</div>
            <p className="text-xs text-slate-300 mb-2">
              Надёжные корейские авто и техника для жаркого климата и сложных дорог.
            </p>
            <ul className="text-[11px] text-slate-400 space-y-1">
              <li>• SUV и пикапы</li>
              <li>• Рабочие машины</li>
              <li>• Контейнеры со смешанной загрузкой</li>
            </ul>
          </div>
        </div>
      </section>

      {/* КАК МЫ РАБОТАЕМ */}
      <section
        id="process"
        className="max-w-6xl mx-auto px-4 pb-16 border-t border-slate-800/60 pt-10"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Как мы работаем</h2>
        <p className="text-sm text-slate-300 mb-6 max-w-2xl">
          Простая схема, чтобы не тратить ваше время. Всю “грязную” часть — проверки,
          логистику, документы — мы берём на себя.
        </p>

        <ol className="grid md:grid-cols-4 gap-4 text-[11px] sm:text-xs">
          <li className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-teal-300 font-semibold mb-1">1. Запрос</div>
            <p className="text-slate-300">
              Вы отправляете список машин или бюджет в WhatsApp / Telegram.
            </p>
          </li>
          <li className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-teal-300 font-semibold mb-1">2. Подбор</div>
            <p className="text-slate-300">
              Мы подбираем варианты, делаем проверку и отправляем фото/видео-отчёт.
            </p>
          </li>
          <li className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-teal-300 font-semibold mb-1">3. Погрузка</div>
            <p className="text-slate-300">
              Упаковка и погрузка в контейнер / на судно, фото внутри контейнера.
            </p>
          </li>
          <li className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-teal-300 font-semibold mb-1">4. Доставка</div>
            <p className="text-slate-300">
              Отслеживание и сопровождение до порта/города назначения.
            </p>
          </li>
        </ol>
      </section>

      {/* КОНТАКТЫ */}
      <section
        id="contacts"
        className="max-w-6xl mx-auto px-4 pb-16 border-t border-slate-800/60 pt-10"
      >
        <div className="grid md:grid-cols-[1.5fr,1fr] gap-8 items-start">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Контакты</h2>
            <p className="text-sm text-slate-300 mb-4 max-w-xl">
              Напишите нам в мессенджер. Можно сразу отправить:
              VIN, ссылку на машину, бюджет или просто голосовое сообщение — ответим и
              посчитаем.
            </p>

            <div className="flex flex-wrap gap-3 mb-4 text-xs">
              <a
                href="https://chat.whatsapp.com/EpSqRxMPVfwDxAugGjwSp1?mode=hqrc"
                target="_blank"
                className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold shadow-lg shadow-teal-500/40 transition"
              >
                WhatsApp
              </a>
              <a
                href="https://t.me/+qQM1hevAqaMzYmNl
https://chat.whatsapp.com/EpSqRxMPVfwDxAugGjwSp1?mode=hqrc"
                target="_blank"
                className="px-4 py-2 rounded-xl border border-slate-600 hover:border-teal-400 hover:bg-slate-900 text-slate-100 transition"
              >
                Telegram
              </a>
              <a
                href="https://www.instagram.com/jkshutrade/"
                target="_blank"
                className="px-4 py-2 rounded-xl border border-slate-600 hover:border-teal-400 hover:bg-slate-900 text-slate-100 transition"
              >
                Instagram
              </a>
            </div>

            <div className="text-[11px] text-slate-500">
              Мы находимся в Южной Корее. Работаем с дилерами, автоплощадками,
              перекупщиками и оптовиками. Условия обсуждаем индивидуально.
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-[11px] text-slate-300">
            <div className="text-xs text-slate-400 mb-2">
              Кратко о JKSHUTRADE GLOBAL
            </div>
            <p className="mb-2">
              Не анонимный “поставщик из интернета”, а партнёр, который показывает вам
              весь процесс из Кореи: от парковки до контейнера.
            </p>
            <p className="mb-2">
              Вы всегда видите, за что платите, какие машины покупаются, как они грузятся
              и как уходят из корейского порта.
            </p>
            <p>
              Наша цель — чтобы вы не делали разовую закупку, а возвращались к нам снова
              и строили свой бизнес на корейском качестве.
            </p>
          </div>
        </div>

        <footer className="mt-10 text-[10px] text-slate-600 flex flex-wrap justify-between gap-2">
          <div>© {new Date().getFullYear()} JKSHUTRADE GLOBAL. All rights reserved.</div>
          <div>Partnership Without Borders · Cars from Korea</div>
        </footer>
      </section>
    </main>
  );
}

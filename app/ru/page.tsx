
import CategoriesSection from "../CategoriesSection";

export default function RussianPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="max-w-6xl mx-auto px-4 pt-8 pb-16">
        <header className="flex items-center justify-between mb-8">
          <div>
            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
              JKSHUTRADE GLOBAL
            </div>
            <div className="text-lg font-bold text-slate-50">
              Авто из Кореи • Контейнеры • Партнёрство
            </div>
          </div>
          <nav className="flex gap-3 text-xs text-slate-300">
            <a href="/" className="hover:text-teal-400 transition">
              HOME
            </a>
            <a href="/ko" className="hover:text-teal-400 transition">
              KR
            </a>
            <a href="/en" className="hover:text-teal-400 transition">
              EN
            </a>
          </nav>
        </header>

        <div className="grid md:grid-cols-[1.3fr,1fr] gap-10 items-start mb-12">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-50 mb-4 leading-tight">
              Экспорт автомобилей и техники из Южной Кореи
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500 mt-1">
                для Таджикистана, СНГ и всего мира
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mb-5 max-w-xl">
              Мы помогаем покупать и отправлять из Кореи: легковые авто, микроавтобусы,
              грузовики, спецтехнику, двигатели и запчасти. Полный цикл —
              от подбора на корейских площадках до выгрузки в вашем городе.
            </p>

            <div className="flex flex-wrap gap-3 mb-6 text-xs">
               <a
                href="https://chat.whatsapp.com/EpSqRxMPVfwDxAugGjwSp1?mode=hqrc"
                target="_blank"
                className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold shadow-lg shadow-teal-500/40 transition"
              >
                WhatsApp - Запрос на цены
              </a>
              <a
                href="https://t.me/+qQM1hevAqaMzYmNl
https://chat.whatsapp.com/EpSqRxMPVfwDxAugGjwSp1?mode=hqrc"
                target="_blank"
                className="px-4 py-2 rounded-xl border border-slate-600 hover:border-teal-400 hover:bg-slate-900 text-slate-100 transition"
              >
                Telegram - консултация
              </a>
              <a
                href="https://www.instagram.com/jkshutrade/"
                target="_blank"
                className="px-4 py-2 rounded-xl border border-slate-600 hover:border-teal-400 hover:bg-slate-900 text-slate-100 transition"
              >
                Instagram - наши галерия
              </a>
            </div>

            <p className="text-[11px] text-slate-400 max-w-lg">
              Можно отправить VIN, ссылку на машину или просто голосовое сообщение —
              мы ответим с реальными вариантами и расчётом “под ключ”.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 text-xs text-slate-200">
            <div className="text-[11px] text-slate-400 mb-2">
              Кратко о том, как мы работаем
            </div>
            <ol className="space-y-2 list-decimal list-inside">
              <li>Вы пишете нам в WhatsApp / Telegram, рассказываете задачу и бюджет.</li>
              <li>Мы подбираем авто/технику, делаем проверку, снимаем видео и фото.</li>
              <li>Согласовываем варианты, заключаем договор, принимаем оплату.</li>
              <li>Организуем погрузку в контейнер / Ro-Ro, присылаем отчёт по загрузке.</li>
              <li>Сопровождаем до порта/страны назначения, помогаем с документами.</li>
            </ol>
          </div>
        </div>

        <section className="grid md:grid-cols-3 gap-5 text-sm mb-10">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-xs text-teal-300 mb-1">Что можно заказать</div>
            <ul className="text-xs text-slate-200 space-y-1">
              <li>• Легковые автомобили (Hyundai, Kia и др.)</li>
              <li>• Микроавтобусы, минивэны</li>
              <li>• Грузовики, рефрижераторы</li>
              <li>• Спецтехника и погрузчики</li>
              <li>• Двигатели, коробки, запчасти</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-xs text-teal-300 mb-1">Для кого мы подходим</div>
            <ul className="text-xs text-slate-200 space-y-1">
              <li>• Автосалоны и площадки</li>
              <li>• Перекупщики и оптовики</li>
              <li>• Магазины запчастей</li>
              <li>• Бизнес, покупающий технику для работы</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="text-xs text-teal-300 mb-1">Почему именно Корея</div>
            <ul className="text-xs text-slate-200 space-y-1">
              <li>• Высокое качество обслуживания</li>
              <li>• Реальный пробег и история</li>
              <li>• Много живых машин для перепродажи</li>
              <li>• Большой выбор по бюджету</li>
            </ul>
          </div>
        </section>

        <footer className="text-[11px] text-slate-500">
          © {new Date().getFullYear()} JKSHUTRADE GLOBAL. Авто из Кореи · Партнёрство без границ.
        </footer>
      </section>
     <CategoriesSection lang="ru" />
 
    </main>
  );
}

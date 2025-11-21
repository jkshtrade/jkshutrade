
import CategoriesSection from "../CategoriesSection";

export default function EnglishPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="max-w-6xl mx-auto px-4 pt-8 pb-16">
        <header className="flex items-center justify-between mb-8">
          <div>
            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
              JKSHUTRADE GLOBAL
            </div>
            <div className="text-lg font-bold text-slate-50">
              Korean Cars • Containers • Partnership
            </div>
          </div>
          <nav className="flex gap-3 text-xs text-slate-300">
            <a href="/" className="hover:text-teal-400 transition">
              HOME
            </a>
            <a href="/ru" className="hover:text-teal-400 transition">
              RU
            </a>
            <a href="/ko" className="hover:text-teal-400 transition">
              KR
            </a>
          </nav>
        </header>

        <div className="grid md:grid-cols-[1.3fr,1fr] gap-10 items-start mb-12">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-50 mb-4 leading-tight">
              Export of Korean vehicles and equipment
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500 mt-1">
                to Tajikistan, CIS and worldwide
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mb-5 max-w-xl">
              We source and export passenger cars, minibuses, trucks, special equipment,
              engines and parts directly from South Korea. Full cycle: sourcing,
              inspection, loading and logistics to your destination.
            </p>

            <div className="flex flex-wrap gap-3 mb-6 text-xs">
              <a
                href="https://chat.whatsapp.com/EpSqRxMPVfwDxAugGjwSp1?mode=hqrc"
                target="_blank"
                className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold shadow-lg shadow-teal-500/40 transition"
              >
                WhatsApp — request a quote
              </a>
              <a
                href="https://t.me/+qQM1hevAqaMzYmNl
https://chat.whatsapp.com/EpSqRxMPVfwDxAugGjwSp1?mode=hqrc"
                target="_blank"
                className="px-5 py-2.5 rounded-xl border border-slate-600 hover:border-teal-400 hover:bg-slate-900 text-slate-100 transition"
              >
                Telegram — consultation
              </a>
              <a
                href="https://www.instagram.com/jkshutrade/"
                target="_blank"
                className="px-4 py-2 rounded-xl border border-slate-600 hover:border-teal-400 hover:bg-slate-900 text-slate-100 transition"
              >
                Instagram - Gallery
              </a>
            </div>

            <p className="text-[11px] text-slate-400 max-w-lg">
              Send us a VIN, a link to a car or just a voice message — we&apos;ll reply with
              real options and a full “door-to-port” calculation.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 text-xs text-slate-200">
            <div className="text-[11px] text-slate-400 mb-2">
              How cooperation usually looks
            </div>
            <ol className="space-y-2 list-decimal list-inside">
              <li>You contact us via WhatsApp / Telegram and describe your needs.</li>
              <li>We search the Korean market, check cars and send you photo/video.</li>
              <li>You choose the options, we fix the deal and receive payment.</li>
              <li>We arrange loading into container / Ro-Ro and send loading report.</li>
              <li>We follow the shipment and assist with documents if needed.</li>
            </ol>
          </div>
        </div>

        <footer className="text-[11px] text-slate-500">
          © {new Date().getFullYear()} JKSHUTRADE GLOBAL. Cars from Korea · Partnership Without Borders.
        </footer>
      </section>
      <CategoriesSection lang="en" />

    </main>
  );
}

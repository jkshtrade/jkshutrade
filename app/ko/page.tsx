import CategoriesSection from "../CategoriesSection";

export default function KoreanPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="max-w-6xl mx-auto px-4 pt-8 pb-16">
        <header className="flex items-center justify-between mb-8">
          <div>
            <div className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
              JKSHUTRADE GLOBAL
            </div>
            <div className="text-lg font-bold text-slate-50">
              한국 중고차 · 컨테이너 수출 파트너
            </div>
          </div>
          <nav className="flex gap-3 text-xs text-slate-300">
            <a href="/" className="hover:text-teal-400 transition">
              HOME
            </a>
            <a href="/ru" className="hover:text-teal-400 transition">
              RU
            </a>
            <a href="/en" className="hover:text-teal-400 transition">
              EN
            </a>
          </nav>
        </header>

        <div className="grid md:grid-cols-[1.3fr,1fr] gap-10 items-start mb-12">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-50 mb-4 leading-tight">
              한국에서 중앙아시아・CIS・전세계로
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500 mt-1">
                중고차, 상용차, 특장차, 엔진/부품 수출
              </span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mb-5 max-w-xl">
              인천·평택 항을 기반으로 승용차, 승합차, 화물차, 특장차, 엔진 및 부품을
              컨테이너 / 로로 선적 방식으로 수출합니다. 현장 사진/영상 공유를 통해
              투명하게 진행합니다.
            </p>

            <div className="flex flex-wrap gap-3 mb-6 text-xs">
               <a
                href="https://chat.whatsapp.com/EpSqRxMPVfwDxAugGjwSp1?mode=hqrc"
                target="_blank"
                className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold shadow-lg shadow-teal-500/40 transition"
              >
                 WhatsApp 문의
              </a>
              <a
                href="https://t.me/+qQM1hevAqaMzYmNl
https://chat.whatsapp.com/EpSqRxMPVfwDxAugGjwSp1?mode=hqrc"
                target="_blank"
                className="px-4 py-2 rounded-xl border border-slate-600 hover:border-teal-400 hover:bg-slate-900 text-slate-100 transition"
              >
                Telegram 문의
              </a>
              <a
                href="https://www.instagram.com/jkshutrade/"
                target="_blank"
                className="px-4 py-2 rounded-xl border border-slate-600 hover:border-teal-400 hover:bg-slate-900 text-slate-100 transition"
              >
                Instagram - 갈라레
              </a>
            </div>

            <p className="text-[11px] text-slate-400 max-w-lg">
              VIN, 차량 링크, 희망 예산 등을 보내주시면 대상국가에 맞는 차량과
              예상 물류 비용을 함께 안내드립니다.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 text-xs text-slate-200">
            <div className="text-[11px] text-slate-400 mb-2">
              협업 대상 및 방식
            </div>
            <ul className="space-y-2 list-disc list-inside">
              <li>해외 딜러, 브로커, 부품 상점과 B2B 위주 거래</li>
              <li>차량, 부품, 기타 화물 혼적 컨테이너 구성</li>
              <li>장기 파트너십을 전제로 한 지속 거래 지향</li>
            </ul>
          </div>
        </div>

        <footer className="text-[11px] text-slate-500">
          © {new Date().getFullYear()} JKSHUTRADE GLOBAL. 한국에서 시작하는 글로벌 파트너십.
        </footer>
      </section>
      <CategoriesSection lang="ko" />

    </main>
  );
}

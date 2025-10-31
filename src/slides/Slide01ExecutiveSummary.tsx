import type { ContentSlide } from '../types/slides';

export const Slide01ExecutiveSummary: ContentSlide = {
  type: 'content',
  title: 'I. EXECUTIVE SUMMARY',
  subtitle: 'Acquire · Transform · Exit — Tokenized RIA Platform Thesis',
  content: (
    <div className="h-full flex flex-col gap-8 p-6 sm:p-8 md:p-10 lg:p-12 bg-[#0b1424] text-slate-200">
      <section className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white tracking-[0.08em] uppercase">
              Objective
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Acquire a profitable but structurally outdated RIA, layer tokenized ownership, digital asset yield,
              and automated infrastructure, and exit within 24 months to a fintech or crypto-institutional buyer at
              a re-rated multiple.
            </p>
            <div className="rounded-xl border border-amber-400/60 bg-amber-900/15 px-5 py-4 text-sm text-amber-100">
              Initial Capital Required:{' '}
              <span className="text-amber-200 font-semibold tracking-wide">$50,000 USD</span> — funds the legal,
              compliance, and tokenization scaffold (Reg D 506(c) SPV + DeFi yield vault).
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-700 bg-[#141f36] px-5 py-4">
              <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">Acquisition Price</div>
              <div className="text-2xl font-light text-white">$3.0M</div>
              <div className="text-xs text-slate-400 mt-2">≈ 1.2× revenue | $6.25M implied equity value</div>
            </div>
            <div className="rounded-xl border border-slate-700 bg-[#141f36] px-5 py-4">
              <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">Initial Payment</div>
              <div className="text-2xl font-light text-white">$1.0M</div>
              <div className="text-xs text-slate-400 mt-2">10% cash at close · balance milestone-based</div>
            </div>
            <div className="rounded-xl border border-slate-700 bg-[#141f36] px-5 py-4">
              <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">Funding Vehicle</div>
              <div className="text-sm text-slate-200 leading-relaxed">
                Tokenized SPV (Prime RIA On-Chain LP) + DeFi yield vault “Lidya” to recycle tokenized cash flows.
              </div>
            </div>
            <div className="rounded-xl border border-slate-700 bg-[#141f36] px-5 py-4">
              <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">Projected Exit</div>
              <div className="text-2xl font-light text-white">$100–120M</div>
              <div className="text-xs text-slate-400 mt-2">12× revenue fintech valuation within 24 months</div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs uppercase tracking-[0.35em] text-slate-400">
        <div className="rounded-2xl border border-slate-700 bg-[#111b30] px-4 py-3 text-center">
          <div className="text-slate-200 text-xl font-light mb-1">Tokenize Ownership</div>
          <div className="text-[11px] text-slate-500">Secondary-ready LP · Automated waterfall</div>
        </div>
        <div className="rounded-2xl border border-slate-700 bg-[#111b30] px-4 py-3 text-center">
          <div className="text-slate-200 text-xl font-light mb-1">Automate Operations</div>
          <div className="text-[11px] text-slate-500">AI reporting · Compliance · Billing</div>
        </div>
        <div className="rounded-2xl border border-slate-700 bg-[#111b30] px-4 py-3 text-center">
          <div className="text-slate-200 text-xl font-light mb-1">Integrate DeFi Yield</div>
          <div className="text-[11px] text-slate-500">BTC/ETH sleeves · Lidya vault · Tokenized RWAs</div>
        </div>
      </section>
    </div>
  )
};

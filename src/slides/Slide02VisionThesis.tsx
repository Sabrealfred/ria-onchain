import type { ContentSlide } from '../types/slides';

export const Slide02VisionThesis: ContentSlide = {
  type: 'content',
  title: 'II. VISION & THESIS',
  subtitle: 'Re-rate a legacy RIA from 2.5× to 12× through tokenization and digital yield',
  content: (
    <div className="h-full flex flex-col gap-8 p-6 sm:p-8 md:p-10 lg:p-12 bg-[#0b1424] text-slate-200">
      <section className="rounded-2xl border border-slate-800 bg-gradient-to-r from-[#101a32] via-[#0f1931] to-[#0c1426] p-8 shadow-sm">
        <blockquote className="text-lg sm:text-xl md:text-2xl font-light text-slate-100 leading-relaxed italic">
          “Re-rating a traditional RIA from a service multiple to a fintech multiple by digitizing ownership,
          automating operations, and embedding crypto yield.”
        </blockquote>
        <div className="mt-4 text-xs uppercase tracking-[0.4em] text-slate-500">
          — RY-Capital · MiraLabs · October 2025
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-slate-700 bg-[#111b30] p-6 shadow-sm">
          <div className="text-xs uppercase tracking-[0.35em] text-sky-300 mb-3">1. Tokenize Ownership</div>
          <p className="text-sm text-slate-300 leading-relaxed">
            Launch ERC-3643 compliant LP interests with automated distribution waterfall, secondary-readiness, and
            transparent investor records.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-700 bg-[#111b30] p-6 shadow-sm">
          <div className="text-xs uppercase tracking-[0.35em] text-emerald-300 mb-3">2. Integrate DeFi Yield</div>
          <p className="text-sm text-slate-300 leading-relaxed">
            Deploy the Lidya vault to offer tokenized Treasuries, staking, and restaking mandates that expand fee
            yield by +205 bps while serving client demand.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-700 bg-[#111b30] p-6 shadow-sm">
          <div className="text-xs uppercase tracking-[0.35em] text-purple-300 mb-3">3. Automate Operations</div>
          <p className="text-sm text-slate-300 leading-relaxed">
            Replace manual workflows with AI-enabled reporting, compliance automation, and on-chain client portals
            to expand EBITDA margins beyond 55%.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-slate-300">
          <div>
            <h4 className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">Strategic Goals</h4>
            <ul className="space-y-2">
              <li>• Build a dual-tokenized capital stack ready for secondary liquidity.</li>
              <li>• Embed crypto advisory and DeFi yield to create differentiated revenue streams.</li>
              <li>• Scale automation to deliver institutional-grade reporting and compliance.</li>
              <li>• Engineer a premium exit to fintech or crypto-institutional acquirers.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">Success KPIs</h4>
            <ul className="space-y-2">
              <li>• Revenue: $2.5M → $5.6M (CAGR 41%).</li>
              <li>• EBITDA Margin: 42% → 56%.</li>
              <li>• Tech-enabled revenue mix: 18% → 62%.</li>
              <li>• Valuation multiple: 1.2× → 12× revenue.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
};

import type { ContentSlide } from '../types/slides';

export const Slide06CaseStudy: ContentSlide = {
  type: 'content',
  title: 'VI. CASE STUDY — RANGE FINANCE BENCHMARK',
  subtitle: 'Validating fintech valuation uplift · positioning RIA On-Chain for scarcity premium',
  content: (
    <div className="h-full flex flex-col gap-8 p-6 sm:p-8 md:p-10 lg:p-12 bg-[#0b1424] text-slate-200">
      <section className="rounded-2xl border border-slate-800 bg-gradient-to-r from-[#101a32] via-[#182544] to-[#0f1931] p-6 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400">Industry Benchmark</div>
            <h3 className="text-2xl font-light text-white">Range Finance (range.com)</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Raised $40M (Series B led by Cathay Innovation) and reached a $100–130M valuation by offering a
              flat-fee wealthtech platform without crypto exposure. Demonstrates appetite for digitized advisory
              business models.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              RIA On-Chain adds tokenization, DeFi yield, and regulatory-grade infrastructure — creating a scarcity
              premium for buyers seeking digital asset capabilities.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-[#111b30] p-5 text-sm text-slate-300">
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-3">Valuation Growth Potential</div>
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-slate-800/60 rounded-lg overflow-hidden">
                <div className="bg-sky-400/80 py-3 text-center text-slate-900 font-semibold">Range · $130M</div>
              </div>
              <div className="flex-1 bg-slate-800/60 rounded-lg overflow-hidden">
                <div className="bg-emerald-400/80 py-3 text-center text-slate-900 font-semibold">
                  RIA On-Chain · $100M (target)
                </div>
              </div>
            </div>
            <div className="text-xs text-slate-500 mt-3">
              Flat-fee wealthtech models reach nine-digit valuations without tokenization. Our thesis integrates
              on-chain components for additive upside.
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-sm text-slate-300">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">Range Finance</div>
            <ul className="space-y-2">
              <li>• Founded 2021 · US investor base.</li>
              <li>• $40M total funding · Series B (Cathay Innovation).</li>
              <li>• Valuation $100–130M with flat-fee model.</li>
              <li>• AUM reported: $27M managed · $3B aggregated.</li>
              <li>• No crypto allocations · no tokenization.</li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">RIA On-Chain (Target)</div>
            <ul className="space-y-2">
              <li>• 2025 vintage · US-based tokenized LP.</li>
              <li>• $5.5M total capital plan (setup + tranches).</li>
              <li>• Target valuation $100–120M in 24 months.</li>
              <li>• AUM post-transformation: $300–600M regulated.</li>
              <li>• Full DeFi yield + tokenization stack embedded.</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-xs text-slate-400">
          Takeaway: We aim to deliver Range-level valuation with the added scarcity of tokenized assets, making the
          platform attractive to public fintechs and crypto institutions.
        </div>
      </section>
    </div>
  )
};

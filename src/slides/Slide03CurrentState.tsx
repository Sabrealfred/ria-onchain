import type { ContentSlide } from '../types/slides';

export const Slide03CurrentState: ContentSlide = {
  type: 'content',
  title: 'III. CURRENT STATE — SECTOR ANALYSTS, LLC',
  subtitle: 'Baseline financials · operational footprint · structural constraints',
  content: (
    <div className="h-full flex flex-col gap-8 p-6 sm:p-8 md:p-10 lg:p-12 bg-[#0b1424] text-slate-200">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-4">Financial Snapshot</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-300">
              <div className="bg-[#141f36] border border-slate-700 rounded-xl px-4 py-3">
                <div className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-2">Revenue 2025E</div>
                <div className="text-2xl font-light text-white">$2.5M</div>
                <div className="text-xs text-slate-500 mt-1">YTD Oct $2.13M · QoQ growth 11%</div>
              </div>
              <div className="bg-[#141f36] border border-slate-700 rounded-xl px-4 py-3">
                <div className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-2">Gross Margin</div>
                <div className="text-2xl font-light text-emerald-200">89.6%</div>
                <div className="text-xs text-slate-500 mt-1">EBITDA $1.8M (FY24)</div>
              </div>
              <div className="bg-[#141f36] border border-slate-700 rounded-xl px-4 py-3">
                <div className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-2">AUM</div>
                <div className="text-2xl font-light text-white">$269.5M</div>
                <div className="text-xs text-slate-500 mt-1">912 positions · APD, AMZN, MSFT, PLTR</div>
              </div>
              <div className="bg-[#141f36] border border-slate-700 rounded-xl px-4 py-3">
                <div className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-2">Valuation (Trad.)</div>
                <div className="text-2xl font-light text-white">$2.5–3.8M</div>
                <div className="text-xs text-slate-500 mt-1">1.0–1.5× revenue · No tech premium</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-3">Client Base</div>
            <p className="text-sm text-slate-300 leading-relaxed">
              ≈ 1,000 accounts spanning HNW / UHNW families and institutional carve-outs. 67% of revenue is
              concentrated in APAM. Average client tenure: 10 years. High trust, low tech enablement.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-rose-500/40 bg-[#1c1422] p-6 shadow-sm">
          <h3 className="text-sm uppercase tracking-[0.35em] text-rose-200 mb-4">Constraint Map</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-rose-100">
            <div className="bg-[#24192c] border border-rose-500/50 rounded-xl px-4 py-3">
              <div className="font-semibold mb-2">Legacy Infrastructure</div>
              <ul className="space-y-1">
                <li>• CRM + billing manual</li>
                <li>• No API connectivity</li>
                <li>• Quarterly portfolio reviews</li>
              </ul>
            </div>
            <div className="bg-[#24192c] border border-rose-500/50 rounded-xl px-4 py-3">
              <div className="font-semibold mb-2">Product Limitations</div>
              <ul className="space-y-1">
                <li>• No crypto or tokenized offering</li>
                <li>• No DeFi yield sleeves</li>
                <li>• Flat service multiple ceiling</li>
              </ul>
            </div>
            <div className="bg-[#24192c] border border-rose-500/50 rounded-xl px-4 py-3">
              <div className="font-semibold mb-2">Custody Risk</div>
              <ul className="space-y-1">
                <li>• Single custodian</li>
                <li>• Assets siloed per account</li>
                <li>• Limited reporting throughput</li>
              </ul>
            </div>
            <div className="bg-[#24192c] border border-rose-500/50 rounded-xl px-4 py-3">
              <div className="font-semibold mb-2">Growth Ceiling</div>
              <ul className="space-y-1">
                <li>• Advisor headcount drives growth</li>
                <li>• Fee compression pressure</li>
                <li>• Earn-out optionality limited</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
        <h4 className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-3">Baseline Investment Thesis</h4>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-sm text-slate-300">
          <div className="border border-slate-700 rounded-xl bg-[#141f36] px-4 py-3">
            <div className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-2">Acquisition Case</div>
            <p>Buy at ≈1.2× revenue for an 89% gross margin platform with entrenched client relationships.</p>
          </div>
          <div className="border border-slate-700 rounded-xl bg-[#141f36] px-4 py-3">
            <div className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-2">Transformation Gap</div>
            <p>Zero web3 stack, manual operations, and custodial lock-in create immediate uplift levers.</p>
          </div>
          <div className="border border-slate-700 rounded-xl bg-[#141f36] px-4 py-3">
            <div className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-2">Valuation Upside</div>
            <p>Re-rate to 8–12× revenue once tokenized products and automated infrastructure scale.</p>
          </div>
        </div>
      </section>
    </div>
  )
};

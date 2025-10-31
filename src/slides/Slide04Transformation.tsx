import type { ContentSlide } from '../types/slides';

export const Slide04Transformation: ContentSlide = {
  type: 'content',
  title: 'IV. TRANSFORMATION BLUEPRINT',
  subtitle: 'Twelve high-conviction levers — legacy RIA to prime on-chain platform',
  content: (
    <div className="h-full flex flex-col gap-8 p-6 sm:p-8 md:p-10 lg:p-12 bg-[#0b1424] text-slate-200">
      <section className="rounded-2xl border border-slate-800 bg-gradient-to-r from-[#101a32] via-[#142043] to-[#0f1931] p-6 shadow-sm">
        <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-3">Transformation Pillars</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Tokenization & Capital Stack',
              period: 'Weeks 0-8',
              items: [
                'ERC-3643 LP issuance with compliance embedded',
                'Plume.org RWA vault for Treasuries & credit notes',
                'Automated waterfall, LP portal, on-chain cap table'
              ]
            },
            {
              title: 'Crypto & Yield Advisory',
              period: 'Months 3-12',
              items: [
                '5–15% BTC/ETH advisory sleeves with custody',
                'DeFi yield marketplace (stablecoins, staking, restaking)',
                'Tax alpha engine for gain harvesting & compliance'
              ]
            },
            {
              title: 'Operating System & Automation',
              period: 'Months 6-18',
              items: [
                'Unified data spine · AI-enabled reporting',
                'Automated onboarding, billing, compliance workflows',
                'Client portal 2.0 (TradFi + on-chain performance)'
              ]
            },
            {
              title: 'Regulatory & Risk Architecture',
              period: 'Always-On',
              items: [
                'Dual custody: Anchorage + BNY Mellon',
                'Compliance automation & token eligibility screening',
                'SOC 2 readiness, smart-contract insurance coverage'
              ]
            }
          ].map(pillar => (
            <div key={pillar.title} className="bg-[#111b30]/70 border border-slate-700 rounded-xl px-5 py-6">
              <div className="text-[11px] uppercase tracking-[0.35em] text-slate-400 mb-2">{pillar.period}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{pillar.title}</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {pillar.items.map(item => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-slate-200">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">Revenue Impact</div>
            <div className="text-3xl font-light text-white">$2.5M → $5.6M</div>
            <div className="text-xs text-slate-400 mt-2">+205 bps blended fee yield by Month 24</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">Margin Expansion</div>
            <div className="text-3xl font-light text-white">42% → 56%</div>
            <div className="text-xs text-slate-400 mt-2">Automation + shared services stack</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">Valuation Re-Rate</div>
            <div className="text-3xl font-light text-white">1.2× → 12×</div>
            <div className="text-xs text-slate-400 mt-2">Fintech comparables (Anchorage, Range, Eaglebrook)</div>
          </div>
        </div>
      </section>
    </div>
  )
};

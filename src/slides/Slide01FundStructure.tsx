import type { ContentSlide } from '../types/slides';

const phaseCardClasses =
  'relative rounded-xl bg-white shadow-sm border border-slate-200 p-6 flex flex-col justify-between';

export const Slide01FundStructure: ContentSlide = {
  type: 'content',
  title: 'I. FUND STRUCTURE',
  subtitle: 'Tokenized Private Equity Vehicle — Operating Playbook & Capital Stack',
  content: (
    <div className="h-full flex flex-col gap-8 p-6 sm:p-8 md:p-10 lg:p-12 bg-[#0b1424] text-slate-200">
      <section className="rounded-2xl bg-gradient-to-r from-blue-900/90 via-indigo-800/80 to-slate-900/90 border border-slate-800 shadow-lg p-8 sm:p-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.35em] text-blue-200 mb-3">Plan Architecture</div>
            <h2 className="text-2xl sm:text-3xl font-light text-white leading-tight">Tokenized Delaware LP → $5M Raise → $40M+ Deployment</h2>
            <p className="text-sm sm:text-base text-slate-200/80 mt-4 max-w-2xl">
              The Prime RIA On-Chain vehicle acquires undervalued RIAs, layers fintech infrastructure, and exits to
              crypto-fintech buyers at premium multiples within 18-24 months.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center text-sm">
            <div className="rounded-xl border border-blue-500/60 bg-blue-900/30 px-6 py-5">
              <div className="text-[11px] uppercase tracking-[0.3em] text-blue-200 mb-2">Setup Capital</div>
              <div className="text-2xl font-semibold text-white">$50K</div>
              <div className="text-xs text-blue-100 mt-1">Formation · Tokenization</div>
            </div>
            <div className="rounded-xl border border-emerald-500/60 bg-emerald-900/30 px-6 py-5">
              <div className="text-[11px] uppercase tracking-[0.3em] text-emerald-200 mb-2">Target Raise</div>
              <div className="text-2xl font-semibold text-white">$5M</div>
              <div className="text-xs text-emerald-100 mt-1">Security Token Offering</div>
            </div>
            <div className="rounded-xl border border-indigo-500/50 bg-indigo-900/30 px-6 py-5">
              <div className="text-[11px] uppercase tracking-[0.3em] text-indigo-200 mb-2">Fund Hold</div>
              <div className="text-2xl font-semibold text-white">18-24m</div>
              <div className="text-xs text-indigo-100 mt-1">Compressed Exit Window</div>
            </div>
            <div className="rounded-xl border border-purple-500/60 bg-purple-900/30 px-6 py-5">
              <div className="text-[11px] uppercase tracking-[0.3em] text-purple-200 mb-2">Target MOIC</div>
              <div className="text-2xl font-semibold text-white">8-10x</div>
              <div className="text-xs text-purple-100 mt-1">60-75% Net IRR</div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className={`${phaseCardClasses} bg-[#111b30] border-slate-800 text-slate-100`}>
          <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t-xl" />
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-blue-300 mb-3">Phase 01 · Weeks 0-4</div>
            <h3 className="text-xl font-semibold text-white mb-2">$50K Formation Sprint</h3>
            <p className="text-sm text-slate-300/80 mb-5">
              Institutional wrapper ready in 30 days with tokenization rails live.
            </p>
            <ul className="space-y-2 text-sm text-slate-200/90">
              <li>• Delaware LP & GP formation, governance docs</li>
              <li>• LPA, PPM, subscription stack, operating handbook</li>
              <li>• SEC / FINRA compliance, supervisory procedures</li>
              <li>• Plume.org ERC-3643 issuance, smart-contract audit</li>
              <li>• Banking, custody, KYC/AML orchestration</li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-semibold text-blue-300 uppercase tracking-[0.25em]">
            Deliverable · Investor-ready vehicle
          </div>
        </div>

        <div className={`${phaseCardClasses} bg-[#111b30] border-slate-800 text-slate-100`}>
          <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-t-xl" />
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-emerald-300 mb-3">Phase 02 · Months 1-4</div>
            <h3 className="text-xl font-semibold text-white mb-2">$5M Tokenized Raise</h3>
            <p className="text-sm text-slate-300/80 mb-5">
              Rolling monthly closes with automated LP servicing and distributions.
            </p>
            <ul className="space-y-2 text-sm text-slate-200/90">
              <li>• $25K minimum · qualified purchasers, family offices</li>
              <li>• ERC-3643 LP tokens with embedded compliance</li>
              <li>• Automated KYC/AML, cap table, investor portal</li>
              <li>• Monthly NAV, tokenized distributions, secondary prep</li>
              <li>• Anchor LPs: crypto HNW + institutional co-GP</li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-semibold text-emerald-300 uppercase tracking-[0.25em]">
            Deliverable · $5M capital base
          </div>
        </div>

        <div className={`${phaseCardClasses} bg-[#111b30] border-slate-800 text-slate-100`}>
          <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-t-xl" />
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-indigo-300 mb-3">Phase 03 · Months 4-20</div>
            <h3 className="text-xl font-semibold text-white mb-2">$40M+ Deployment & Exits</h3>
            <p className="text-sm text-slate-300/80 mb-5">
              Acquire, transform, and exit 3-5 RIAs at fintech multiples with milestone earn-outs.
            </p>
            <ul className="space-y-2 text-sm text-slate-200/90">
              <li>• $2-3M entry per RIA | Earn-outs tied to fintech KPIs</li>
              <li>• Crypto stack, tokenization layer, automation spine</li>
              <li>• Shared services: compliance, treasury, product</li>
              <li>• Strategic buyer pipeline (Coinbase, SoFi, Focus)</li>
              <li>• Exit committee + banker-led dual-track process</li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] font-semibold text-indigo-300 uppercase tracking-[0.25em]">
            Deliverable · 10X valuation creation
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-[#0f1b33] p-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-slate-200">
        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-slate-400 mb-2">Fund Geometry</div>
          <div className="text-3xl font-light text-white">$45M Core</div>
          <div className="text-xs text-slate-400 mt-2">Plus revolving credit for opportunistic bolt-ons.</div>
        </div>
        <div className="border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
          <div className="text-[11px] uppercase tracking-[0.3em] text-slate-400 mb-2">Hold Period</div>
          <div className="text-3xl font-light text-white">18-24 m</div>
          <div className="text-xs text-slate-400 mt-2">Milestone-linked exits per asset.</div>
        </div>
        <div className="border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
          <div className="text-[11px] uppercase tracking-[0.3em] text-slate-400 mb-2">Target MOIC</div>
          <div className="text-3xl font-light text-white">10.0x</div>
          <div className="text-xs text-slate-400 mt-2">Upside to 12.5x with platform premium.</div>
        </div>
        <div className="border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
          <div className="text-[11px] uppercase tracking-[0.3em] text-slate-400 mb-2">Waterfall</div>
          <div className="text-3xl font-light text-white">Pref 8%</div>
          <div className="text-xs text-slate-400 mt-2">Carry 20% &gt; 8% | 30% &gt; 12% IRR hurdles.</div>
        </div>
      </section>
    </div>
  )
};

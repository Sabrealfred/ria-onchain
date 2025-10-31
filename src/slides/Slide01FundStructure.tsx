import type { ContentSlide } from '../types/slides';

const phaseCardClasses =
  'relative rounded-xl bg-white shadow-sm border border-slate-200 p-6 flex flex-col justify-between';

export const Slide01FundStructure: ContentSlide = {
  type: 'content',
  title: 'I. FUND STRUCTURE',
  subtitle: 'Tokenized Private Equity Vehicle — Operating Playbook & Capital Stack',
  content: (
    <div className="h-full flex flex-col gap-8 p-6 sm:p-8 md:p-10 lg:p-12 pt-28 bg-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className={`${phaseCardClasses}`}>
          <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-t-xl" />
          <div>
            <div className="text-slate-500 text-xs uppercase tracking-[0.25em] mb-3">Phase 01</div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-1">$50,000 Formation Sprint</h3>
            <p className="text-sm text-slate-600 mb-5">
              Institutional wrapper launched in 30 days with tokenization rails live day one.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Delaware LP & GP management entity</li>
              <li>• LPA, PPM, subscription docs, operating handbook</li>
              <li>• SEC/FINRA counsel, written supervisory procedures</li>
              <li>• Plume.org integration — ERC-3643 smart contracts</li>
              <li>• Banking, custody, payments, investor data room</li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-blue-600 uppercase tracking-wide">
            Timeline · Weeks 0-4
          </div>
        </div>

        <div className={`${phaseCardClasses}`}>
          <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-t-xl" />
          <div>
            <div className="text-slate-500 text-xs uppercase tracking-[0.25em] mb-3">Phase 02</div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-1">$5M Tokenized Raise</h3>
            <p className="text-sm text-slate-600 mb-5">
              Security token offering with rolling monthly closes and automated distributions.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• $25K minimum, qualified purchasers + family offices</li>
              <li>• ERC-3643 LP tokens with transfer restrictions codified</li>
              <li>• Automated KYC/AML, cap table, secondary readiness</li>
              <li>• Monthly NAV reporting, digital subscription workflow</li>
              <li>• Anchor LPs: crypto-native HNW + institutional co-GP</li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-emerald-600 uppercase tracking-wide">
            Timeline · Months 1-4
          </div>
        </div>

        <div className={`${phaseCardClasses}`}>
          <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-t-xl" />
          <div>
            <div className="text-slate-500 text-xs uppercase tracking-[0.25em] mb-3">Phase 03</div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-1">$40M+ Deployment & Exits</h3>
            <p className="text-sm text-slate-600 mb-5">
              Acquire, transform, and exit 3-5 RIAs at fintech valuations within 18-20 months.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• $2-3M entry per RIA | 8-12x EBITDA fintech exit target</li>
              <li>• Playbook: crypto stack, tokenization, automation layer</li>
              <li>• Portfolio ops: shared tech spine, compliance, treasury</li>
              <li>• Milestone-based earn-outs to align founder incentives</li>
              <li>• Exit committee: strategics (Coinbase/Fidelity) + PE</li>
            </ul>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-indigo-600 uppercase tracking-wide">
            Timeline · Months 4-20
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 bg-white/80 border border-slate-200 rounded-xl p-6">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">Fund Geometry</div>
          <div className="text-3xl font-light text-slate-900">$45M core</div>
          <div className="text-sm text-slate-600">Plus credit line for opportunistic bolt-ons</div>
        </div>
        <div className="border-l border-slate-200 pl-6">
          <div className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">Hold Period</div>
          <div className="text-3xl font-light text-slate-900">18-24 months</div>
          <div className="text-sm text-slate-600">Per asset — milestone-linked exits</div>
        </div>
        <div className="border-l border-slate-200 pl-6">
          <div className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">Target MOIC</div>
          <div className="text-3xl font-light text-slate-900">10.0x</div>
          <div className="text-sm text-slate-600">Base case — upside to 12.5x</div>
        </div>
        <div className="border-l border-slate-200 pl-6">
          <div className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">Distribution Waterfall</div>
          <div className="text-3xl font-light text-slate-900">Preferred 8%</div>
          <div className="text-sm text-slate-600">Carry 20% &gt;8% | 30% &gt;12%</div>
        </div>
      </div>
    </div>
  )
};

import { Rocket, TrendingUp, Building2, Award, Landmark, LineChart } from 'lucide-react';
import type { ContentSlide } from '../types/slides';

const milestoneRows = [
  {
    tranche: 'T0 · 10%',
    month: 'Close',
    trigger: 'Acquisition Signing',
    payment: '$2.5M',
    valuation: '$25M pre',
    notes: 'Lock in founder rollover, integration readiness'
  },
  {
    tranche: 'T1 · 15%',
    month: 'Month 6',
    trigger: '$4M Revenue | Dual Custody Live',
    payment: '$3.75M',
    valuation: '$40M',
    notes: 'Digital asset sleeves 20% penetration'
  },
  {
    tranche: 'T2 · 20%',
    month: 'Month 12',
    trigger: '$5M Revenue | 25% EBITDA | Tokenized LP',
    payment: '$5.0M',
    valuation: '$60M',
    notes: 'First external RIA onboarded to platform'
  },
  {
    tranche: 'T3 · 20%',
    month: 'Month 18',
    trigger: '$6.2M Revenue | 3 RIAs integrated',
    payment: '$6.25M',
    valuation: '$80M',
    notes: 'Fintech metrics audited, banker engaged'
  },
  {
    tranche: 'T4 · 35%',
    month: 'Month 24',
    trigger: '$7M Revenue | 28% EBITDA | Exit',
    payment: '$8.5M',
    valuation: '$100M+',
    notes: 'Strategic sale (fintech multiple 10-12x)'
  }
];

export const Slide05Vision: ContentSlide = {
  type: 'content',
  title: 'V. EXIT STRATEGY & VISION',
  subtitle: 'Milestone-Based Earn-Out · Strategic Buyer Map · 10X+ Value Creation',
  content: (
    <div className="h-full flex flex-col gap-8 p-6 sm:p-8 md:p-10 lg:p-12 pt-28 bg-slate-100">
      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <Award size={28} className="text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Milestone Earn-Out Architecture</h3>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Aligning incentives through 24 months</p>
            </div>
          </div>
          <div className="text-xs text-slate-500">
            Structure: 10% cash at close · 90% milestone-based · No clawbacks post-achievement
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-slate-700">
            <thead>
              <tr className="text-xs uppercase tracking-widest text-slate-500 border-b border-slate-200">
                <th className="py-3 pr-4 text-left">Tranche</th>
                <th className="py-3 pr-4 text-left">Timing</th>
                <th className="py-3 pr-4 text-left">Trigger</th>
                <th className="py-3 pr-4 text-left">Payment</th>
                <th className="py-3 pr-4 text-left">Implied Valuation</th>
                <th className="py-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              {milestoneRows.map(row => (
                <tr key={row.tranche} className="border-b border-slate-100 last:border-transparent">
                  <td className="py-4 pr-4 font-semibold text-slate-900">{row.tranche}</td>
                  <td className="py-4 pr-4 text-slate-600">{row.month}</td>
                  <td className="py-4 pr-4 text-slate-700">{row.trigger}</td>
                  <td className="py-4 pr-4 font-semibold text-slate-900">{row.payment}</td>
                  <td className="py-4 pr-4 text-slate-700">{row.valuation}</td>
                  <td className="py-4 text-slate-600">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Rocket size={26} className="text-emerald-600" />
            <div>
              <h4 className="text-md font-semibold text-slate-900">Value Creation Flywheel</h4>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Platform Economics</p>
            </div>
          </div>
          <ul className="space-y-3 text-sm text-slate-700">
            <li>• Revenue: $2.5M → $5.6M | CAGR 41%</li>
            <li>• EBITDA Margin: 42% → 56%</li>
            <li>• Tech-enabled revenue mix: 18% → 62%</li>
            <li>• Product suite drives 205 bps fee expansion</li>
          </ul>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp size={26} className="text-indigo-600" />
            <div>
              <h4 className="text-md font-semibold text-slate-900">Return Profile</h4>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Investor Economics</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
            <div className="rounded-lg bg-indigo-50 border border-indigo-100 p-4">
              <div className="text-xs uppercase tracking-[0.35em] text-indigo-500 mb-2">MOIC</div>
              <div className="text-2xl font-semibold text-slate-900">10.0x</div>
              <div className="text-xs text-indigo-600 mt-1">Base Case | Upside 12.5x</div>
            </div>
            <div className="rounded-lg bg-emerald-50 border border-emerald-100 p-4">
              <div className="text-xs uppercase tracking-[0.35em] text-emerald-500 mb-2">IRR</div>
              <div className="text-2xl font-semibold text-slate-900">85%</div>
              <div className="text-xs text-emerald-600 mt-1">Probability-weighted (55% base)</div>
            </div>
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 col-span-2">
              <div className="text-xs uppercase tracking-[0.35em] text-slate-500 mb-2">Exit Valuation</div>
              <div className="text-lg font-semibold text-slate-900">$100M – $120M</div>
              <div className="text-xs text-slate-600 mt-1">10-12x revenue fintech comparable range</div>
            </div>
          </div>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Building2 size={26} className="text-amber-600" />
            <div>
              <h4 className="text-md font-semibold text-slate-900">Strategic Buyer Landscape</h4>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Exit Pathways</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 text-sm text-slate-700">
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
              <div className="font-semibold text-amber-800 mb-1">Fintech Platforms</div>
              <div className="text-xs text-amber-700">Robinhood Advisor · SoFi Wealth · Betterment</div>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
              <div className="font-semibold text-blue-800 mb-1">Crypto Institutions</div>
              <div className="text-xs text-blue-700">Coinbase Institutional · Kraken Prime · Galaxy</div>
            </div>
            <div className="rounded-lg border border-purple-200 bg-purple-50 p-3">
              <div className="font-semibold text-purple-800 mb-1">RIA Rollups</div>
              <div className="text-xs text-purple-700">Focus Financial · Mercer · Wealth Enhancement</div>
            </div>
          </div>
        </article>
      </section>

      <section className="rounded-xl border border-slate-200 bg-slate-900 text-white p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <Landmark size={32} className="text-blue-300" />
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">Strategic Thesis</div>
              <div className="text-sm text-slate-200">
                First institutional-grade, tokenized RIA platform — scarcity value for public fintech acquirers seeking digital asset capabilities.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <LineChart size={32} className="text-emerald-300" />
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">Validation Stack</div>
              <div className="text-sm text-slate-200">
                Quarterly third-party valuations · SOC 2 readiness · Big 4 QofE · On-chain metrics reporting.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Rocket size={32} className="text-purple-300" />
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">Exit Window</div>
              <div className="text-sm text-slate-200">
                Q2 2026 banker-led process targeting dual-track M&A | SPAC-ready documentation as optionality.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

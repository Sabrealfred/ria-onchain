import { Rocket, TrendingUp, Building2, Award, Landmark, LineChart } from 'lucide-react';
import type { ContentSlide } from '../types/slides';

const milestoneRows = [
  {
    tranche: 'T0 · 16%',
    month: 'Close',
    trigger: 'Acquisition Signing',
    payment: '$1.0M',
    valuation: '$6.25M implied (2.5× revenue)',
    notes: 'Founder rollover locked | integration kickoff'
  },
  {
    tranche: 'T1 · 20%',
    month: 'Month 6',
    trigger: '$3.6M Revenue · Dual Custody Live',
    payment: '$1.25M',
    valuation: '$7.5M',
    notes: 'Digital asset sleeves reach 15% adoption'
  },
  {
    tranche: 'T2 · 24%',
    month: 'Month 12',
    trigger: '$4.5M Revenue · 24% EBITDA · Tokenized LP',
    payment: '$1.50M',
    valuation: '$9.0M',
    notes: 'First external RIA onboarded; Lidya vault scaling'
  },
  {
    tranche: 'T3 · 24%',
    month: 'Month 18',
    trigger: '$5.6M Revenue · 3 RIAs integrated',
    payment: '$1.50M',
    valuation: '$10.5M',
    notes: 'Fintech metrics audited, banker mandate issued'
  },
  {
    tranche: 'T4 · 16%',
    month: 'Month 24',
    trigger: '$7.0M Revenue · 28% EBITDA · Exit Ready',
    payment: '$1.0M',
    valuation: '$12.0M',
    notes: 'Triggers strategic exit (10-12× revenue)'
  }
];

export const Slide05Vision: ContentSlide = {
  type: 'content',
  title: 'V. EXIT STRATEGY & VISION',
  subtitle: 'Milestone-Based Earn-Out · Strategic Buyer Map · 10X+ Value Creation',
  content: (
    <div className="h-full flex flex-col gap-8 p-6 sm:p-8 md:p-10 lg:p-12 bg-[#0b1424] text-slate-200">
      <section className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <Award size={28} className="text-blue-300" />
            <div>
              <h3 className="text-lg font-semibold text-white">Milestone Earn-Out Architecture</h3>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Aligning incentives through 24 months</p>
            </div>
          </div>
          <div className="text-xs text-slate-400">
            Structure: 10% cash at close · 90% milestone-based · No clawbacks post-achievement
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-slate-300">
            <thead>
              <tr className="text-xs uppercase tracking-widest text-slate-400 border-b border-slate-800">
                <th className="py-3 pr-4 text-left font-semibold text-slate-300/90">Tranche</th>
                <th className="py-3 pr-4 text-left font-semibold text-slate-300/90">Timing</th>
                <th className="py-3 pr-4 text-left font-semibold text-slate-300/90">Trigger</th>
                <th className="py-3 pr-4 text-left font-semibold text-slate-300/90">Payment</th>
                <th className="py-3 pr-4 text-left font-semibold text-slate-300/90">Implied Valuation</th>
                <th className="py-3 text-left font-semibold text-slate-300/90">Notes</th>
              </tr>
            </thead>
            <tbody>
              {milestoneRows.map(row => (
                <tr key={row.tranche} className="border-b border-slate-800/80 last:border-transparent">
                  <td className="py-4 pr-4 font-semibold text-white">{row.tranche}</td>
                  <td className="py-4 pr-4 text-slate-400">{row.month}</td>
                  <td className="py-4 pr-4 text-slate-200">{row.trigger}</td>
                  <td className="py-4 pr-4 font-semibold text-white">{row.payment}</td>
                  <td className="py-4 pr-4 text-slate-200">{row.valuation}</td>
                  <td className="py-4 text-slate-400">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <article className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Rocket size={26} className="text-emerald-300" />
            <div>
              <h4 className="text-md font-semibold text-white">Value Creation Flywheel</h4>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Platform Economics</p>
            </div>
          </div>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>• Revenue: $2.5M → $5.6M | CAGR 41%</li>
            <li>• EBITDA Margin: 42% → 56%</li>
            <li>• Tech-enabled revenue mix: 18% → 62%</li>
            <li>• Product suite drives 205 bps fee expansion</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp size={26} className="text-indigo-300" />
            <div>
              <h4 className="text-md font-semibold text-white">Return Profile</h4>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Investor Economics</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
            <div className="rounded-lg border border-indigo-500/40 bg-indigo-900/20 p-4">
              <div className="text-xs uppercase tracking-[0.35em] text-indigo-200 mb-2">MOIC</div>
              <div className="text-2xl font-semibold text-white">10.0x</div>
              <div className="text-xs text-indigo-200/80 mt-1">Base Case | Upside 12.5x</div>
            </div>
            <div className="rounded-lg border border-emerald-500/40 bg-emerald-900/20 p-4">
              <div className="text-xs uppercase tracking-[0.35em] text-emerald-200 mb-2">IRR</div>
              <div className="text-2xl font-semibold text-white">85%</div>
              <div className="text-xs text-emerald-200/80 mt-1">Probability-weighted (55% base)</div>
            </div>
            <div className="rounded-lg border border-slate-700 bg-[#141f36] p-4 col-span-2">
              <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">Entry vs Exit</div>
              <div className="text-lg font-semibold text-white">$6.25M Buy-In → $100M-$120M Exit</div>
              <div className="text-xs text-slate-400 mt-1">2.5× revenue entry; 10-12× revenue fintech exit range</div>
            </div>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Building2 size={26} className="text-amber-300" />
            <div>
              <h4 className="text-md font-semibold text-white">Strategic Buyer Landscape</h4>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Exit Pathways</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 text-sm text-slate-300">
            <div className="rounded-lg border border-amber-400/40 bg-amber-900/20 p-3">
              <div className="font-semibold text-amber-200 mb-1">Fintech Platforms</div>
              <div className="text-xs text-amber-200/80">Robinhood Advisor · SoFi Wealth · Betterment</div>
            </div>
            <div className="rounded-lg border border-blue-400/40 bg-blue-900/20 p-3">
              <div className="font-semibold text-blue-200 mb-1">Crypto Institutions</div>
              <div className="text-xs text-blue-200/80">Coinbase Institutional · Kraken Prime · Galaxy</div>
            </div>
            <div className="rounded-lg border border-purple-400/40 bg-purple-900/20 p-3">
              <div className="font-semibold text-purple-200 mb-1">RIA Rollups</div>
              <div className="text-xs text-purple-200/80">Focus Financial · Mercer · Wealth Enhancement</div>
            </div>
          </div>
        </article>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-200">
          <div className="flex items-start gap-3">
            <Landmark size={32} className="text-blue-300" />
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">Strategic Thesis</div>
              <div className="text-sm text-slate-200/90">
                First institutional-grade, tokenized RIA platform — scarcity value for public fintech acquirers seeking digital asset capabilities.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <LineChart size={32} className="text-emerald-300" />
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">Validation Stack</div>
              <div className="text-sm text-slate-200/90">
                Quarterly third-party valuations · SOC 2 readiness · Big 4 QofE · On-chain metrics reporting.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Rocket size={32} className="text-purple-300" />
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">Exit Window</div>
              <div className="text-sm text-slate-200/90">
                Q2 2026 banker-led process targeting dual-track M&A | SPAC-ready documentation as optionality.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

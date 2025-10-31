import type { ContentSlide } from '../types/slides';

const earnOut = [
  {
    tranche: 'T0 · 16%',
    timing: 'Close',
    trigger: 'Acquisition signing',
    payment: '$1.00M',
    valuation: '$6.25M',
    notes: 'Founder rollover secured · integration kickoff'
  },
  {
    tranche: 'T1 · 20%',
    timing: 'Month 6',
    trigger: '$3.6M revenue · dual custody live',
    payment: '$1.25M',
    valuation: '$7.5M',
    notes: 'Digital asset sleeves reach 15% penetration'
  },
  {
    tranche: 'T2 · 24%',
    timing: 'Month 12',
    trigger: '$4.5M revenue · 24% EBITDA · tokenized LP',
    payment: '$1.50M',
    valuation: '$9.0M',
    notes: 'First external RIA onboarded · Lidya vault scaling'
  },
  {
    tranche: 'T3 · 24%',
    timing: 'Month 18',
    trigger: '$5.6M revenue · 3 RIAs integrated',
    payment: '$1.50M',
    valuation: '$10.5M',
    notes: 'Fintech audit complete · banker mandate issued'
  },
  {
    tranche: 'T4 · 16%',
    timing: 'Month 24',
    trigger: '$7.0M revenue · 28% EBITDA · exit ready',
    payment: '$1.00M',
    valuation: '$12.0M',
    notes: 'Strategic sale to fintech / crypto institution'
  }
];

const buyers = [
  {
    title: 'Fintech Platforms',
    names: ['Robinhood Advisor', 'SoFi Wealth', 'Betterment']
  },
  {
    title: 'Crypto Institutions',
    names: ['Coinbase Institutional', 'Kraken Prime', 'Galaxy Digital']
  },
  {
    title: 'RIA Roll-Ups',
    names: ['Focus Financial', 'Mercer Advisors', 'Wealth Enhancement Group']
  }
];

export const Slide08ExitStrategy: ContentSlide = {
  type: 'content',
  title: 'VIII. EXIT STRATEGY & VISION',
  subtitle: 'Milestone earn-out structure · value creation flywheel · strategic buyer map',
  content: (
    <div className="h-full flex flex-col gap-8 p-6 sm:p-8 md:p-10 lg:p-12 bg-[#0b1424] text-slate-200">
      <section className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm overflow-x-auto">
        <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-3">Milestone-Based Earn-Out</div>
        <table className="min-w-full text-sm text-slate-300">
          <thead>
            <tr className="text-xs uppercase tracking-widest text-slate-400 border-b border-slate-800/80">
              <th className="py-3 pr-4 text-left font-semibold">Tranche</th>
              <th className="py-3 pr-4 text-left font-semibold">Timing</th>
              <th className="py-3 pr-4 text-left font-semibold">Trigger</th>
              <th className="py-3 pr-4 text-left font-semibold">Payment</th>
              <th className="py-3 pr-4 text-left font-semibold">Implied Valuation</th>
              <th className="py-3 text-left font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            {earnOut.map(item => (
              <tr key={item.tranche} className="border-b border-slate-800/60 last:border-transparent">
                <td className="py-4 pr-4 font-semibold text-white">{item.tranche}</td>
                <td className="py-4 pr-4 text-slate-400">{item.timing}</td>
                <td className="py-4 pr-4 text-slate-200">{item.trigger}</td>
                <td className="py-4 pr-4 font-semibold text-white">{item.payment}</td>
                <td className="py-4 pr-4 text-slate-200">{item.valuation}</td>
                <td className="py-4 text-slate-400">{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">MOIC</div>
          <div className="text-3xl font-light text-white">10×</div>
          <div className="text-xs text-slate-400 mt-2">Base case · 12.5× upside</div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">IRR</div>
          <div className="text-3xl font-light text-white">85%</div>
          <div className="text-xs text-slate-400 mt-2">Probability-weighted</div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm text-center">
          <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">Exit Valuation</div>
          <div className="text-lg font-semibold text-white">$100–120M</div>
          <div className="text-xs text-slate-400 mt-2">10–12× revenue fintech comparable range</div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-gradient-to-r from-[#101a32] via-[#142043] to-[#0f1931] p-6 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4 text-sm text-slate-300">
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400">Value Creation Flywheel</div>
            <ul className="space-y-2">
              <li>• Revenue grows from $2.5M to $5.6M (CAGR 41%).</li>
              <li>• EBITDA margin expands from 42% to 56%.</li>
              <li>• Tech-enabled revenue mix jumps from 18% to 62%.</li>
              <li>• Multiple expands from 1.2× to 12× revenue.</li>
            </ul>
            <p className="text-xs text-slate-400">
              First institutional-grade tokenized RIA — scarcity value for public fintechs seeking digital asset
              capabilities.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-[#111b30] p-5 text-sm text-slate-300">
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-3">Strategic Buyer Landscape</div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {buyers.map(group => (
                <div key={group.title} className="bg-[#141f36] border border-slate-700 rounded-xl px-4 py-3">
                  <div className="text-[11px] uppercase tracking-[0.3em] text-slate-400 mb-2">{group.title}</div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {group.names.map(name => (
                      <li key={name}>• {name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

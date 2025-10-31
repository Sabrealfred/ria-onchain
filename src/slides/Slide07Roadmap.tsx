import type { ContentSlide } from '../types/slides';

const phases = [
  {
    phase: 'Phase 1 — Setup & Acquisition',
    timeline: 'Months 0-3',
    milestones: [
      'SPV Tokenized + Lidya vault live',
      'Reg D 506(c) paperwork executed',
      'Sector Analysts purchase close · $1M initial payment'
    ],
    outcome: 'Ownership secured · infrastructure ready for capital deployment'
  },
  {
    phase: 'Phase 2 — Tokenization & Product Launch',
    timeline: 'Months 4-12',
    milestones: [
      'Crypto advisory sleeves launched',
      'DeFi yield marketplace + client portal live',
      'Dual custody (Anchorage + BNY Mellon) operational'
    ],
    outcome: 'Revenue +50% · tech-enabled margin expansion'
  },
  {
    phase: 'Phase 3 — Scale & Exit Preparation',
    timeline: 'Months 12-24',
    milestones: [
      'AUM > $500M · 3 integrated RIAs',
      'Milestone tranches executed (Month 6/12/18/24)',
      'Fintech-grade audit, banker mandate, buyer outreach'
    ],
    outcome: 'Valuation 10–12× revenue · strategic exit window opens'
  }
];

export const Slide07Roadmap: ContentSlide = {
  type: 'content',
  title: 'VII. EXECUTION ROADMAP — 24 MONTHS',
  subtitle: 'Milestones · KPIs · outcomes from formation to strategic exit',
  content: (
    <div className="h-full flex flex-col gap-8 p-6 sm:p-8 md:p-10 lg:p-12 bg-[#0b1424] text-slate-200">
      <section className="rounded-2xl border border-slate-800 bg-gradient-to-r from-[#101a32] via-[#13203e] to-[#0f1931] p-6 shadow-sm">
        <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-4">Timeline</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {phases.map(phase => (
            <div key={phase.phase} className="bg-[#111b30]/80 border border-slate-700 rounded-2xl px-5 py-6 shadow-sm">
              <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">{phase.timeline}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{phase.phase}</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                {phase.milestones.map(item => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <div className="mt-4 text-xs uppercase tracking-[0.3em] text-emerald-300">Outcome</div>
              <p className="text-sm text-slate-200 mt-1">{phase.outcome}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-slate-200">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">Milestone Tranches</div>
            <div className="text-2xl font-light text-white">$6.25M</div>
            <div className="text-xs text-slate-400 mt-2">Month 0/6/12/18/24 earn-out cadence</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">Portfolio Scale</div>
            <div className="text-2xl font-light text-white">$500M+</div>
            <div className="text-xs text-slate-400 mt-2">Target AUM by Month 18</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">Exit Window</div>
            <div className="text-2xl font-light text-white">Q2 2026</div>
            <div className="text-xs text-slate-400 mt-2">Banker-led strategic process</div>
          </div>
        </div>
      </section>
    </div>
  )
};

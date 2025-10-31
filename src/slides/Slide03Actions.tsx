import { Calendar, Target, Rocket, ArrowRight } from 'lucide-react';
import type { ContentSlide } from '../types/slides';

export const Slide03Actions: ContentSlide = {
  type: 'content',
  title: 'IV. EXECUTION ROADMAP',
  subtitle: '24-Month Playbook — Capital Deployment, KPIs & Responsible Teams',
  content: (
    <div className="h-full flex flex-col gap-8 p-6 sm:p-8 md:p-10 lg:p-12 bg-[#0b1424] text-slate-200">
      <section className="relative pl-6">
        <span className="absolute left-2 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-blue-500 via-emerald-500 to-indigo-500" />
        <div className="space-y-8">
        <article className="relative rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
          <span className="absolute -left-[38px] top-8 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/50 bg-blue-600 text-white text-sm font-semibold">
            01
          </span>
          <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-blue-300 mb-2">Weeks 0-8</div>
              <h3 className="text-xl font-semibold text-white">Formation Sprint · $50K Capex</h3>
              <p className="text-sm text-slate-300">Standing up the Delaware LP, dual tokenization rails, and compliance architecture.</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-300">
              <Calendar size={16} />
              <span>Owner: Capital Formation Pod</span>
            </div>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-300">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">Deliverables</div>
                <ul className="space-y-2">
                  <li>• LP / GP entities, LPA, PPM, subscription docs</li>
                  <li>• Tokenized issuance stack live (Plume.org)</li>
                  <li>• Compliance manual, AML/KYC partners onboarded</li>
                </ul>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">KPIs</div>
                <ul className="space-y-2">
                  <li>• Fund legal readiness certificate</li>
                  <li>• Smart-contract audit sign-off</li>
                  <li>• Investor data room + marketing kit</li>
                </ul>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">Financial Impact</div>
                <div className="rounded-lg border border-blue-500/40 bg-blue-900/20 p-3">
                  <div className="text-sm font-semibold text-blue-200">Capital Enablement +$1M</div>
                  <div className="text-xs text-blue-200/80 mt-1">Structures ready to wire initial acquisition payment.</div>
                </div>
              </div>
            </div>
          </article>

          <article className="relative rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
            <span className="absolute -left-[38px] top-8 flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500/50 bg-emerald-600 text-white text-sm font-semibold">
              02
            </span>
            <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-emerald-300 mb-2">Months 2-12</div>
              <h3 className="text-xl font-semibold text-white">Tokenized Raise & Initial Close · $5.0M Capital</h3>
              <p className="text-sm text-slate-300">Rolling closes deliver $1M to sellers and $4M reserved for milestone earn-outs and platform build.</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-emerald-300">
              <Target size={16} />
              <span>Owner: Distribution & Product Squad</span>
            </div>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-300">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">Deliverables</div>
              <ul className="space-y-2">
                <li>• Rolling monthly closes ($5M target)</li>
                <li>• $1M wired to Sector Analysts at closing</li>
                <li>• BTC/ETH core sleeve, DeFi marketplace live</li>
                <li>• Dual custody (BNY + Anchorage) operational</li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">KPIs</div>
              <ul className="space-y-2">
                  <li>• Advisory fee yield: 100 → 135 bps</li>
                  <li>• AUM in digital mandates: $60M</li>
                  <li>• Net new clients: +180 households</li>
                </ul>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">Financial Impact</div>
                <div className="rounded-lg border border-emerald-500/40 bg-emerald-900/20 p-3">
                  <div className="text-sm font-semibold text-emerald-200">Initial Payment +$1.0M</div>
                  <div className="text-xs text-emerald-200/80 mt-1">Remaining $4.0M+ reserved for staged earn-outs & product build.</div>
                </div>
              </div>
            </div>
          </article>

          <article className="relative rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
            <span className="absolute -left-[38px] top-8 flex h-10 w-10 items-center justify-center rounded-full border border-indigo-500/50 bg-indigo-600 text-white text-sm font-semibold">
              03
            </span>
            <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-indigo-300 mb-2">Months 12-24</div>
                <h3 className="text-xl font-semibold text-white">Portfolio Scaling & Exit Prep · $1.1M Capex</h3>
                <p className="text-sm text-slate-300">Apply playbook across acquisitions, validate fintech KPIs, initiate M&A dialogue.</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-indigo-300">
                <Rocket size={16} />
                <span>Owner: Portfolio Ops & Corporate Dev</span>
              </div>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-300">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">Deliverables</div>
                <ul className="space-y-2">
                  <li>• Acquire 2-3 bolt-on RIAs ($12M revenue combined)</li>
                  <li>• Shared services center + automation layer live</li>
                  <li>• Milestone payout governance (Month 6/12/18/24)</li>
                  <li>• Fintech valuation data room, banker mandate</li>
                </ul>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">KPIs</div>
                <ul className="space-y-2">
                  <li>• Revenue run-rate: $5.6M | EBITDA margin: 56%</li>
                  <li>• Tech-enabled revenue mix: 62%</li>
                  <li>• Monthly ARR growth: 6-8%</li>
                  <li>• Earn-out schedule on track ($5.25M remaining)</li>
                </ul>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">Financial Impact</div>
                <div className="rounded-lg border border-indigo-500/40 bg-indigo-900/20 p-3">
                  <div className="text-sm font-semibold text-indigo-200">Value Creation +$1.02M EBITDA</div>
                  <div className="text-xs text-indigo-200/80 mt-1">Triggers 8-12x revenue buyer conversations.</div>
                  <div className="text-xs text-indigo-200/60 mt-1">Final tranche unlock (Month 24) tied to $7M revenue / 28% EBITDA.</div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-slate-200">
          <div className="flex items-center gap-3">
            <ArrowRight size={32} className="text-blue-300" />
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-1">Target Exit Window</div>
              <div className="text-2xl font-semibold text-white">Q2 2026 · Strategic M&A Process Launch</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center text-xs uppercase tracking-[0.35em] text-slate-400">
            <div>
              <div className="text-2xl font-light text-white mb-1">24</div>
              <div>Months</div>
            </div>
            <div>
              <div className="text-2xl font-light text-white mb-1">3</div>
              <div>Phases</div>
            </div>
            <div>
              <div className="text-2xl font-light text-white mb-1">10X</div>
              <div>MOIC Goal</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

import { Calendar, Target, Rocket, ArrowRight } from 'lucide-react';
import type { ContentSlide } from '../types/slides';

export const Slide03Actions: ContentSlide = {
  type: 'content',
  title: 'IV. EXECUTION ROADMAP',
  subtitle: '24-Month Playbook — Capital Deployment, KPIs & Responsible Teams',
  content: (
    <div className="h-full flex flex-col gap-8 p-6 sm:p-8 md:p-10 lg:p-12 pt-28 bg-slate-100">
      <section className="relative pl-6">
        <span className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-emerald-500 to-indigo-500" />
        <div className="space-y-8">
          <article className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="absolute -left-[38px] top-8 flex h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-blue-600 text-white text-sm font-semibold">
              01
            </span>
            <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-blue-600 mb-2">Weeks 0-8</div>
                <h3 className="text-xl font-semibold text-slate-900">Formation Sprint · $125K Capex</h3>
                <p className="text-sm text-slate-600">Standing up the Delaware LP, tokenization rails, and compliance architecture.</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-600">
                <Calendar size={16} />
                <span>Owner: Capital Formation Pod</span>
              </div>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">Deliverables</div>
                <ul className="space-y-2">
                  <li>• LP / GP entities, LPA, PPM, subscription docs</li>
                  <li>• Tokenized issuance stack live (Plume.org)</li>
                  <li>• Compliance manual, AML/KYC partners onboarded</li>
                </ul>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">KPIs</div>
                <ul className="space-y-2">
                  <li>• Fund legal readiness certificate</li>
                  <li>• Smart-contract audit sign-off</li>
                  <li>• Investor data room + marketing kit</li>
                </ul>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">Financial Impact</div>
                <div className="rounded-lg bg-blue-50 border border-blue-100 p-3">
                  <div className="text-sm font-semibold text-blue-700">Revenue Capacity +$560K</div>
                  <div className="text-xs text-blue-600 mt-1">Immediate ability to raise first $1M close.</div>
                </div>
              </div>
            </div>
          </article>

          <article className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="absolute -left-[38px] top-8 flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 bg-emerald-600 text-white text-sm font-semibold">
              02
            </span>
            <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-2">Months 2-12</div>
                <h3 className="text-xl font-semibold text-slate-900">Tokenized Raise & Core Build · $1.0M Capex</h3>
                <p className="text-sm text-slate-600">Scaling capital, launching digital asset products, modernizing operations.</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-emerald-600">
                <Target size={16} />
                <span>Owner: Distribution & Product Squad</span>
              </div>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">Deliverables</div>
                <ul className="space-y-2">
                  <li>• Rolling monthly closes ($5M target)</li>
                  <li>• BTC/ETH core sleeve, DeFi marketplace live</li>
                  <li>• Dual custody (BNY + Anchorage) operational</li>
                </ul>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">KPIs</div>
                <ul className="space-y-2">
                  <li>• Advisory fee yield: 100 → 135 bps</li>
                  <li>• AUM in digital mandates: $60M</li>
                  <li>• Net new clients: +180 households</li>
                </ul>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">Financial Impact</div>
                <div className="rounded-lg bg-emerald-50 border border-emerald-100 p-3">
                  <div className="text-sm font-semibold text-emerald-700">Revenue Expansion +$1.57M</div>
                  <div className="text-xs text-emerald-600 mt-1">Run-rate revenue $4.1M by Month 12.</div>
                </div>
              </div>
            </div>
          </article>

          <article className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="absolute -left-[38px] top-8 flex h-10 w-10 items-center justify-center rounded-full border border-indigo-200 bg-indigo-600 text-white text-sm font-semibold">
              03
            </span>
            <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-indigo-600 mb-2">Months 12-24</div>
                <h3 className="text-xl font-semibold text-slate-900">Portfolio Scaling & Exit Prep · $1.1M Capex</h3>
                <p className="text-sm text-slate-600">Apply playbook across acquisitions, validate fintech KPIs, initiate M&A dialogue.</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-indigo-600">
                <Rocket size={16} />
                <span>Owner: Portfolio Ops & Corporate Dev</span>
              </div>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">Deliverables</div>
                <ul className="space-y-2">
                  <li>• Acquire 2-3 bolt-on RIAs ($12M revenue combined)</li>
                  <li>• Shared services center + automation layer live</li>
                  <li>• Fintech valuation data room, banker mandate</li>
                </ul>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">KPIs</div>
                <ul className="space-y-2">
                  <li>• Revenue run-rate: $5.6M | EBITDA margin: 56%</li>
                  <li>• Tech-enabled revenue mix: 62%</li>
                  <li>• Monthly ARR growth: 6-8%</li>
                </ul>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">Financial Impact</div>
                <div className="rounded-lg bg-indigo-50 border border-indigo-100 p-3">
                  <div className="text-sm font-semibold text-indigo-700">Value Creation +$1.02M EBITDA</div>
                  <div className="text-xs text-indigo-600 mt-1">Triggers 8-12x revenue buyer conversations.</div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-slate-900 text-white p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-3">
            <ArrowRight size={32} className="text-blue-300" />
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-1">Target Exit Window</div>
              <div className="text-2xl font-semibold">Q2 2026 · Strategic M&A Process Launch</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center text-xs uppercase tracking-[0.25em] text-slate-300">
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

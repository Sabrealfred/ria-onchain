import { Users, DollarSign, MapPin, Database, Layers } from 'lucide-react';
import type { ContentSlide } from '../types/slides';

export const Slide01CurrentState: ContentSlide = {
  type: 'content',
  title: 'II. CURRENT STATE',
  subtitle: 'Sector Analysts, LLC — Baseline Financials, Operations & Constraints',
  content: (
    <div className="h-full flex flex-col gap-8 p-6 sm:p-8 md:p-10 lg:p-12 bg-[#0b1424] text-slate-200">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-blue-500/20 border border-blue-500/50 text-blue-200 p-3">
                <DollarSign size={22} />
              </div>
              <h3 className="text-sm uppercase tracking-[0.35em] text-slate-400">Revenue</h3>
            </div>
            <span className="text-xs text-slate-500">2025E</span>
          </div>
          <div className="text-3xl font-semibold text-white mb-1">$2.5M</div>
          <div className="text-sm text-slate-300 mb-4">YTD (Oct): $2.13M | QoQ growth 11%</div>
          <div className="text-xs text-slate-400 border-t border-slate-800 pt-3">
            Gross Margin 89.6% · EBITDA $1.8M (FY24 P&L)
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-sky-500/20 border border-sky-500/50 text-sky-200 p-3">
                <Database size={22} />
              </div>
              <h3 className="text-sm uppercase tracking-[0.35em] text-slate-400">AUM</h3>
            </div>
            <span className="text-xs text-slate-500">Positions · 28 Oct 2025</span>
          </div>
          <div className="text-3xl font-semibold text-white mb-1">$269.5M</div>
          <div className="text-sm text-slate-300 mb-4">
            912 custodial positions · Top holdings: APD, AMZN, MSFT, PLTR
          </div>
          <div className="text-xs text-slate-400 border-t border-slate-800 pt-3">
            Single custodian · No digital asset allocation
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-emerald-500/20 border border-emerald-500/50 text-emerald-200 p-3">
                <Users size={22} />
              </div>
              <h3 className="text-sm uppercase tracking-[0.35em] text-slate-400">Client Base</h3>
            </div>
            <span className="text-xs text-slate-500">ADV · CRM export</span>
          </div>
          <div className="text-3xl font-semibold text-white mb-1">~1,000</div>
          <div className="text-sm text-slate-300 mb-4">
            800 advisory accounts · HNW/UHNW families · Institutional carve-outs
          </div>
          <div className="text-xs text-slate-400 border-t border-slate-800 pt-3">
            67% revenue concentration (APAM) · 10-year client tenure
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-amber-500/20 border border-amber-500/50 text-amber-200 p-3">
                <Layers size={22} />
              </div>
              <h3 className="text-sm uppercase tracking-[0.35em] text-slate-400">Valuation</h3>
            </div>
            <span className="text-xs text-slate-500">Traditional multiples</span>
          </div>
          <div className="text-3xl font-semibold text-white mb-1">$2.5-3.8M</div>
          <div className="text-sm text-slate-300 mb-4">
            1.0-1.5x revenue · Service business multiple ceiling reached
          </div>
          <div className="text-xs text-slate-400 border-t border-slate-800 pt-3">
            No technology premium · Earn-out optionality limited
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <MapPin size={24} className="text-blue-300" />
            <div>
              <h3 className="text-lg font-semibold text-white">Operating Footprint</h3>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Allentown · Pennsylvania</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
            <div>
              <div className="font-semibold text-white mb-1">Platform</div>
              <ul className="space-y-1">
                <li>• Traditional advisory stack (no automation)</li>
                <li>• Portfolio review cycle: quarterly</li>
                <li>• Manual performance reporting</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-white mb-1">Infrastructure Gaps</div>
              <ul className="space-y-1">
                <li>• Legacy CRM, spreadsheets for pipelines</li>
                <li>• No API connectivity into custodians</li>
                <li>• Billing & compliance handled offline</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-amber-400/40 bg-[#221510] p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-amber-200 mb-3">Constraint Summary</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-amber-100">
            <div className="space-y-2">
              <div className="font-semibold uppercase text-xs tracking-[0.25em] text-amber-300">Structural</div>
              <ul className="space-y-1">
                <li>• Single custodian — no redundancy</li>
                <li>• Assets siloed by account, no household view</li>
                <li>• Limited fee compression headroom</li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="font-semibold uppercase text-xs tracking-[0.25em] text-amber-300">Product</div>
              <ul className="space-y-1">
                <li>• No crypto, tokenization, or yield products</li>
                <li>• Ill-suited for HNW digital asset demand</li>
                <li>• Cannot price at fintech multiples</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 text-xs text-amber-200 border-t border-amber-400/40 pt-3">
            Result: growth limited to linear advisor hiring & traditional M&A (4-6x EBITDA ceiling).
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-white mb-4">Baseline Investment Thesis</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-300">
          <div className="border border-slate-700 rounded-lg p-4 bg-[#141f36]">
            <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">Acquisition Case</div>
            <div>Buy-in at 1.2x revenue ($3.0M) for 89% gross margin platform with entrenched clients.</div>
          </div>
          <div className="border border-slate-700 rounded-lg p-4 bg-[#141f36]">
            <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">Transformation Gap</div>
            <div>Zero web3 stack, manual operations, and custodial lock-in create immediate uplift levers.</div>
          </div>
          <div className="border border-slate-700 rounded-lg p-4 bg-[#141f36]">
            <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">Valuation Upside</div>
            <div>Re-rate to 8-12x revenue once crypto advisory + tokenized products are live and scaling.</div>
          </div>
        </div>
      </section>
    </div>
  )
};

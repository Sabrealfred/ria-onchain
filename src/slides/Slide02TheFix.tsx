import { TrendingUp, Coins, Shield, Workflow } from 'lucide-react';
import type { ContentSlide } from '../types/slides';

export const Slide02TheFix: ContentSlide = {
  type: 'content',
  title: 'III. THE TRANSFORMATION',
  subtitle: 'Twelve High-Conviction Levers — From Legacy RIA to Prime On-Chain Platform',
  content: (
    <div className="h-full flex flex-col gap-8 p-6 sm:p-8 md:p-10 lg:p-12 pt-28 bg-slate-100">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <div className="rounded-lg bg-blue-900 text-white p-3">
              <Coins size={28} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Tokenization & Capital Stack</h3>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Catalyst · Weeks 0-8</p>
            </div>
          </div>
          <ul className="space-y-3 text-sm text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">1. ERC-3643 Issuance</span> — LP tokens with embedded compliance, secondary-ready.
            </li>
            <li>
              <span className="font-semibold text-slate-900">2. RWA Vault</span> — Plume.org integration for tokenized Treasuries & credit notes.
            </li>
            <li>
              <span className="font-semibold text-slate-900">3. Automated Waterfall</span> — Smart-contract distributions, LP portal, cap table.
            </li>
          </ul>
          <div className="mt-5 rounded-lg bg-blue-50 border border-blue-100 p-4 text-xs text-blue-900">
            Outcome: Fund moves from static partnership docs to programmable capital market infrastructure.
          </div>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <div className="rounded-lg bg-emerald-900 text-white p-3">
              <TrendingUp size={28} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Crypto & Yield Advisory Stack</h3>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Revenue Lift · Months 3-12</p>
            </div>
          </div>
          <ul className="space-y-3 text-sm text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">4. BTC/ETH Core Sleeve</span> — 5-15% advisory allocation, SMA + custody ready.
            </li>
            <li>
              <span className="font-semibold text-slate-900">5. DeFi Yield Marketplace</span> — Curated stablecoin, staking, restaking products.
            </li>
            <li>
              <span className="font-semibold text-slate-900">6. Tax Alpha Engine</span> — Automated gain harvesting, crypto wash sale compliance.
            </li>
          </ul>
          <div className="mt-5 rounded-lg bg-emerald-50 border border-emerald-100 p-4 text-xs text-emerald-900">
            Outcome: Elevate advisory fees from 100 bps to 140-160 bps with differentiated product.
          </div>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <div className="rounded-lg bg-indigo-900 text-white p-3">
              <Workflow size={28} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Operating System & Automation</h3>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Margin Expansion · Months 6-18</p>
            </div>
          </div>
          <ul className="space-y-3 text-sm text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">7. Unified Data Spine</span> — Real-time AUM analytics, API aggregation, AI reporting.
            </li>
            <li>
              <span className="font-semibold text-slate-900">8. Advisor Workbench</span> — Automated onboarding, billing, compliance workflows.
            </li>
            <li>
              <span className="font-semibold text-slate-900">9. Client Portal 2.0</span> — On-chain + TradFi positions, scenario planning, messaging.
            </li>
          </ul>
          <div className="mt-5 rounded-lg bg-indigo-50 border border-indigo-100 p-4 text-xs text-indigo-900">
            Outcome: Reduce SG&A from 32% to sub-20%, enabling platform-level scalability.
          </div>
        </article>

        <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <div className="rounded-lg bg-amber-900 text-white p-3">
              <Shield size={28} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Regulatory & Risk Architecture</h3>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Defense · Always-On</p>
            </div>
          </div>
          <ul className="space-y-3 text-sm text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">10. Dual Custody</span> — Anchorage + BNY Mellon for resilience and product breadth.
            </li>
            <li>
              <span className="font-semibold text-slate-900">11. Compliance Automation</span> — Surveillance, trade review, token eligibility.
            </li>
            <li>
              <span className="font-semibold text-slate-900">12. Risk & Insurance Stack</span> — SOC 2 readiness, crime/D&O, smart contract coverage.
            </li>
          </ul>
          <div className="mt-5 rounded-lg bg-amber-50 border border-amber-100 p-4 text-xs text-amber-900">
            Outcome: SEC-ready framework that de-risks exits to public fintech platforms.
          </div>
        </article>
      </section>

      <section className="rounded-xl border border-slate-200 bg-slate-900 text-white p-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">Revenue Expansion</div>
            <div className="text-3xl font-light">$2.5M → $5.6M</div>
            <div className="text-xs text-slate-400 mt-2">+205 bps blended fee yield by Month 24</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">Investment</div>
            <div className="text-3xl font-light">$2.225M</div>
            <div className="text-xs text-slate-400 mt-2">Phased capex aligned to roadmap</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-2">Valuation Re-Rate</div>
            <div className="text-3xl font-light">1.2x → 9.5x</div>
            <div className="text-xs text-slate-400 mt-2">Fintech comparables (Anchorage, Eaglebrook)</div>
          </div>
        </div>
      </section>
    </div>
  )
};

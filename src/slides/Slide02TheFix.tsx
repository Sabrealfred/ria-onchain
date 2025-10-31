import { TrendingUp, Coins, Shield, Workflow } from 'lucide-react';
import type { ContentSlide } from '../types/slides';

export const Slide02TheFix: ContentSlide = {
  type: 'content',
  title: 'III. THE TRANSFORMATION',
  subtitle: 'Twelve High-Conviction Levers — From Legacy RIA to Prime On-Chain Platform',
  content: (
    <div className="h-full flex flex-col gap-8 p-6 sm:p-8 md:p-10 lg:p-12 bg-[#0b1424] text-slate-200">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <article className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <div className="rounded-lg bg-blue-500/20 border border-blue-500/50 text-blue-200 p-3">
              <Coins size={26} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Tokenization & Capital Stack</h3>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Catalyst · Weeks 0-8</p>
            </div>
          </div>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>
              <span className="font-semibold text-white">1. ERC-3643 Issuance</span> — LP tokens with embedded compliance, secondary-ready.
            </li>
            <li>
              <span className="font-semibold text-white">2. RWA Vault</span> — Plume.org integration for tokenized Treasuries & credit notes.
            </li>
            <li>
              <span className="font-semibold text-white">3. Automated Waterfall</span> — Smart-contract distributions, LP portal, cap table.
            </li>
          </ul>
          <div className="mt-5 rounded-lg border border-blue-500/40 bg-blue-900/20 p-4 text-xs text-blue-200">
            Outcome: Fund moves from static partnership docs to programmable capital market infrastructure.
          </div>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <div className="rounded-lg bg-emerald-500/20 border border-emerald-500/50 text-emerald-200 p-3">
              <TrendingUp size={26} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Crypto & Yield Advisory Stack</h3>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Revenue Lift · Months 3-12</p>
            </div>
          </div>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>
              <span className="font-semibold text-white">4. BTC/ETH Core Sleeve</span> — 5-15% advisory allocation, SMA + custody ready.
            </li>
            <li>
              <span className="font-semibold text-white">5. DeFi Yield Marketplace</span> — Curated stablecoin, staking, restaking products.
            </li>
            <li>
              <span className="font-semibold text-white">6. Tax Alpha Engine</span> — Automated gain harvesting, crypto wash sale compliance.
            </li>
          </ul>
          <div className="mt-5 rounded-lg border border-emerald-500/40 bg-emerald-900/20 p-4 text-xs text-emerald-200">
            Outcome: Elevate advisory fees from 100 bps to 140-160 bps with differentiated product.
          </div>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <div className="rounded-lg bg-indigo-500/20 border border-indigo-500/50 text-indigo-200 p-3">
              <Workflow size={26} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Operating System & Automation</h3>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Margin Expansion · Months 6-18</p>
            </div>
          </div>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>
              <span className="font-semibold text-white">7. Unified Data Spine</span> — Real-time AUM analytics, API aggregation, AI reporting.
            </li>
            <li>
              <span className="font-semibold text-white">8. Advisor Workbench</span> — Automated onboarding, billing, compliance workflows.
            </li>
            <li>
              <span className="font-semibold text-white">9. Client Portal 2.0</span> — On-chain + TradFi positions, scenario planning, messaging.
            </li>
          </ul>
          <div className="mt-5 rounded-lg border border-indigo-500/40 bg-indigo-900/20 p-4 text-xs text-indigo-200">
            Outcome: Reduce SG&A from 32% to sub-20%, enabling platform-level scalability.
          </div>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <div className="rounded-lg bg-amber-500/20 border border-amber-500/50 text-amber-200 p-3">
              <Shield size={26} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Regulatory & Risk Architecture</h3>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Defense · Always-On</p>
            </div>
          </div>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>
              <span className="font-semibold text-white">10. Dual Custody</span> — Anchorage + BNY Mellon for resilience and product breadth.
            </li>
            <li>
              <span className="font-semibold text-white">11. Compliance Automation</span> — Surveillance, trade review, token eligibility.
            </li>
            <li>
              <span className="font-semibold text-white">12. Risk & Insurance Stack</span> — SOC 2 readiness, crime/D&O, smart contract coverage.
            </li>
          </ul>
          <div className="mt-5 rounded-lg border border-amber-500/40 bg-amber-900/20 p-4 text-xs text-amber-200">
            Outcome: SEC-ready framework that de-risks exits to public fintech platforms.
          </div>
        </article>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-slate-200">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">Revenue Expansion</div>
            <div className="text-3xl font-light text-white">$2.5M → $5.6M</div>
            <div className="text-xs text-slate-400 mt-2">+205 bps blended fee yield by Month 24</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">Investment</div>
            <div className="text-3xl font-light text-white">$2.225M</div>
            <div className="text-xs text-slate-400 mt-2">Phased capex aligned to roadmap</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">Valuation Re-Rate</div>
            <div className="text-3xl font-light text-white">1.2x → 9.5x</div>
            <div className="text-xs text-slate-400 mt-2">Fintech comparables (Anchorage, Eaglebrook)</div>
          </div>
        </div>
      </section>
    </div>
  )
};

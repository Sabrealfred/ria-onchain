import { CheckCircle, ArrowRight, Rocket, Target } from 'lucide-react';
import type { ContentSlide } from '../types/slides';

export const Slide03Actions: ContentSlide = {
  type: 'content',
  title: 'III. ACTIONS',
  subtitle: '18-Month Transformation Roadmap — Phased deployment: Platform → Assets → Scale',
  content: (
    <div className="h-full flex flex-col p-4 sm:p-6 md:p-8 lg:p-12 pt-24 md:pt-28 lg:pt-32">
      {/* Timeline */}
      <div className="space-y-4 flex-1 overflow-y-auto">
        {/* Phase 1 */}
        <div className="border border-slate-200 bg-white">
          <div className="bg-slate-900 text-white px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div className="flex-1">
              <h3 className="text-sm font-semibold uppercase tracking-wide">Phase 1: Foundation</h3>
              <p className="text-xs text-slate-400 mt-1">Months 0-6 • Platform Build & Day-1 Revenue</p>
            </div>
            <div className="text-left sm:text-right">
              <div className="text-xs text-slate-400">Investment</div>
              <div className="text-lg sm:text-xl font-light">$2-3M</div>
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-900 mb-3">Technology</h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex gap-2"><CheckCircle className="text-green-600 flex-shrink-0" size={14} /><span>FPGA infrastructure deployment</span></li>
                  <li className="flex gap-2"><CheckCircle className="text-green-600 flex-shrink-0" size={14} /><span>Custody integration (MPC + institutional)</span></li>
                  <li className="flex gap-2"><CheckCircle className="text-green-600 flex-shrink-0" size={14} /><span>PMS platform MVP (NAV, compliance, risk)</span></li>
                  <li className="flex gap-2"><CheckCircle className="text-green-600 flex-shrink-0" size={14} /><span>Exchange connectivity (CEX + DEX)</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-900 mb-3">Operations</h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex gap-2"><CheckCircle className="text-green-600 flex-shrink-0" size={14} /><span>SRO acquisition close ($2M)</span></li>
                  <li className="flex gap-2"><CheckCircle className="text-green-600 flex-shrink-0" size={14} /><span>Existing $60M AUM transfer</span></li>
                  <li className="flex gap-2"><CheckCircle className="text-green-600 flex-shrink-0" size={14} /><span>Team expansion: CTO, quant team (3)</span></li>
                  <li className="flex gap-2"><CheckCircle className="text-green-600 flex-shrink-0" size={14} /><span>Banking relationships upgrade</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-900 mb-3">Revenue Activation</h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex gap-2"><Target className="text-blue-600 flex-shrink-0" size={14} /><span>$0.9M mgmt fees (Day-1)</span></li>
                  <li className="flex gap-2"><Target className="text-blue-600 flex-shrink-0" size={14} /><span>Deploy 10% AUM to HFT strategies</span></li>
                  <li className="flex gap-2"><Target className="text-blue-600 flex-shrink-0" size={14} /><span>LOI pipeline conversion (40-60%)</span></li>
                  <li className="flex gap-2"><Target className="text-blue-600 flex-shrink-0" size={14} /><span>Target: $1.5-1.8M Year 1 revenue</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="border border-slate-200 bg-white">
          <div className="bg-blue-900 text-white px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div className="flex-1">
              <h3 className="text-sm font-semibold uppercase tracking-wide">Phase 2: Expansion</h3>
              <p className="text-xs text-blue-200 mt-1">Months 6-12 • Asset Class Diversification & Revenue Scaling</p>
            </div>
            <div className="text-left sm:text-right">
              <div className="text-xs text-blue-200">Target AUM</div>
              <div className="text-lg sm:text-xl font-light">$80-120M</div>
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-900 mb-3">Asset Expansion</h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex gap-2"><ArrowRight className="text-blue-600 flex-shrink-0" size={14} /><span>Launch digital asset custody product</span></li>
                  <li className="flex gap-2"><ArrowRight className="text-blue-600 flex-shrink-0" size={14} /><span>Tokenized securities offerings (RWA)</span></li>
                  <li className="flex gap-2"><ArrowRight className="text-blue-600 flex-shrink-0" size={14} /><span>DeFi yield strategies (LPs, staking)</span></li>
                  <li className="flex gap-2"><ArrowRight className="text-blue-600 flex-shrink-0" size={14} /><span>OTC desk for large-block execution</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-900 mb-3">Platform Product</h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex gap-2"><ArrowRight className="text-blue-600 flex-shrink-0" size={14} /><span>White-label PMS beta launch</span></li>
                  <li className="flex gap-2"><ArrowRight className="text-blue-600 flex-shrink-0" size={14} /><span>Client portal with real-time analytics</span></li>
                  <li className="flex gap-2"><ArrowRight className="text-blue-600 flex-shrink-0" size={14} /><span>API access for institutional integrations</span></li>
                  <li className="flex gap-2"><ArrowRight className="text-blue-600 flex-shrink-0" size={14} /><span>Compliance dashboard automation</span></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-900 mb-3">Commercial Scale</h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex gap-2"><Target className="text-purple-600 flex-shrink-0" size={14} /><span>2-3 PMS white-label clients</span></li>
                  <li className="flex gap-2"><Target className="text-purple-600 flex-shrink-0" size={14} /><span>Performance fees from HFT strategies</span></li>
                  <li className="flex gap-2"><Target className="text-purple-600 flex-shrink-0" size={14} /><span>Transaction revenue from custody/OTC</span></li>
                  <li className="flex gap-2"><Target className="text-purple-600 flex-shrink-0" size={14} /><span>Target: $3.2-3.8M Year 2 revenue</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="border border-purple-200 bg-purple-50">
          <div className="bg-purple-900 text-white px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div className="flex-1">
              <h3 className="text-sm font-semibold uppercase tracking-wide">Phase 3: Scale</h3>
              <p className="text-xs text-purple-200 mt-1">Months 12-18 • Prime RIA On-Chain Positioning</p>
            </div>
            <div className="text-left sm:text-right">
              <div className="text-xs text-purple-200">Target AUM</div>
              <div className="text-lg sm:text-xl font-light">$150-200M</div>
            </div>
          </div>
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-xs text-slate-700">
              <div className="space-y-2">
                <div className="flex gap-2"><Rocket className="text-purple-600 flex-shrink-0" size={14} /><span className="font-semibold">Institutional partnerships (5-8 family offices, fund-of-funds)</span></div>
                <div className="flex gap-2"><Rocket className="text-purple-600 flex-shrink-0" size={14} /><span className="font-semibold">Full-suite prime services: custody, execution, financing, reporting</span></div>
              </div>
              <div className="space-y-2">
                <div className="flex gap-2"><Rocket className="text-purple-600 flex-shrink-0" size={14} /><span className="font-semibold">SaaS platform commercial launch (10-15 clients)</span></div>
                <div className="flex gap-2"><Rocket className="text-purple-600 flex-shrink-0" size={14} /><span className="font-semibold">Series A readiness: $5-7M revenue run-rate, 50-60% EBITDA margins</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

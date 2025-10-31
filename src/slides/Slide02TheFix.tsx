import { Zap, Network, DollarSign } from 'lucide-react';
import type { ContentSlide } from '../types/slides';

export const Slide02TheFix: ContentSlide = {
  type: 'content',
  title: 'II. THE FIX',
  subtitle: 'Fintech Transformation Blueprint — From traditional RIA → On-chain prime services platform',
  content: (
    <div className="h-full flex flex-col p-4 sm:p-6 md:p-8 lg:p-12 pt-24 md:pt-28 lg:pt-32">
      {/* Transformation Framework */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
        <div className="border border-green-200 bg-green-50">
          <div className="bg-green-600 text-white p-3 sm:p-4">
            <Zap className="mb-2" size={20} />
            <h3 className="text-xs font-semibold uppercase tracking-wide">Technology Layer</h3>
          </div>
          <div className="p-4 sm:p-5 space-y-3 text-xs sm:text-sm text-slate-700">
            <div>
              <div className="font-semibold text-slate-900 mb-1">FPGA Execution Engine</div>
              <div className="text-xs text-slate-600">Sub-120ns latency HFT infrastructure for algorithmic strategies and market making</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900 mb-1">On-Chain Integration</div>
              <div className="text-xs text-slate-600">MPC wallets, DEX connectivity, bridge infrastructure for cross-chain operations</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900 mb-1">Automated PMS</div>
              <div className="text-xs text-slate-600">Portfolio management system with real-time NAV, risk analytics, and compliance monitoring</div>
            </div>
          </div>
        </div>

        <div className="border border-blue-200 bg-blue-50">
          <div className="bg-blue-600 text-white p-3 sm:p-4">
            <Network className="mb-2" size={20} />
            <h3 className="text-xs font-semibold uppercase tracking-wide">Asset Expansion</h3>
          </div>
          <div className="p-4 sm:p-5 space-y-3 text-xs sm:text-sm text-slate-700">
            <div>
              <div className="font-semibold text-slate-900 mb-1">Digital Asset Custody</div>
              <div className="text-xs text-slate-600">Institutional-grade crypto custody with insurance and segregation</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900 mb-1">Tokenized Securities</div>
              <div className="text-xs text-slate-600">RWA exposure: treasuries, credit, real estate on-chain</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900 mb-1">DeFi Integration</div>
              <div className="text-xs text-slate-600">Yield strategies, liquidity provision, staking, and governance participation</div>
            </div>
          </div>
        </div>

        <div className="border border-purple-200 bg-purple-50">
          <div className="bg-purple-600 text-white p-3 sm:p-4">
            <DollarSign className="mb-2" size={20} />
            <h3 className="text-xs font-semibold uppercase tracking-wide">Revenue Diversification</h3>
          </div>
          <div className="p-4 sm:p-5 space-y-3 text-xs sm:text-sm text-slate-700">
            <div>
              <div className="font-semibold text-slate-900 mb-1">Performance Fees</div>
              <div className="text-xs text-slate-600">20% carry on HFT and alpha strategies (2+20 structure)</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900 mb-1">SaaS Platform Fees</div>
              <div className="text-xs text-slate-600">White-label PMS licensing to other RIAs and family offices</div>
            </div>
            <div>
              <div className="font-semibold text-slate-900 mb-1">Transaction Revenue</div>
              <div className="text-xs text-slate-600">Spread capture on custody, OTC execution, and liquidity services</div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Creation Mechanics */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-lg flex-1 flex items-center">
        <div className="w-full">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300 mb-6">Value Creation Mechanics</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="border-l-2 border-green-500 pl-4">
              <div className="text-xl sm:text-2xl font-light mb-1">3-5x</div>
              <div className="text-xs text-slate-400 uppercase tracking-wide">Revenue Multiple Expansion</div>
              <div className="text-xs text-slate-500 mt-2">From traditional RIA (1.0-1.5x) to fintech platform (3-5x)</div>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <div className="text-xl sm:text-2xl font-light mb-1">5x</div>
              <div className="text-xs text-slate-400 uppercase tracking-wide">Revenue Growth</div>
              <div className="text-xs text-slate-500 mt-2">Performance fees + SaaS + transaction revenue streams</div>
            </div>
            <div className="border-l-2 border-purple-500 pl-4">
              <div className="text-xl sm:text-2xl font-light mb-1">10x</div>
              <div className="text-xs text-slate-400 uppercase tracking-wide">Total Valuation Uplift</div>
              <div className="text-xs text-slate-500 mt-2">Combined multiple expansion + revenue growth</div>
            </div>
            <div className="border-l-2 border-orange-500 pl-4">
              <div className="text-xl sm:text-2xl font-light mb-1">70%+</div>
              <div className="text-xs text-slate-400 uppercase tracking-wide">Gross Margin Profile</div>
              <div className="text-xs text-slate-500 mt-2">Software-enabled operations with automated workflows</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

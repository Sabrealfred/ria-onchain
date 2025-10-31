import { Shield, Zap, Network, CheckCircle } from 'lucide-react';
import type { SlideDefinition } from '../types/slides';

export const Slide05Vision: SlideDefinition = {
  type: 'title',
  content: (
    <div className="h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-12 sm:mb-16">
        <div>
          <div className="text-xs uppercase tracking-widest text-slate-400 mb-1">CONFIDENTIAL</div>
          <div className="text-[10px] text-slate-500">For Discussion Purposes Only</div>
        </div>
        <div className="text-left sm:text-right">
          <div className="text-xs text-slate-400">October 2025</div>
        </div>
      </div>

      {/* Main Title */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="inline-block">
          <div className="text-[11px] uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4">V. THE VISION</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 tracking-tight">
            THE PRIME RIA<br/>ON-CHAIN
          </h1>
          <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl font-light text-slate-300 max-w-3xl mx-auto">
            Where institutional finance meets blockchain infrastructure
          </p>
        </div>
      </div>

      {/* Value Proposition Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
        <div className="border border-slate-700 bg-slate-800/50 p-4 sm:p-6 rounded-lg">
          <Shield className="text-blue-400 mb-4" size={32} />
          <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wide mb-3">Regulated Foundation</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            FINMA + CSSF licensing providing institutional trust and compliance infrastructure that competitors spend 3+ years building
          </p>
        </div>

        <div className="border border-slate-700 bg-slate-800/50 p-4 sm:p-6 rounded-lg">
          <Zap className="text-green-400 mb-4" size={32} />
          <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wide mb-3">Technology Edge</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Sub-120ns FPGA execution, on-chain integration, and automated PMS delivering fintech-grade operational leverage
          </p>
        </div>

        <div className="border border-slate-700 bg-slate-800/50 p-4 sm:p-6 rounded-lg">
          <Network className="text-purple-400 mb-4" size={32} />
          <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wide mb-3">Multi-Asset Access</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Traditional securities + digital assets + DeFi strategies unified under single institutional-grade custody and reporting
          </p>
        </div>
      </div>

      {/* Investment Thesis */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 sm:p-8 mb-8 sm:mb-12">
        <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-blue-400 mb-4 sm:mb-6">Investment Thesis Summary</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={18} />
              <div>
                <div className="font-semibold mb-1 text-sm sm:text-base">Rare Market Entry</div>
                <div className="text-xs sm:text-sm text-slate-300">$60M AUM + Swiss/Luxembourg licensing acquired for $2M vs. $5M+ and 24-36 months to build organically</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={18} />
              <div>
                <div className="font-semibold mb-1 text-sm sm:text-base">Immediate Revenue</div>
                <div className="text-xs sm:text-sm text-slate-300">$0.9M Day-1 management fees scaling to $4.5M Year 2 through performance fees, SaaS, and transaction revenue</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={18} />
              <div>
                <div className="font-semibold mb-1 text-sm sm:text-base">Technology Moat</div>
                <div className="text-xs sm:text-sm text-slate-300">FPGA infrastructure + on-chain integration creating defensible competitive advantage in institutional digital asset space</div>
              </div>
            </div>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={18} />
              <div>
                <div className="font-semibold mb-1 text-sm sm:text-base">Proven Team</div>
                <div className="text-xs sm:text-sm text-slate-300">$10B+ institutional trading experience, $300M AUM management, 3.6x TVL growth track record</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={18} />
              <div>
                <div className="font-semibold mb-1 text-sm sm:text-base">Multiple Exit Paths</div>
                <div className="text-xs sm:text-sm text-slate-300">Series A ($12-18M), strategic acquisition ($18-25M), or HFT vertical integration ($40-50M) within 18-24 months</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={18} />
              <div>
                <div className="font-semibold mb-1 text-sm sm:text-base">10X Value Creation</div>
                <div className="text-xs sm:text-sm text-slate-300">5X revenue growth + 3X multiple expansion = $15-50M exit from $1.1M current valuation on $4-6M investment</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="border-t border-slate-700 pt-6 sm:pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-8">
        <div>
          <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">Investment Opportunity</div>
          <div className="text-2xl sm:text-3xl font-light">$2-5M Pre-Seed Round</div>
          <div className="text-xs sm:text-sm text-slate-400 mt-2">Positioning: Lead or strategic co-investor</div>
        </div>
        <div className="text-left lg:text-right">
          <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">Contact</div>
          <div className="text-base sm:text-lg font-light">Mira Labs Capital Formation</div>
          <div className="text-xs sm:text-sm text-slate-400 mt-2">New York • Luzern • Luxembourg • Singapore</div>
        </div>
      </div>
    </div>
  )
};

import { ArrowRight } from 'lucide-react';
import type { ContentSlide } from '../types/slides';

export const Slide04Results: ContentSlide = {
  type: 'content',
  title: 'IV. RESULTS',
  subtitle: '10X Valuation Creation — 5X revenue growth + 3X multiple expansion = fintech-grade exit',
  content: (
    <div className="h-full flex flex-col p-4 sm:p-6 md:p-8 lg:p-12 pt-24 md:pt-28 lg:pt-32 overflow-y-auto">
      {/* Valuation Bridge */}
      <div className="mb-6 lg:mb-8">
        <div className="bg-gradient-to-r from-red-50 via-orange-50 to-green-50 p-6 sm:p-8 rounded-lg border border-slate-200">
          <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-900 mb-4 sm:mb-6">Valuation Bridge Analysis</h3>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
            {/* Starting Point */}
            <div className="text-center w-full lg:w-auto">
              <div className="bg-red-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg">
                <div className="text-xs uppercase tracking-wide mb-2">Current State</div>
                <div className="text-2xl sm:text-3xl font-light">$1.1M</div>
                <div className="text-xs text-red-200 mt-2">Traditional RIA</div>
              </div>
              <div className="mt-3 sm:mt-4 text-xs text-slate-600">
                <div>$0.9M revenue</div>
                <div>@ 1.2x multiple</div>
              </div>
            </div>

            <ArrowRight className="text-slate-400 hidden lg:block" size={40} />

            {/* Step 1: Revenue Growth */}
            <div className="text-center w-full lg:w-auto">
              <div className="bg-orange-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg">
                <div className="text-xs uppercase tracking-wide mb-2">Revenue Growth</div>
                <div className="text-2xl sm:text-3xl font-light">$4.5M</div>
                <div className="text-xs text-orange-200 mt-2">+5.0x</div>
              </div>
              <div className="mt-3 sm:mt-4 text-xs text-slate-600">
                <div>$0.9M → $4.5M</div>
                <div>Multi-stream model</div>
              </div>
            </div>

            <ArrowRight className="text-slate-400 hidden lg:block" size={40} />

            {/* Step 2: Multiple Expansion */}
            <div className="text-center w-full lg:w-auto">
              <div className="bg-blue-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg">
                <div className="text-xs uppercase tracking-wide mb-2">Multiple Expansion</div>
                <div className="text-2xl sm:text-3xl font-light">3.5x</div>
                <div className="text-xs text-blue-200 mt-2">Fintech Premium</div>
              </div>
              <div className="mt-3 sm:mt-4 text-xs text-slate-600">
                <div>1.2x → 3.5x</div>
                <div>Tech + SaaS valuation</div>
              </div>
            </div>

            <ArrowRight className="text-slate-400 hidden lg:block" size={40} />

            {/* Ending Point */}
            <div className="text-center w-full lg:w-auto">
              <div className="bg-green-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-lg">
                <div className="text-xs uppercase tracking-wide mb-2">Target Valuation</div>
                <div className="text-2xl sm:text-3xl font-light">$15.8M</div>
                <div className="text-xs text-green-200 mt-2">Prime RIA On-Chain</div>
              </div>
              <div className="mt-3 sm:mt-4 text-xs text-slate-600 font-semibold">
                <div className="text-green-600 text-base sm:text-lg">14.3x uplift</div>
                <div>From $1.1M base</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Model */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="border border-slate-200">
          <div className="bg-slate-100 px-4 sm:px-6 py-3 border-b border-slate-200">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-900">Revenue Build (Year 2)</h3>
          </div>
          <div className="p-4 sm:p-6">
            <table className="w-full text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 text-xs uppercase tracking-wide text-slate-600">Stream</th>
                  <th className="text-right py-2 text-xs uppercase tracking-wide text-slate-600">Revenue</th>
                  <th className="text-right py-2 text-xs uppercase tracking-wide text-slate-600">%</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="border-b border-slate-100">
                  <td className="py-2 sm:py-3">AUM Management Fees</td>
                  <td className="text-right font-semibold">$1.5M</td>
                  <td className="text-right text-slate-500">33%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 sm:py-3">Performance Fees (20% carry)</td>
                  <td className="text-right font-semibold">$1.2M</td>
                  <td className="text-right text-slate-500">27%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 sm:py-3">SaaS Platform Subscriptions</td>
                  <td className="text-right font-semibold">$0.9M</td>
                  <td className="text-right text-slate-500">20%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 sm:py-3">Transaction & Custody Fees</td>
                  <td className="text-right font-semibold">$0.6M</td>
                  <td className="text-right text-slate-500">13%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-2 sm:py-3">Advisory & Structuring</td>
                  <td className="text-right font-semibold">$0.3M</td>
                  <td className="text-right text-slate-500">7%</td>
                </tr>
                <tr className="border-t-2 border-slate-900">
                  <td className="py-2 sm:py-3 font-semibold">Total Revenue</td>
                  <td className="text-right font-bold text-green-600 text-base sm:text-lg">$4.5M</td>
                  <td className="text-right font-semibold">100%</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-4 pt-4 border-t border-slate-200 text-xs text-slate-600">
              <div className="flex justify-between mb-1">
                <span>Gross Margin:</span>
                <span className="font-semibold">72%</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>EBITDA Margin:</span>
                <span className="font-semibold">53%</span>
              </div>
              <div className="flex justify-between">
                <span>EBITDA:</span>
                <span className="font-semibold text-green-600">$2.4M</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div className="border border-slate-200 bg-slate-50 p-4 sm:p-6">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-900 mb-4">Comparable Valuations</h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between items-baseline">
                <span className="text-slate-700">Traditional RIA</span>
                <span className="font-semibold text-slate-900">1.0-1.5x revenue</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-slate-700">Digital Asset Manager</span>
                <span className="font-semibold text-slate-900">2.0-3.0x revenue</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-slate-700">Fintech Platform (SaaS)</span>
                <span className="font-semibold text-slate-900">4.0-6.0x revenue</span>
              </div>
              <div className="flex justify-between items-baseline pt-3 border-t border-slate-300">
                <span className="text-slate-900 font-semibold">Mira Labs (Blended)</span>
                <span className="font-bold text-green-600 text-base sm:text-lg">3.5x revenue</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white rounded text-xs text-slate-600">
              Conservative 3.5x multiple reflects: (1) SaaS revenue growing to 30-35% of total, (2) technology differentiation (FPGA), (3) regulated infrastructure moat, (4) proven AUM base with expansion trajectory
            </div>
          </div>

          <div className="bg-slate-900 text-white p-4 sm:p-6 rounded-lg">
            <h3 className="text-xs uppercase tracking-wide text-slate-400 mb-4">Exit Scenarios (18-24 months)</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-xs sm:text-sm">Series A (VC-backed scale)</span>
                  <span className="text-lg sm:text-xl font-light">$12-18M</span>
                </div>
                <div className="text-xs text-slate-500">Pre-money at 2.7-4.0x Year 2 revenue</div>
              </div>
              <div className="pt-3 border-t border-slate-700">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-xs sm:text-sm">Strategic Acquisition</span>
                  <span className="text-lg sm:text-xl font-light">$18-25M</span>
                </div>
                <div className="text-xs text-slate-500">Premium for regulated infrastructure + tech stack</div>
              </div>
              <div className="pt-3 border-t border-slate-700">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-xs sm:text-sm">HFT Firm Vertical Integration</span>
                  <span className="text-lg sm:text-xl font-light">$40-50M</span>
                </div>
                <div className="text-xs text-slate-500">LBO opportunity for firms seeking RIA + infrastructure</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

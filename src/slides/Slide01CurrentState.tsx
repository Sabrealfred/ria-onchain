import { AlertTriangle } from 'lucide-react';
import type { ContentSlide } from '../types/slides';

export const Slide01CurrentState: ContentSlide = {
  type: 'content',
  title: 'I. CURRENT STATE',
  subtitle: 'The Typical RIA Trap — Traditional asset management model with structural limitations',
  content: (
    <div className="h-full flex flex-col p-4 sm:p-6 md:p-8 lg:p-12 pt-24 md:pt-28 lg:pt-32">
      {/* Problem Statement */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 flex-1">
        <div className="space-y-6">
          <div className="bg-red-50 border-l-4 border-red-600 p-4 sm:p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-red-900 mb-3">The RIA Reality</h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-red-600 flex-shrink-0 mt-0.5" size={16} />
                <div><span className="font-semibold">Linear Revenue Model:</span> 1.5% AUM fee structure caps growth at capital raising velocity</div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-red-600 flex-shrink-0 mt-0.5" size={16} />
                <div><span className="font-semibold">Manual Operations:</span> Labor-intensive back office, compliance, and reporting infrastructure</div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-red-600 flex-shrink-0 mt-0.5" size={16} />
                <div><span className="font-semibold">Asset Class Locked:</span> Traditional securities only—missing crypto, tokenized assets, and DeFi opportunities</div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-red-600 flex-shrink-0 mt-0.5" size={16} />
                <div><span className="font-semibold">Regulatory Overhead:</span> Swiss FINMA compliance without leveraging tech-enabled efficiency</div>
              </div>
            </div>
          </div>

          <div className="border border-slate-200 p-4 sm:p-6">
            <h3 className="text-xs uppercase tracking-wide text-slate-500 mb-4">Valuation Constraints</h3>
            <div className="space-y-3">
              <div>
                <div className="text-xl sm:text-2xl font-light text-slate-900">1.0-1.5x</div>
                <div className="text-xs text-slate-600">Revenue Multiple (Traditional RIA)</div>
              </div>
              <div className="pt-3 border-t border-slate-200">
                <div className="text-xs text-slate-500 space-y-1">
                  <div>• Limited to AUM fee revenue</div>
                  <div>• 50-60% operating margins typical</div>
                  <div>• Growth capped by capital raising</div>
                  <div>• Minimal technology differentiation</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border border-slate-200 p-4 sm:p-6">
            <h3 className="text-xs uppercase tracking-wide text-slate-500 mb-4">Current Asset Base</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-slate-700">Linked AUM</span>
                <span className="text-xl sm:text-2xl font-light text-slate-900">$60M</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-slate-700">Annual Revenue Run-Rate</span>
                <span className="text-lg sm:text-xl font-light text-slate-900">$0.9M</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-slate-700">Implied Valuation (1.2x)</span>
                <span className="text-lg sm:text-xl font-light text-red-600">~$1.1M</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200">
              <div className="text-xs text-slate-500">
                <div className="font-semibold mb-2">Infrastructure in Place:</div>
                <ul className="space-y-1">
                  <li>• FINMA-licensed Swiss AM</li>
                  <li>• CSSF Luxembourg umbrella (400+ compartments)</li>
                  <li>• Tier-1 banking relationships</li>
                  <li>• CHF 850K in capital & tax shields</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-4 sm:p-6 rounded-lg">
            <h3 className="text-xs uppercase tracking-wide text-slate-400 mb-4">The Strategic Gap</h3>
            <p className="text-xs sm:text-sm font-light leading-relaxed">
              <span className="text-blue-400 font-semibold">$60M AUM + Regulatory Infrastructure</span> worth 10-20x more when transformed into a <span className="text-green-400 font-semibold">technology-enabled, multi-revenue-stream fintech platform</span> operating on-chain.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

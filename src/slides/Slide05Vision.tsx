import { Rocket, TrendingUp, Building2, Award } from 'lucide-react';
import type { ContentSlide } from '../types/slides';

export const Slide05Vision: ContentSlide = {
  type: 'content',
  title: 'V. EXIT STRATEGY & VISION',
  subtitle: 'Milestone-Based M&A — Fintech Multiples Drive 10X Returns',
  content: (
    <div className="h-full flex flex-col p-8 pt-32">
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-6">
            <Rocket size={40} className="text-blue-400" />
            <h3 className="text-2xl font-bold">The Vision</h3>
          </div>
          <div className="space-y-4 text-sm">
            <div className="border-l-4 border-blue-400 pl-4">
              <div className="font-bold mb-1">First-Mover Advantage</div>
              <div className="text-slate-300">Build the first fully tokenized RIA rollup with on-chain infrastructure</div>
            </div>
            <div className="border-l-4 border-green-400 pl-4">
              <div className="font-bold mb-1">Category Creation</div>
              <div className="text-slate-300">Define "Digital Asset RIA" as strategic M&A target for fintech giants</div>
            </div>
            <div className="border-l-4 border-purple-400 pl-4">
              <div className="font-bold mb-1">Platform Model</div>
              <div className="text-slate-300">Scale tech across portfolio RIAs creating network effects & value multiplier</div>
            </div>
          </div>
        </div>

        <div className="bg-white border-4 border-green-500 p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-6">
            <Award size={40} className="text-green-600" />
            <h3 className="text-2xl font-bold text-slate-900">Target Returns</h3>
          </div>
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-6xl font-bold text-green-600 mb-2">10X</div>
              <div className="text-sm text-slate-600">Target MOIC</div>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-slate-600">Entry:</div>
                  <div className="font-bold">$45M invested</div>
                </div>
                <div>
                  <div className="text-slate-600">Exit:</div>
                  <div className="font-bold text-green-600">$450M+ return</div>
                </div>
                <div>
                  <div className="text-slate-600">Multiple:</div>
                  <div className="font-bold">1-1.5x → 8-12x</div>
                </div>
                <div>
                  <div className="text-slate-600">Timeline:</div>
                  <div className="font-bold">18-24 months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 border-2 border-slate-300 p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Building2 size={28} className="text-slate-700" />
          <h3 className="text-xl font-bold text-slate-900">Strategic Acquirer Profile</h3>
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-4 rounded border-2 border-blue-200">
            <div className="font-bold text-blue-900 mb-2">Crypto Exchanges</div>
            <div className="text-xs text-slate-600 space-y-1">
              <div>• Coinbase Institutional</div>
              <div>• Kraken Prime</div>
              <div>• Gemini Wealth</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded border-2 border-green-200">
            <div className="font-bold text-green-900 mb-2">Fintech Platforms</div>
            <div className="text-xs text-slate-600 space-y-1">
              <div>• Robinhood Advisor</div>
              <div>• SoFi Wealth</div>
              <div>• Betterment</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded border-2 border-purple-200">
            <div className="font-bold text-purple-900 mb-2">Traditional RIA Rollups</div>
            <div className="text-xs text-slate-600 space-y-1">
              <div>• Focus Financial</div>
              <div>• CI Financial</div>
              <div>• Wealth Enhancement Group</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <TrendingUp size={40} />
            <div>
              <div className="text-2xl font-bold">Milestone-Based Exit</div>
              <div className="text-sm text-blue-100">Trigger strategic M&A once fintech metrics validated</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">Q2 2026</div>
            <div className="text-sm text-blue-100">Target Exit Window</div>
          </div>
        </div>
      </div>
    </div>
  )
};

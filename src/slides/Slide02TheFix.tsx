import { Zap, TrendingUp, Coins, Shield } from 'lucide-react';
import type { ContentSlide } from '../types/slides';

export const Slide02TheFix: ContentSlide = {
  type: 'content',
  title: 'III. THE TRANSFORMATION',
  subtitle: 'On-Chain Integration — 12 Growth Opportunities to 10X Valuation',
  content: (
    <div className="h-full flex flex-col p-8 pt-32">
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Coins size={32} />
            <h3 className="text-xl font-bold">Tokenization Layer</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <div className="text-blue-200">1.</div>
              <div>Tokenized LP Fund Shares (ERC-3643)</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-blue-200">2.</div>
              <div>RWA Fund Integration (Plume.org)</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-blue-200">3.</div>
              <div>Smart Contract Distribution System</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-blue-200">4.</div>
              <div>Automated Compliance & KYC/AML</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp size={32} />
            <h3 className="text-xl font-bold">Crypto Advisory</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <div className="text-green-200">5.</div>
              <div>BTC/ETH Portfolio Allocations (5-15%)</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-green-200">6.</div>
              <div>Crypto Tax Optimization Services</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-green-200">7.</div>
              <div>DeFi Yield Strategy Integration</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-green-200">8.</div>
              <div>Staking & Validator Services</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Zap size={32} />
            <h3 className="text-xl font-bold">Platform Tech</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <div className="text-purple-200">9.</div>
              <div>AI-Powered Client Portal</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-purple-200">10.</div>
              <div>Real-Time On-Chain Analytics</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-purple-200">11.</div>
              <div>Cross-Chain Asset Aggregation</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Shield size={32} />
            <h3 className="text-xl font-bold">Compliance Edge</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <div className="text-orange-200">12.</div>
              <div>SEC-Compliant Digital Asset Custody</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-orange-200">•</div>
              <div>Regulatory-First Architecture</div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-orange-200">•</div>
              <div>Institutional-Grade Security</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white p-6 rounded-lg">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2 text-green-400">$2.5M → $5M</div>
            <div className="text-sm text-slate-400">Revenue Growth Target</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2 text-blue-400">$2.2M</div>
            <div className="text-sm text-slate-400">Tech Investment</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2 text-purple-400">36 months</div>
            <div className="text-sm text-slate-400">Transformation Timeline</div>
          </div>
        </div>
      </div>
    </div>
  )
};

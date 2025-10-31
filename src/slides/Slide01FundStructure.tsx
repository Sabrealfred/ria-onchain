import type { ContentSlide } from '../types/slides';

export const Slide01FundStructure: ContentSlide = {
  type: 'content',
  title: 'I. FUND STRUCTURE',
  subtitle: 'Three-Phase Tokenized PE Model — Formation → Raise → Deploy',
  content: (
    <div className="h-full flex flex-col p-8 pt-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
        <div className="border-2 border-blue-500 bg-blue-50 p-6">
          <div className="bg-blue-600 text-white p-4 -m-6 mb-6">
            <div className="text-2xl font-light mb-2">Phase 01</div>
            <div className="text-4xl font-bold">$50K</div>
            <div className="text-sm mt-2">Formation Sprint</div>
          </div>
          <div className="space-y-3 text-sm">
            <div><strong>Delaware LP setup</strong></div>
            <div>• Legal Stack (LPA, PPM, Sub Docs)</div>
            <div>• SEC/FINRA compliance</div>
            <div>• Plume.org tokenization (ERC-3643)</div>
            <div>• Banking & custody</div>
            <div>• Investor materials</div>
            <div className="pt-4 border-t mt-4 font-semibold text-blue-900">Timeline: Weeks 0-4</div>
          </div>
        </div>

        <div className="border-2 border-green-500 bg-green-50 p-6">
          <div className="bg-green-600 text-white p-4 -m-6 mb-6">
            <div className="text-2xl font-light mb-2">Phase 02</div>
            <div className="text-4xl font-bold">$5M</div>
            <div className="text-sm mt-2">Tokenized Raise</div>
          </div>
          <div className="space-y-3 text-sm">
            <div><strong>Security Token Offering</strong></div>
            <div>• Monthly rolling closes</div>
            <div>• $25K minimum investment</div>
            <div>• ERC-3643 LP tokens</div>
            <div>• Automated distribution</div>
            <div>• KYC/AML compliant</div>
            <div className="pt-4 border-t mt-4 font-semibold text-green-900">Timeline: Months 1-4</div>
          </div>
        </div>

        <div className="border-2 border-purple-500 bg-purple-50 p-6">
          <div className="bg-purple-600 text-white p-4 -m-6 mb-6">
            <div className="text-2xl font-light mb-2">Phase 03</div>
            <div className="text-4xl font-bold">$40M+</div>
            <div className="text-sm mt-2">Deploy & Exit</div>
          </div>
          <div className="space-y-3 text-sm">
            <div><strong>Acquisition & Transformation</strong></div>
            <div>• Acquire 3-5 RIAs ($2-3M each)</div>
            <div>• Crypto/DeFi integration</div>
            <div>• Tokenization infrastructure</div>
            <div>• Scale to fintech multiples</div>
            <div>• Exit at 10X (M&A milestones)</div>
            <div className="pt-4 border-t mt-4 font-semibold text-purple-900">Timeline: Months 4-20</div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-slate-900 text-white p-6 rounded-lg">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-light mb-2">$45M+</div>
            <div className="text-sm text-slate-400">Total Fund Size</div>
          </div>
          <div>
            <div className="text-3xl font-light mb-2">15-20mo</div>
            <div className="text-sm text-slate-400">Hold Period</div>
          </div>
          <div>
            <div className="text-3xl font-light mb-2">10X</div>
            <div className="text-sm text-slate-400">Target MOIC</div>
          </div>
        </div>
      </div>
    </div>
  )
};

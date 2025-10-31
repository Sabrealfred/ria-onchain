import { Calendar, CheckCircle2, Target } from 'lucide-react';
import type { ContentSlide } from '../types/slides';

export const Slide03Actions: ContentSlide = {
  type: 'content',
  title: 'IV. EXECUTION ROADMAP',
  subtitle: 'Phase-by-Phase Implementation — 18-24 Month Timeline to Exit',
  content: (
    <div className="h-full flex flex-col p-8 pt-32">
      <div className="space-y-6">
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-600 text-white px-4 py-2 rounded font-bold">Q1 2025</div>
            <h3 className="text-xl font-bold text-slate-900">Phase 1: Formation ($50K)</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-green-600 mt-1" />
                <div><strong>Weeks 0-1:</strong> Delaware LP formation, banking setup</div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-green-600 mt-1" />
                <div><strong>Weeks 1-2:</strong> Legal docs (LPA, PPM, Sub Docs)</div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-green-600 mt-1" />
                <div><strong>Weeks 2-3:</strong> SEC/FINRA compliance filings</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-green-600 mt-1" />
                <div><strong>Weeks 3-4:</strong> Plume.org tokenization (ERC-3643)</div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-green-600 mt-1" />
                <div><strong>Week 4:</strong> Investor materials & data room</div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-green-600 mt-1" />
                <div><strong>Deliverable:</strong> Operational fund ready for capital</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-600 text-white px-4 py-2 rounded font-bold">Q1-Q2 2025</div>
            <h3 className="text-xl font-bold text-slate-900">Phase 2: Tokenized Raise ($5M)</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Target size={16} className="text-green-600 mt-1" />
                <div><strong>Month 1:</strong> First close ($1M minimum)</div>
              </div>
              <div className="flex items-start gap-2">
                <Target size={16} className="text-green-600 mt-1" />
                <div><strong>Months 2-3:</strong> Rolling monthly closes</div>
              </div>
              <div className="flex items-start gap-2">
                <Target size={16} className="text-green-600 mt-1" />
                <div><strong>Structure:</strong> $25K minimum, ERC-3643 LP tokens</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Target size={16} className="text-green-600 mt-1" />
                <div><strong>Marketing:</strong> Family offices, crypto-native HNW</div>
              </div>
              <div className="flex items-start gap-2">
                <Target size={16} className="text-green-600 mt-1" />
                <div><strong>Tech:</strong> Automated KYC/AML, smart contract distributions</div>
              </div>
              <div className="flex items-start gap-2">
                <Target size={16} className="text-green-600 mt-1" />
                <div><strong>Target:</strong> $5M by end of Month 4</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-600 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-600 text-white px-4 py-2 rounded font-bold">Q2 2025 - Q2 2026</div>
            <h3 className="text-xl font-bold text-slate-900">Phase 3: Deploy & Transform ($40M+)</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Calendar size={16} className="text-purple-600 mt-1" />
                <div><strong>Months 4-8:</strong> Acquire Sector Analysts ($2.5-3M)</div>
              </div>
              <div className="flex items-start gap-2">
                <Calendar size={16} className="text-purple-600 mt-1" />
                <div><strong>Months 9-14:</strong> Deploy 12 transformation initiatives</div>
              </div>
              <div className="flex items-start gap-2">
                <Calendar size={16} className="text-purple-600 mt-1" />
                <div><strong>Months 15-18:</strong> Scale operations, add 2-3 more RIAs</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Calendar size={16} className="text-purple-600 mt-1" />
                <div><strong>Months 18-20:</strong> Fintech metrics validation</div>
              </div>
              <div className="flex items-start gap-2">
                <Calendar size={16} className="text-purple-600 mt-1" />
                <div><strong>Months 20-24:</strong> M&A process, strategic exit</div>
              </div>
              <div className="flex items-start gap-2">
                <Calendar size={16} className="text-purple-600 mt-1" />
                <div><strong>Target Exit:</strong> 10X MOIC at fintech multiples</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-slate-900 text-white p-6 rounded-lg">
        <div className="text-center">
          <div className="text-sm text-slate-400 mb-2">TOTAL TIMELINE</div>
          <div className="text-4xl font-bold">18-24 Months</div>
          <div className="text-sm text-slate-400 mt-2">From Formation to Strategic Exit</div>
        </div>
      </div>
    </div>
  )
};

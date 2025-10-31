import type { SlideDefinition } from '../types/slides';

export const Slide00Cover: SlideDefinition = {
  type: 'title',
  content: (
    <div className="h-full bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)`
        }}></div>
      </div>

      <div className="relative h-full flex flex-col justify-between p-12 lg:p-16">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <div className="text-blue-400 text-sm font-light tracking-[0.3em] mb-2">CONFIDENTIAL M&A ANALYSIS</div>
            <div className="text-xs text-slate-500 uppercase tracking-widest">Private Equity | Fintech Transformation</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-500 uppercase tracking-widest">Q1 2025</div>
            <div className="text-xs text-slate-600 mt-1">Investment Opportunity</div>
          </div>
        </div>

        {/* Main Title */}
        <div className="flex-1 flex flex-col justify-center -mt-16">
          <div className="mb-8">
            <div className="text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-none mb-6">
              THE PRIME<br/>
              <span className="font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                RIA ON-CHAIN
              </span>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-transparent mb-8"></div>
            <div className="text-xl lg:text-2xl font-light text-slate-300 max-w-3xl leading-relaxed">
              Tokenized Private Equity Fund: Acquiring Traditional RIAs &<br/>
              Transforming Them Into Institutional-Grade On-Chain Fintech Platforms
            </div>
          </div>

          {/* Key Metrics Bar */}
          <div className="grid grid-cols-4 gap-6 max-w-5xl mt-12">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-400 mb-2">$50M+</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Total Fund Size</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-lg">
              <div className="text-3xl font-bold text-green-400 mb-2">3-5</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">RIA Acquisitions</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-lg">
              <div className="text-3xl font-bold text-purple-400 mb-2">18-24mo</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Hold Period</div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-lg">
              <div className="text-3xl font-bold text-yellow-400 mb-2">10X</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Target MOIC</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end">
          <div>
            <div className="text-sm text-slate-400 mb-1">Investment Thesis</div>
            <div className="text-xs text-slate-600">Traditional RIAs (1-1.5x revenue) → On-Chain Fintech (8-12x revenue)</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-600 uppercase tracking-widest">ERC-3643 Tokenized LP</div>
            <div className="text-xs text-slate-700 mt-1">Delaware Limited Partnership | SEC Compliant</div>
          </div>
        </div>
      </div>
    </div>
  )
};

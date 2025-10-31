import type { SlideDefinition } from '../types/slides';

export const Slide00Cover: SlideDefinition = {
  type: 'title',
  content: (
    <div className="h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-8 sm:p-12 md:p-16 flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <div className="text-xs uppercase tracking-widest text-slate-400">CONFIDENTIAL OFFERING MEMORANDUM</div>
          <div className="text-[10px] text-slate-500 mt-1">For Accredited Investors Only</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-slate-400">Q4 2025</div>
          <div className="text-[10px] text-slate-500 mt-1">Delaware Limited Partnership</div>
        </div>
      </div>

      {/* Main Title */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
        <div className="mb-8">
          <div className="text-xs sm:text-sm uppercase tracking-[0.3em] text-blue-400 font-semibold mb-6">
            Tokenized Private Equity Fund
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight leading-tight">
            THE PRIME RIA<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              ON-CHAIN
            </span>
          </h1>
          <div className="h-1 w-32 sm:w-48 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Acquiring & Transforming Traditional RIAs<br className="hidden sm:block"/>
            Into On-Chain Fintech Platforms
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl w-full mt-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <div className="text-3xl sm:text-4xl font-light text-green-400 mb-2">$50M+</div>
            <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wide">Fund Size Target</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <div className="text-3xl sm:text-4xl font-light text-blue-400 mb-2">3-5</div>
            <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wide">RIA Acquisitions</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <div className="text-3xl sm:text-4xl font-light text-purple-400 mb-2">10X</div>
            <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wide">Target Exit Multiple</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-700 pt-6 mt-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <div className="text-sm font-light">Mira Labs Capital Formation</div>
            <div className="text-xs text-slate-400 mt-1">New York • Luzern • Luxembourg • Singapore</div>
          </div>
          <div className="text-center sm:text-right">
            <div className="text-xs text-slate-400 uppercase tracking-widest">Investment Structure</div>
            <div className="text-sm font-light mt-1">Tokenized LP Interests (ERC-3643)</div>
          </div>
        </div>
      </div>
    </div>
  )
};

import type { SlideDefinition } from '../types/slides';

export const Slide00Cover: SlideDefinition = {
  type: 'title',
  content: (
    <div className="h-full bg-[#0a1224] text-white flex flex-col justify-between px-10 sm:px-14 md:px-20 lg:px-24 py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-transparent to-slate-900/80 pointer-events-none" />
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at top right, rgba(59,130,246,0.18), transparent 45%),
                          radial-gradient(circle at 20% 60%, rgba(14,165,233,0.12), transparent 55%)`
      }} />
      <header className="relative flex items-start justify-between text-xs uppercase tracking-[0.35em] text-slate-400">
        <div className="space-y-2">
          <div className="text-[10px] tracking-[0.45em] text-slate-500/80">Presented by</div>
          <div className="flex flex-col gap-1 text-[11px]">
            <span className="text-sky-300 tracking-[0.4em]">RY-CAPITAL</span>
            <span className="text-slate-500/80 tracking-[0.35em]">Capital Structuring · Deal Execution</span>
          </div>
          <div className="flex flex-col gap-1 text-[11px]">
            <span className="text-amber-200 tracking-[0.4em]">MIRALABS</span>
            <span className="text-slate-500/80 tracking-[0.35em]">Tokenization · Digital Infrastructure</span>
          </div>
        </div>
        <div className="text-right space-y-1">
          <div>Confidential Investor Presentation</div>
          <div className="text-[10px] tracking-[0.4em] text-slate-500/80">October 2025 · Tokenized LP · Reg D 506(c)</div>
        </div>
      </header>

      <main className="relative flex-1 flex flex-col justify-center text-left">
        <div className="text-[13px] tracking-[0.4em] uppercase text-sky-400 mb-6">RIA On-Chain Initiative</div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.02em] text-white/95 mb-6">
          Sector Analysts, LLC
        </h1>
        <div className="space-y-3 text-sm sm:text-base text-slate-300/90 max-w-2xl leading-relaxed">
          <p>
            Objective: Acquire a high-margin RIA and transform it into the first fully tokenized wealth-management
            platform in the United States.
          </p>
          <p>
            Acquisition Price ≈ <span className="text-sky-200">$3M (1.2× revenue)</span> · Initial Payment
            <span className="text-slate-200"> $1M</span> · Tokenized SPV + DeFi Yield Vault · Projected Exit
            <span className="text-emerald-200"> $100–120M</span> within 24 months.
          </p>
        </div>
      </main>

      <footer className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between text-[11px] uppercase tracking-[0.35em] text-slate-400">
        <div>Tampa · Florida</div>
        <div className="flex items-center gap-8">
          <span>Tokenized Capital Stack</span>
          <span>Crypto + DeFi Yield Integration</span>
          <span>Strategic Exit within 24 Months</span>
        </div>
      </footer>
    </div>
  )
};

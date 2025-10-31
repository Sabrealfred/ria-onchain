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
        <div>
          <div>Confidential</div>
          <div className="mt-2 text-[10px] tracking-[0.4em] text-slate-500/80">For Discussion Purposes Only</div>
        </div>
        <div className="text-right space-y-1">
          <div>October 2025</div>
          <div className="text-[10px] tracking-[0.4em] text-slate-500/80">Tokenized LP | Reg D 506(c)</div>
        </div>
      </header>

      <main className="relative flex-1 flex flex-col justify-center text-left">
        <div className="text-[13px] tracking-[0.4em] uppercase text-sky-400 mb-6">Plan B | RIA M&A Fund I, LP</div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.02em] text-white/95 mb-4">
          Sector Analysts, LLC
        </h1>
        <p className="text-sm sm:text-base text-slate-300/90 max-w-xl leading-relaxed">
          SEC-Registered Investment Advisor · CRD #169789<br />
          Strategic acquisition opportunity — baseline $2.5M revenue, 89% gross margin, $269M AUM.
        </p>
      </main>

      <footer className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between text-[11px] uppercase tracking-[0.35em] text-slate-400">
        <div>Tampa, Florida</div>
        <div className="flex items-center gap-8">
          <span>$50M+ Tokenized Fund</span>
          <span>18-24 Month Hold</span>
          <span>10X Target MOIC</span>
        </div>
      </footer>
    </div>
  )
};

import type { ContentSlide } from '../types/slides';

export const Slide05InitialCapital: ContentSlide = {
  type: 'content',
  title: 'V. INITIAL CAPITAL — PURPOSE & PROJECT STRUCTURE',
  subtitle: 'Foundation spend that unlocks the acquisition stack and tokenized financing',
  content: (
    <div className="h-full flex flex-col gap-8 p-6 sm:p-8 md:p-10 lg:p-12 bg-[#0b1424] text-slate-200">
      <section className="rounded-2xl border border-slate-800 bg-[#111b30] p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <h3 className="text-lg font-semibold text-white uppercase tracking-[0.08em]">
              Purpose
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Not operating spend. The initial capital establishes the legal, technological, and compliance rails required to
              mobilize the $1M initial payment and the subsequent earn-out tranches safely through tokenized
              vehicles.
            </p>
          </div>
          <div className="rounded-full border border-amber-400/50 bg-amber-900/20 px-6 py-5 text-center text-sm text-amber-100">
            “Formation sprint enabling capital to flow through programmable, compliant infrastructure.”
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm text-slate-200">
        {[
          {
            title: 'Legal Architecture',
            items: [
              'Delaware LP & GP entities',
              'Private Placement Memorandum & subscription docs',
              'Operating handbook · Reg D 506(c) filings'
            ]
          },
          {
            title: 'Tokenized SPV',
            items: [
              'ERC-3643 smart contracts',
              'Automated investor registry & waterfall',
              'Secondary-ready governance framework'
            ]
          },
          {
            title: 'DeFi Yield Vault “Lidya”',
            items: [
              'Tokenized RWA wrappers for client participation',
              'Connectivity to staking/restaking strategies',
              'Yield distribution workflows'
            ]
          },
          {
            title: 'Compliance & Rails',
            items: [
              'KYC/AML orchestration',
              'Banking & custody setup',
              'Audit / cybersecurity onboarding'
            ]
          }
        ].map(block => (
          <div key={block.title} className="rounded-2xl border border-slate-800 bg-[#111b30] p-5 shadow-sm">
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400 mb-3">{block.title}</div>
            <ul className="space-y-2">
              {block.items.map(item => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  )
};

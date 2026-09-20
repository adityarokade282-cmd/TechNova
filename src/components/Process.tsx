import { processSteps } from '@/data/siteData';

export default function Process() {
  return (
    <section className="section-pad relative overflow-hidden bg-navy-900/30">
      <div className="absolute inset-0 bg-hero-grid bg-grid opacity-20" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-accent-blue/10 rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-blue-light" />
            <span className="text-sm font-medium text-gray-300">How We Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Our Proven{' '}
            <span className="gradient-text">Process</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A structured, transparent approach that turns your vision into a polished product — on time and on budget.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-blue/30 to-transparent" />

          <div className="grid grid-cols-5 gap-4">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className={`reveal reveal-delay-${i + 1} relative flex flex-col items-center text-center`}
                >
                  {/* Number circle */}
                  <div className="relative w-24 h-24 rounded-full bg-navy-900 border border-white/10 flex items-center justify-center mb-6 group hover:border-accent-blue/40 transition-all duration-300">
                    <Icon className="w-8 h-8 text-accent-blue-light" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-xs font-bold text-white">
                      {step.num}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue/30 via-accent-purple/30 to-transparent" />
          <div className="space-y-8">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className={`reveal reveal-delay-${(i % 3) + 1} relative flex gap-6 items-start`}
                >
                  <div className="relative w-24 h-24 rounded-full bg-navy-900 border border-white/10 flex items-center justify-center flex-shrink-0 z-10">
                    <Icon className="w-7 h-7 text-accent-blue-light" />
                    <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-[10px] font-bold text-white">
                      {step.num}
                    </div>
                  </div>
                  <div className="pt-4">
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

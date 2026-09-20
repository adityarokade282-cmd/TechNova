import { industries } from '@/data/siteData';

export default function Industries() {
  return (
    <section id="industries" className="section-pad relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-blue/10 rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-cyan" />
            <span className="text-sm font-medium text-gray-300">Industries</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Industries We{' '}
            <span className="gradient-text">Serve</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We have delivered digital solutions across a wide range of industries, adapting to each one's unique challenges and regulations.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className={`glass-card p-6 text-center group reveal reveal-delay-${(i % 4) + 1}`}
              >
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-blue/15 to-accent-purple/15 border border-white/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-7 h-7 text-accent-blue-light group-hover:text-accent-purple-light transition-colors" />
                </div>
                <h3 className="text-sm font-semibold text-white group-hover:text-accent-blue-light transition-colors">
                  {industry.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

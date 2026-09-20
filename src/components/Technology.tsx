import { techCategories } from '@/data/siteData';
import { Layers, Server, Database, Cloud, BrainCircuit, Palette } from 'lucide-react';

const categoryIcons = [Layers, Server, Database, Cloud, BrainCircuit, Palette];

export default function Technology() {
  return (
    <section id="solutions" className="section-pad relative overflow-hidden bg-navy-900/30">
      <div className="absolute inset-0 bg-hero-grid bg-grid opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-cyan/10 rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-cyan" />
            <span className="text-sm font-medium text-gray-300">Our Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Technologies We{' '}
            <span className="gradient-text">Master</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We work with the best tools in the industry to build solutions that are fast, secure, and built to last.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((cat, i) => {
            const Icon = categoryIcons[i];
            return (
              <div
                key={cat.name}
                className={`glass-card p-7 reveal reveal-delay-${(i % 3) + 1}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 border border-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent-blue-light" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-300 bg-white/[0.04] border border-white/10 hover:border-accent-blue/40 hover:text-white transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

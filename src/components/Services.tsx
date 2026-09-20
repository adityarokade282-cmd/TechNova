import { services } from '@/data/siteData';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-blue/10 rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-blue-light" />
            <span className="text-sm font-medium text-gray-300">What We Do</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Services Built to{' '}
            <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="text-gray-400 text-lg">
            From concept to deployment, we offer end-to-end digital services that help your business grow, scale, and stay ahead of the curve.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`glass-card p-8 group reveal reveal-delay-${(i % 3) + 1}`}
              >
                {/* Icon */}
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-7 h-7 text-accent-blue-light" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-blue-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>

                <div className="flex items-center gap-2 text-sm font-semibold text-accent-blue-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

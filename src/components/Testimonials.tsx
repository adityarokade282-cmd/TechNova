import { testimonials } from '@/data/siteData';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent-blue/10 rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-purple-light" />
            <span className="text-sm font-medium text-gray-300">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            What Our{' '}
            <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We measure our success by the success of the clients we work with.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card p-8 reveal reveal-delay-${i + 1}`}
            >
              {/* Quote icon */}
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 border border-white/10 flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-accent-blue-light" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-white font-bold text-sm">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

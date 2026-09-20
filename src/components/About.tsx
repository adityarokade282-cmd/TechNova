import { stats } from '@/data/siteData';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: heading + description */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-purple-light" />
              <span className="text-sm font-medium text-gray-300">About Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Your Technology Partner for{' '}
              <span className="gradient-text">Digital Transformation</span>
            </h2>

            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              TechNova Solutions is a technology partner helping startups, small businesses, and growing companies build modern digital solutions. We combine deep technical expertise with a passion for innovation to deliver products that drive real business results.
            </p>

            <p className="text-gray-500 mb-8 leading-relaxed">
              From custom software and web platforms to AI-powered automation and mobile apps, we work alongside you at every stage — from concept to launch and beyond. Our team brings the precision of an enterprise engineering team with the agility of a startup.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Senior engineers and designers on every project',
                'Agile process with weekly deliverables',
                'Post-launch support and maintenance included',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-blue-light flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <a href="#services" className="inline-flex items-center gap-2 text-accent-blue-light font-semibold hover:gap-3 transition-all">
              Discover our services
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`glass-card p-8 text-center reveal reveal-delay-${i + 1}`}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 font-display">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

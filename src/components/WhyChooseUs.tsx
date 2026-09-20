import { whyChooseUs } from '@/data/siteData';

export default function WhyChooseUs() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-accent-purple/10 rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-purple-light" />
            <span className="text-sm font-medium text-gray-300">Why Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Why Companies{' '}
            <span className="gradient-text">Choose TechNova</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We do not just build software — we build partnerships that help your business thrive in a digital world.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`glass-card p-8 group reveal reveal-delay-${(i % 3) + 1}`}
              >
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-blue/15 to-accent-purple/15 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-accent-purple-light" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

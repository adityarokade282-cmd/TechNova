import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container-max relative z-10">
        <div className="relative reveal">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-accent-purple/15 to-accent-cyan/10 rounded-3xl" />
          <div className="absolute inset-0 bg-hero-grid bg-grid opacity-20 rounded-3xl" />

          {/* Glow orbs */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-accent-blue/30 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent-purple/30 rounded-full blur-[100px]" />

          <div className="relative z-10 px-6 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Have an Idea?{' '}
              <span className="gradient-text-animated">Let's Build It Together.</span>
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
              Tell us about your project and our team will help turn your idea into a powerful digital solution.
            </p>
            <a href="#contact" className="btn-primary text-base px-8 py-4">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Sparkles, Cpu, Cloud, Database, Smartphone, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-hero-grid bg-grid opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-purple/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Radial fade overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-navy-950/50 to-navy-950" />

      <div className="container-max px-5 md:px-10 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl mb-8 animate-fade-in-down">
              <Sparkles className="w-4 h-4 text-accent-blue-light" />
              <span className="text-sm font-medium text-gray-300">Your Trusted Technology Partner</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white mb-6 animate-fade-in-up">
              Building Digital Solutions That{' '}
              <span className="gradient-text-animated">Move Your Business Forward</span>
            </h1>

            <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              We help businesses transform their ideas into powerful websites, software, automation systems and AI-powered digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <a href="#contact" className="btn-primary">
                Start a Project
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="btn-secondary">
                Explore Services
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-12 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-gray-400">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-blue-light animate-pulse" />
                <span className="text-sm text-gray-400">Agile Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-purple-light animate-pulse" />
                <span className="text-sm text-gray-400">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative hidden lg:block animate-fade-in-right" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-blue glow-blue" />
              </div>
              {/* Middle ring */}
              <div className="absolute inset-12 rounded-full border border-white/5 animate-spin-reverse-slow">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-accent-purple glow-purple" />
              </div>
              {/* Inner ring */}
              <div className="absolute inset-24 rounded-full border border-white/5 animate-spin-slow" style={{ animationDuration: '15s' }}>
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-cyan" style={{ boxShadow: '0 0 20px rgba(6,182,212,0.6)' }} />
              </div>

              {/* Center orb */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 backdrop-blur-xl border border-white/10 flex items-center justify-center animate-float">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple opacity-20 blur-2xl" />
                  <Cpu className="w-16 h-16 text-white relative z-10" />
                </div>
              </div>

              {/* Floating tech icons */}
              <div className="absolute top-8 right-8 w-14 h-14 rounded-2xl glass-card flex items-center justify-center animate-float" style={{ animationDelay: '0s' }}>
                <Code2 className="w-6 h-6 text-accent-blue-light" />
              </div>
              <div className="absolute top-1/3 left-0 w-14 h-14 rounded-2xl glass-card flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Smartphone className="w-6 h-6 text-accent-purple-light" />
              </div>
              <div className="absolute bottom-12 right-0 w-14 h-14 rounded-2xl glass-card flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <Cloud className="w-6 h-6 text-accent-cyan" />
              </div>
              <div className="absolute bottom-1/3 left-8 w-14 h-14 rounded-2xl glass-card flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                <Database className="w-6 h-6 text-accent-blue-light" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-accent-blue/50 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}

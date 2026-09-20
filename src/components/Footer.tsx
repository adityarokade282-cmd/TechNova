import { Linkedin, Twitter, Github, Facebook, ArrowUpRight } from 'lucide-react';
import { navLinks, services, industries } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-900/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-accent-blue/10 rounded-full blur-[100px]" />

      <div className="container-max px-5 md:px-10 lg:px-16 relative z-10 pt-16 pb-8">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-2.5 mb-5 group">
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
                <span className="text-white font-bold text-lg font-display">T</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-lg">TechNova</span>
                <span className="text-[10px] tracking-[0.2em] text-accent-blue-light font-medium uppercase">Solutions</span>
              </div>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6">
              We help businesses transform their ideas into powerful websites, software, automation systems and AI-powered digital solutions.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Github, label: 'GitHub' },
                { icon: Facebook, label: 'Facebook' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-gray-400 hover:text-white hover:border-accent-blue/40 hover:bg-accent-blue/10 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-accent-blue-light transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-5">Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 7).map((s) => (
                <li key={s.title}>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 hover:text-accent-blue-light transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-5">Industries</h4>
            <ul className="space-y-3">
              {industries.map((ind) => (
                <li key={ind.name}>
                  <a
                    href="#industries"
                    className="text-sm text-gray-400 hover:text-accent-blue-light transition-colors"
                  >
                    {ind.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TechNova Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

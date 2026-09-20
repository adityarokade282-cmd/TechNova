import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { services } from '@/data/siteData';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  details: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', company: '', service: '', details: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Enter a valid email';
    if (!formData.phone.trim()) e.phone = 'Phone is required';
    if (!formData.service) e.service = 'Please select a service';
    if (!formData.details.trim()) e.details = 'Please describe your project';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@technovasolutions.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Location', value: '123 Innovation Drive, San Francisco, CA' },
    { icon: Clock, label: 'Business Hours', value: 'Mon - Fri: 9:00 AM - 6:00 PM PST' },
  ];

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm placeholder:text-gray-500 transition-all duration-300 focus:outline-none focus:bg-white/[0.05] ${
      errors[field] ? 'border-red-500/50' : 'border-white/10 focus:border-accent-blue/50'
    }`;

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-accent-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-purple/10 rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-cyan" />
            <span className="text-sm font-medium text-gray-300">Contact Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Let's Start a{' '}
            <span className="gradient-text">Conversation</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Tell us about your project and we will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4 reveal">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.label} className="glass-card p-6 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent-blue-light" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">{info.label}</div>
                    <div className="text-sm text-white font-medium">{info.value}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form */}
          <div className="lg:col-span-3 reveal reveal-delay-1">
            <div className="glass-card p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Inquiry Submitted!</h3>
                  <p className="text-gray-400 max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', company: '', service: '', details: '' });
                    }}
                    className="btn-secondary mt-6 text-sm py-2.5 px-5"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                      <input
                        id="name" type="text"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className={inputClass('name')}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-xs text-red-400 mt-1.5">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                      <input
                        id="email" type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={inputClass('email')}
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="text-xs text-red-400 mt-1.5">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone *</label>
                      <input
                        id="phone" type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={inputClass('phone')}
                        placeholder="+1 (555) 000-0000"
                      />
                      {errors.phone && <p className="text-xs text-red-400 mt-1.5">{errors.phone}</p>}
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company</label>
                      <input
                        id="company" type="text"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        className={inputClass('company')}
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Service Required *</label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      className={inputClass('service')}
                    >
                      <option value="" className="bg-navy-900">Select a service</option>
                      {services.map((s) => (
                        <option key={s.title} value={s.title} className="bg-navy-900">{s.title}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-xs text-red-400 mt-1.5">{errors.service}</p>}
                  </div>

                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-gray-300 mb-2">Project Details *</label>
                    <textarea
                      id="details"
                      rows={4}
                      value={formData.details}
                      onChange={(e) => handleChange('details', e.target.value)}
                      className={`${inputClass('details')} resize-none`}
                      placeholder="Tell us about your project goals, timeline, and budget..."
                    />
                    {errors.details && <p className="text-xs text-red-400 mt-1.5">{errors.details}</p>}
                  </div>

                  <button type="submit" className="btn-primary w-full py-3.5">
                    Submit Inquiry
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

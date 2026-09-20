import {
  Globe, Code2, Smartphone, BrainCircuit, Workflow, Palette,
  Cloud, Layers, Megaphone,
  ShieldCheck, Zap, BadgeDollarSign, Rocket, TrendingUp, Headset,
  Search, PenTool, LayoutGrid, Code as CodeIcon, Rocket as LaunchIcon,
  HeartPulse, GraduationCap, ShoppingBag, Building2, Landmark, Hotel,
  Factory, Store,
} from 'lucide-react';

export const services = [
  { icon: Globe, title: 'Website Development', desc: 'Fast, responsive, SEO-optimized websites built with modern frameworks to elevate your online presence.' },
  { icon: Code2, title: 'Web App Development', desc: 'Scalable web applications tailored to your business workflows with real-time data and rich interactivity.' },
  { icon: Smartphone, title: 'Mobile App Development', desc: 'Native and cross-platform mobile apps for iOS and Android with seamless user experiences.' },
  { icon: BrainCircuit, title: 'AI Solutions', desc: 'Integrate AI-powered features like chatbots, predictive analytics, and intelligent automation into your products.' },
  { icon: Workflow, title: 'Business Automation', desc: 'Streamline operations with custom automation systems that reduce manual work and boost efficiency.' },
  { icon: Palette, title: 'UI/UX Design', desc: 'Human-centered design that blends aesthetics with usability to create memorable digital experiences.' },
  { icon: Cloud, title: 'Cloud Solutions', desc: 'Migrate, deploy, and manage cloud infrastructure on AWS, Azure, and Google Cloud with confidence.' },
  { icon: Layers, title: 'Software Development', desc: 'Custom software built to solve your unique challenges — from internal tools to enterprise platforms.' },
  { icon: Megaphone, title: 'Digital Marketing', desc: 'Data-driven marketing strategies including SEO, PPC, and content to grow your audience and revenue.' },
];

export const techCategories = [
  { name: 'Frontend', techs: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { name: 'Backend', techs: ['Node.js', 'Python', 'Go', 'Java', 'GraphQL', 'REST APIs'] },
  { name: 'Database', techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'MySQL', 'Elasticsearch'] },
  { name: 'Cloud', techs: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Vercel'] },
  { name: 'AI & Automation', techs: ['OpenAI', 'TensorFlow', 'LangChain', 'PyTorch', 'n8n', 'Zapier'] },
  { name: 'Design', techs: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'Design Systems', 'Wireframing'] },
];

export const whyChooseUs = [
  { icon: ShieldCheck, title: 'Custom Solutions', desc: 'Every project is built from the ground up to match your specific business needs — no templates, no shortcuts.' },
  { icon: Zap, title: 'Modern Technology', desc: 'We use the latest frameworks and tools to ensure your product is fast, secure, and future-proof.' },
  { icon: BadgeDollarSign, title: 'Transparent Pricing', desc: 'Clear, upfront quotes with no hidden fees. You know exactly what you are paying for at every stage.' },
  { icon: Rocket, title: 'Fast Delivery', desc: 'Agile development cycles mean you see progress quickly and launch sooner without sacrificing quality.' },
  { icon: TrendingUp, title: 'Scalable Solutions', desc: 'Built to grow with your business — from your first user to your millionth, without rewrites.' },
  { icon: Headset, title: 'Dedicated Support', desc: 'A committed team available before, during, and after launch to keep everything running smoothly.' },
];

export const processSteps = [
  { num: '01', icon: Search, title: 'Discover', desc: 'We dive deep into your business, goals, and challenges to understand exactly what you need.' },
  { num: '02', icon: PenTool, title: 'Plan', desc: 'We craft a detailed roadmap with milestones, timelines, and deliverables aligned to your objectives.' },
  { num: '03', icon: LayoutGrid, title: 'Design', desc: 'We create intuitive designs and prototypes that you can review and refine before development.' },
  { num: '04', icon: CodeIcon, title: 'Develop', desc: 'Our engineers build your solution with clean, tested code and regular progress updates.' },
  { num: '05', icon: LaunchIcon, title: 'Launch & Support', desc: 'We deploy, monitor, and support your product post-launch to ensure long-term success.' },
];

export const industries = [
  { icon: HeartPulse, name: 'Healthcare' },
  { icon: GraduationCap, name: 'Education' },
  { icon: ShoppingBag, name: 'E-commerce' },
  { icon: Building2, name: 'Real Estate' },
  { icon: Landmark, name: 'Finance' },
  { icon: Hotel, name: 'Hospitality' },
  { icon: Factory, name: 'Manufacturing' },
  { icon: Store, name: 'Small Businesses' },
];

export const projects = [
  { name: 'MediTrack Health Portal', industry: 'Healthcare', desc: 'A patient management platform with appointment scheduling, telemedicine, and AI-assisted diagnostics.' },
  { name: 'LearnHub LMS', industry: 'Education', desc: 'A learning management system with live classes, progress tracking, and gamified student engagement.' },
  { name: 'ShopWave E-commerce', industry: 'E-commerce', desc: 'A high-performance online store with AI product recommendations and one-click checkout.' },
  { name: 'EstateVue Platform', industry: 'Real Estate', desc: 'A property listing platform with virtual tours, mortgage calculators, and agent CRM integration.' },
  { name: 'FinFlow Banking App', industry: 'Finance', desc: 'A digital banking dashboard with budget tracking, AI insights, and secure transaction processing.' },
  { name: 'StayEasy Booking System', industry: 'Hospitality', desc: 'A hotel reservation system with real-time availability, dynamic pricing, and guest management.' },
];

export const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, BrightPath Health',
    rating: 5,
    text: 'TechNova Solutions transformed our patient portal into a seamless digital experience. Their team understood our healthcare requirements and delivered ahead of schedule. The AI diagnostics feature has been a game-changer for our clinic.',
  },
  {
    name: 'James Anderson',
    role: 'Founder, ShopWave Retail',
    rating: 5,
    text: 'Working with TechNova was the best decision we made for our e-commerce platform. The site is incredibly fast, and the AI product recommendations boosted our conversion rate by 40%. Their support team is always responsive.',
  },
  {
    name: 'Priya Sharma',
    role: 'CTO, FinFlow Technologies',
    rating: 5,
    text: 'The banking dashboard TechNova built for us is both beautiful and secure. They handled complex financial integrations with ease and maintained transparent communication throughout. I highly recommend them for fintech projects.',
  },
];

export const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '10+', label: 'Industries Served' },
  { value: '5+', label: 'Years Experience' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Projects', href: '#projects' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
];

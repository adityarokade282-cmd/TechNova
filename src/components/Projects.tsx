import { projects } from '@/data/siteData';
import { ArrowRight } from 'lucide-react';

const projectImages = [
  'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7013241/pexels-photo-7013241.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/6406691/pexels-photo-6406691.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/7821349/pexels-photo-7821349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative overflow-hidden bg-navy-900/30">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-accent-purple/10 rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-blue-light" />
            <span className="text-sm font-medium text-gray-300">Our Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
            Projects &{' '}
            <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A look at some of the digital products we have built for clients across different industries.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={`glass-card overflow-hidden group reveal reveal-delay-${(i % 3) + 1}`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={projectImages[i]}
                  alt={project.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white bg-accent-blue/30 backdrop-blur-md border border-white/10">
                  {project.industry}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent-blue-light transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">
                  {project.desc}
                </p>
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue-light hover:gap-3 transition-all">
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

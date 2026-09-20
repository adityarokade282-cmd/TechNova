import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Technology from '@/components/Technology';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Industries from '@/components/Industries';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-navy-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Technology />
        <WhyChooseUs />
        <Process />
        <Industries />
        <Projects />
        <Testimonials />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

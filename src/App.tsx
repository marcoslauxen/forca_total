import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ArrowUp } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Schedule from './components/Schedule';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  const [heroRef, heroInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [benefitsRef, benefitsInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [plansRef, plansInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [testimonialsRef, testimonialsInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);

      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isScrolled={isScrolled} activeSection={activeSection} />

      <div ref={heroRef}>
        <Hero heroInView={heroInView} />
      </div>

      <div ref={benefitsRef}>
        <Benefits benefitsInView={benefitsInView} />
      </div>

      <div ref={plansRef}>
        <Plans plansInView={plansInView} />
      </div>

      <div ref={testimonialsRef}>
        <Testimonials testimonialsInView={testimonialsInView} />
      </div>

      <Gallery />
      <Schedule />
      <FAQ />
      <Contact />
      <Footer />

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition duration-300"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default App;

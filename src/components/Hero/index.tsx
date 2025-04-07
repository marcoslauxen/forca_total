import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Stats from './Stats';

interface HeroProps {
  heroInView: boolean;
}

const Hero: React.FC<HeroProps> = ({ heroInView }) => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          className="w-full h-full object-cover"
          alt="Academia"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="max-w-3xl">
          <motion.h1 
            className="hero-title text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
          >
            Transforme seu corpo.<br />
            <span className="text-red-500">Supere seus limites.</span>
          </motion.h1>
          <motion.p 
            className="hero-subtitle text-xl md:text-2xl text-gray-200 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
          >
            Na Força Total, você encontra a estrutura completa e o suporte necessário
            para alcançar seus objetivos. Comece sua transformação hoje mesmo!
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
          >
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={scrollToContact}
            >
              Agende uma aula gratuita
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.a 
              href="#planos"
              className="btn-secondary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              Conheça nossos planos
              <ChevronDown className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
      <Stats heroInView={heroInView} />
    </section>
  );
};

export default Hero;
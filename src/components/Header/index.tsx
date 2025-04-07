import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, ArrowRight, Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  isScrolled: boolean;
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ isScrolled, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Dumbbell
              className={`w-8 h-8 ${
                isScrolled ? 'text-red-600' : 'text-white'
              }`}
            />
            <span
              className={`ml-2 text-xl font-bold ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              FORÇA TOTAL
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <motion.div
              className="flex items-center space-x-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <a
                href="#home"
                className={`nav-link ${
                  activeSection === 'home' ? 'active' : ''
                } ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                Home
              </a>
              <a
                href="#beneficios"
                className={`nav-link ${
                  activeSection === 'beneficios' ? 'active' : ''
                } ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                Benefícios
              </a>
              <a
                href="#planos"
                className={`nav-link ${
                  activeSection === 'planos' ? 'active' : ''
                } ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                Planos
              </a>
              <a
                href="#estrutura"
                className={`nav-link ${
                  activeSection === 'estrutura' ? 'active' : ''
                } ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                Estrutura
              </a>
              <a
                href="#contato"
                className={`nav-link ${
                  activeSection === 'contato' ? 'active' : ''
                } ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                Contato
              </a>
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                onClick={scrollToContact}
              >
                Aula Grátis
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </nav>

          <button
            className="md:hidden text-white z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              />
            )}
          </button>
        </div>

        <MobileMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          onContactClick={scrollToContact}
        />
      </div>
    </header>
  );
};

export default Header;

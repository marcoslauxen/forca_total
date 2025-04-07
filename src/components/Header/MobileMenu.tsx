import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onContactClick }) => {
  const handleContactClick = () => {
    onClose();
    onContactClick();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={onClose}
          />
          <motion.nav
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex justify-end mb-8">
              <motion.button 
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <X className="w-6 h-6 text-gray-600 hover:text-red-600 transition-colors" />
              </motion.button>
            </div>
            <div className="flex flex-col">
              <a href="#home" className="mobile-nav-link" onClick={onClose}>Home</a>
              <a href="#beneficios" className="mobile-nav-link" onClick={onClose}>Benefícios</a>
              <a href="#planos" className="mobile-nav-link" onClick={onClose}>Planos</a>
              <a href="#estrutura" className="mobile-nav-link" onClick={onClose}>Estrutura</a>
              <a href="#contato" className="mobile-nav-link" onClick={onClose}>Contato</a>
              <motion.button 
                className="btn-primary mt-8"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                onClick={handleContactClick}
              >
                Aula Grátis
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
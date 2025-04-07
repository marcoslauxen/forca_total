import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Instagram, Facebook, Youtube } from 'lucide-react';

const schedule = [
  { day: 'Segunda a Sexta', hours: '06:00 às 23:00' },
  { day: 'Sábados', hours: '08:00 às 18:00' },
  { day: 'Domingos', hours: '08:00 às 14:00' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Dumbbell className="w-8 h-8 text-red-500" />
              <span className="ml-2 text-xl font-bold">FORÇA TOTAL</span>
            </div>
            <p className="text-gray-400">
              Transformando vidas através do esporte e bem-estar desde 2010.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#planos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Planos
                </a>
              </li>
              <li>
                <a
                  href="#estrutura"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Estrutura
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Horários</h3>
            <ul className="space-y-4">
              {schedule.map((item, index) => (
                <li key={index} className="text-gray-400">
                  <span className="block font-medium text-white">
                    {item.day}
                  </span>
                  {item.hours}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Redes Sociais</h3>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              &copy; 2025 Academia Força Total. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';

interface StatsProps {
  heroInView: boolean;
}

const Stats: React.FC<StatsProps> = ({ heroInView }) => {
  return (
    <motion.div 
      className="stats-bar hidden md:block"
      initial={{ opacity: 0, y: 20 }}
      animate={heroInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-4 gap-8">
          <motion.div 
            className="text-center text-white"
            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          >
            <div className="text-3xl font-bold">+1000</div>
            <div className="text-sm">Alunos Ativos</div>
          </motion.div>
          <motion.div 
            className="text-center text-white"
            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          >
            <div className="text-3xl font-bold">2000m²</div>
            <div className="text-sm">De Estrutura</div>
          </motion.div>
          <motion.div 
            className="text-center text-white"
            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          >
            <div className="text-3xl font-bold">+20</div>
            <div className="text-sm">Professores</div>
          </motion.div>
          <motion.div 
            className="text-center text-white"
            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
          >
            <div className="text-3xl font-bold">+15</div>
            <div className="text-sm">Modalidades</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Stats;
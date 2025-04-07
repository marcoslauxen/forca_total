import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Users, Target, Heart, Trophy, Zap } from 'lucide-react';

interface BenefitsProps {
  benefitsInView: boolean;
}

const benefits = [
  {
    icon: <Gauge className="w-12 h-12" />,
    title: 'Ambiente Premium',
    description:
      'Academia totalmente climatizada com equipamentos de última geração',
    stats: '2000m² de área',
    progress: 100,
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: 'Equipe Especializada',
    description: 'Profissionais certificados e constantemente atualizados',
    stats: '+20 professores',
    progress: 95,
  },
  {
    icon: <Target className="w-12 h-12" />,
    title: 'Treino Personalizado',
    description: 'Programas adaptados aos seus objetivos específicos',
    stats: '100% focado',
    progress: 90,
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: 'Área Cardio',
    description: 'Equipamentos modernos para treino aeróbico completo',
    stats: '+30 equipamentos',
    progress: 85,
  },
  {
    icon: <Trophy className="w-12 h-12" />,
    title: 'Aulas Coletivas',
    description: 'Diversas modalidades de aulas em grupo',
    stats: '+15 modalidades',
    progress: 88,
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: 'Área Funcional',
    description: 'Espaço dedicado para treino funcional e CrossTraining',
    stats: '300m² exclusivos',
    progress: 92,
  },
];

const Benefits: React.FC<BenefitsProps> = ({ benefitsInView }) => {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.2 }}
        >
          <h2 className="section-title">Nossos Diferenciais</h2>
          <p className="section-subtitle">
            Oferecemos uma estrutura completa e moderna para você alcançar seus
            objetivos com mais eficiência e conforto.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card"
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.1 } }}
            >
              <div className="text-red-600 mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <div className="text-sm font-semibold text-red-600 mb-4">
                {benefit.stats}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="bg-red-600 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={
                    benefitsInView ? { width: `${benefit.progress}%` } : {}
                  }
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

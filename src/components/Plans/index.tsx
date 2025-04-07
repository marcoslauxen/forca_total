import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface PlansProps {
  plansInView: boolean;
}

const plans = [
  {
    id: 'mensal',
    name: 'Plano Mensal',
    price: 'R$ 129,90',
    period: '/mês',
    features: [
      'Acesso total à academia',
      'Aulas em grupo',
      'Área de musculação',
      'Área de cardio',
      'Avaliação física',
    ],
  },
  {
    id: 'trimestral',
    name: 'Plano Trimestral',
    price: 'R$ 349,90',
    period: '/trimestre',
    popular: true,
    features: [
      'Todos os benefícios do plano mensal',
      'Economia de 10%',
      'Programa personalizado',
      'App de treino exclusivo',
      'Acompanhamento nutricional',
    ],
  },
  {
    id: 'anual',
    name: 'Plano Anual',
    price: 'R$ 1.199,90',
    period: '/ano',
    features: [
      'Todos os benefícios do plano trimestral',
      'Economia de 25%',
      '2 aulas com personal trainer',
      'Kit exclusivo Força Total',
      'Prioridade de horário',
    ],
  },
];

const Plans: React.FC<PlansProps> = ({ plansInView }) => {
  const handlePlanSelect = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="planos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={plansInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.2 }}
        >
          <h2 className="section-title">Nossos Planos</h2>
          <p className="section-subtitle">
            Escolha o plano que melhor se adapta aos seus objetivos e comece sua
            transformação hoje mesmo.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative card ${
                plan.popular
                  ? 'border-2 border-red-500 transform scale-105'
                  : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={plansInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.1 } }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={plansInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.2, delay: idx * 0.1 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                className={`w-full ${
                  plan.popular ? 'btn-primary' : 'btn-secondary'
                } hover:scale-105 active:scale-95`}
                onClick={handlePlanSelect}
                whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              >
                Começar Agora
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;

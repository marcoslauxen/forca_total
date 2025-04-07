import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const faqs = [
  {
    question: 'Preciso agendar horário para treinar?',
    answer:
      'Não é necessário agendar horário para treinos na área de musculação. Para aulas coletivas, recomendamos reserva prévia através do nosso aplicativo.',
  },
  {
    question: 'Qual o tempo mínimo de contrato?',
    answer:
      'Não exigimos tempo mínimo de permanência. Você pode escolher o plano que melhor se adapta às suas necessidades.',
  },
  {
    question: 'Oferecem acompanhamento nutricional?',
    answer:
      'Sim! O acompanhamento nutricional está incluso nos planos trimestral e anual, com nutricionistas especializados em nutrição esportiva.',
  },
];

const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Perguntas Frequentes</h2>
          <p className="section-subtitle">
            Tire suas dúvidas sobre a Academia Força Total
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start">
                  <Info className="w-6 h-6 text-red-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

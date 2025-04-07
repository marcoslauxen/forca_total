import React from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy } from 'lucide-react';

interface TestimonialsProps {
  testimonialsInView: boolean;
}

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'Aluno há 1 ano',
    text: 'Melhor decisão que tomei! Em 6 meses consegui resultados incríveis com a ajuda dos professores. A estrutura é impecável e o ambiente super motivador.',
    image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    achievement: '-15kg em 6 meses'
  },
  {
    name: 'Ana Paula',
    role: 'Aluna há 8 meses',
    text: 'Academia completa, equipamentos novos e equipe super atenciosa. O acompanhamento personalizado fez toda diferença nos meus resultados!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    achievement: '+5kg de massa magra'
  },
  {
    name: 'Roberto Martins',
    role: 'Aluno há 6 meses',
    text: 'Estrutura de primeira e profissionais muito capacitados. As aulas em grupo são excelentes e os horários flexíveis!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
    rating: 5,
    achievement: 'Superou lesão no joelho'
  }
];

const Testimonials: React.FC<TestimonialsProps> = ({ testimonialsInView }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.2 }}
        >
          <h2 className="section-title">O que dizem nossos alunos</h2>
          <p className="section-subtitle">
            Histórias reais de pessoas que transformaram suas vidas na Força Total.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.1 } }}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
              <motion.div 
                className="bg-red-50 p-3 rounded-lg flex items-center"
                whileHover={{ scale: 1.02, transition: { duration: 0.1 } }}
              >
                <Trophy className="w-5 h-5 text-red-500 mr-2" />
                <span className="text-red-700 font-medium">{testimonial.achievement}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
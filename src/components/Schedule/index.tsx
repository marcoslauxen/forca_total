import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const schedule = [
  { day: 'Segunda a Sexta', hours: '06:00 às 23:00' },
  { day: 'Sábados', hours: '08:00 às 18:00' },
  { day: 'Domingos', hours: '08:00 às 14:00' },
];

const Schedule: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Horário de Funcionamento
            </h2>
            <p className="text-gray-600 mb-8">
              Oferecemos horários flexíveis para você treinar no momento mais
              conveniente do seu dia.
            </p>
            <div className="space-y-6">
              {schedule.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-4 bg-gray-50 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Clock className="w-6 h-6 text-red-500 mr-4" />
                  <div>
                    <div className="font-semibold">{item.day}</div>
                    <div className="text-gray-500">{item.hours}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Academia"
              className="rounded-2xl shadow-2xl"
            />
            <motion.div
              className="absolute -bottom-8 -left-8 bg-red-500 text-white p-6 rounded-2xl shadow-xl"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold mb-2">+1000</div>
              <div className="text-sm">Alunos Satisfeitos</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;

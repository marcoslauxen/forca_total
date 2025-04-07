import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  return (
    <section id="estrutura" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Nossa Estrutura</h2>
          <p className="section-subtitle">
            Conheça nosso espaço com mais de 2000m² totalmente equipado para sua
            melhor experiência.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-8">
            <motion.img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Área de musculação"
              className="gallery-image h-64"
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Área de cardio"
              className="gallery-image h-96"
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            />
          </div>
          <div className="space-y-8">
            <motion.img
              src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Área funcional"
              className="gallery-image h-96"
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Sala de spinning"
              className="gallery-image h-64"
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            />
          </div>
          <div className="space-y-8">
            <motion.img
              src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Vestiário"
              className="gallery-image h-64"
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1591291621164-2c6367723315?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              alt="Área de treino"
              className="gallery-image h-96"
              whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

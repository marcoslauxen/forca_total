import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    plan: 'mensal',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      localStorage.setItem('contactForm', JSON.stringify(formData));
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        plan: 'mensal',
      });
    } catch {
      alert('Erro ao enviar mensagem. Por favor, tente novamente.');
    }
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Entre em Contato</h2>
            <p className="text-gray-600 mb-8">
              Tire suas dúvidas ou agende uma aula experimental gratuita. Nossa
              equipe está pronta para te atender!
            </p>
            <div className="space-y-6">
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.02 }}
              >
                <MapPin className="w-6 h-6 text-red-500 mr-4" />
                <div>
                  <div className="font-semibold">Endereço</div>
                  <div className="text-gray-500">
                    Av. Principal, 1000 - Centro
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.02 }}
              >
                <Phone className="w-6 h-6 text-red-500 mr-4" />
                <div>
                  <div className="font-semibold">Telefone</div>
                  <div className="text-gray-500">(11) 99999-9999</div>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.02 }}
              >
                <Mail className="w-6 h-6 text-red-500 mr-4" />
                <div>
                  <div className="font-semibold">E-mail</div>
                  <div className="text-gray-500">contato@forcatotal.com</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="card">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="plan"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Plano de Interesse
                  </label>
                  <select
                    id="plan"
                    value={formData.plan}
                    onChange={(e) =>
                      setFormData({ ...formData, plan: e.target.value })
                    }
                    className="input-field"
                  >
                    <option value="mensal">Plano Mensal</option>
                    <option value="trimestral">Plano Trimestral</option>
                    <option value="anual">Plano Anual</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="input-field"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="btn-primary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar Mensagem
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

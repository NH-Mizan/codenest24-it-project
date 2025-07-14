'use client';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: '/icons/monitoring.svg',
    title: 'System Monitoring & Maintenance',
    description: 'Proactive monitoring of your IT environment ensures that potential issues...',
  },
  {
    id: 2,
    icon: '/icons/cloud.svg',
    title: 'Cloud Solutions',
    description: 'Unlock the power of cloud computing with comprehensive solutions...',
  },
  {
    id: 3,
    icon: '/icons/server.svg',
    title: 'Network & Server Management',
    description: 'We manage and maintain your network infrastructure and servers...',
  },
  {
    id: 4,
    icon: '/icons/backup.svg',
    title: 'Data Backup & Disaster Recovery',
    description: 'Your data is one of your most valuable assets. We offer reliable backup...',
  },
];

const features = [
  'Application Development is one of the most popular services in our company.',
  'Digital Marketing is one of the most demanding services.',
  'Cyber Security is one of the most secure services.',
  'Networking is one of our strongest services.',
];

export default function Services() {
  return (
    <section className="w-11/12 max-w-7xl mx-auto py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
      
      {/* Left: Service Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {services.map((card, i) => (
          <motion.div
            key={card.id}
            className="p-6 bg-white rounded-xl border shadow hover:shadow-lg transition hover:scale-[1.03]"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <img src={card.icon} alt={card.title} className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{card.description}</p>
            <button className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center">
              →
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Right: Textual Content */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h4 className="text-orange-500 font-semibold">OUR SERVICES</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          BEST IT SOLUTION FOR YOUR BUSINESS
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Empowering businesses with seamless networking solutions, robust hardware support,
          and dynamic multimedia services. From website design to software development,
          we deliver tailored IT solutions for your success.
        </p>

        <ul className="space-y-2 text-gray-800">
          {features.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="text-orange-500 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium mt-4"
        >
          Explore Services →
        </motion.button>
      </motion.div>
    </section>
  );
}

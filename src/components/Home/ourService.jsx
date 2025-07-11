'use client';
import { FaCheckCircle } from "react-icons/fa";
import { motion } from 'framer-motion';

const serviceCards = [
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

const serviceList = [
  'Application Development is of The Most Popular Service In our Company',
  'Digital Marketing is of The Most Demanding Service In our Company',
  'Cyber Security is of The Secure Service In our Company',
  'Networking is One of The Strong Service In our Company',
];

// Framer Motion animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

export default function Services() {
  return (
    <section className="w-11/12 max-w-7xl mx-auto py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Left: Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {serviceCards.map((card, i) => (
          <motion.div
            key={card.id}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="p-6 bg-white rounded-xl border shadow hover:shadow-lg transition"
          >
            <img src={card.icon} alt={card.title} className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-bold mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{card.description}</p>
            <button className="w-8 h-8 rounded-full bg-color color-wt flex items-center justify-center">
              →
            </button>
          </motion.div>
        ))}
      </div>

      {/* Right: Textual Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeLeft}
        className="space-y-6"
      >
        <h4 className="color-py font-semibold">OUR SERVICES</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          BEST IT SOLUTION FOR YOUR BUSINESS
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Empowering businesses with seamless networking solutions, robust hardware support, and dynamic multimedia services. From website design to software development, we deliver tailored IT solutions for your success.
          Trust us for reliable IT manpower outsourcing, efficient management operations, and cutting-edge cloud solutions.
        </p>

        <ul className="space-y-2 text-gray-800">
          {serviceList.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <FaCheckCircle className="color-py mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <button className="bg-color  color-wt px-6 py-3 rounded-full font-medium mt-4">
          Explore Services →
        </button>
      </motion.div>
    </section>
  );
}

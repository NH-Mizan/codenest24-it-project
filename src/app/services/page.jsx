'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Web Design & Development',
    description: 'Custom-designed responsive websites built with performance and user experience in mind.',
    icon: '/services/web.svg',
  },
  {
    id: 2,
    title: 'Cloud Infrastructure',
    description: 'Secure and scalable cloud hosting, DevOps, and CI/CD pipelines for modern applications.',
    icon: '/services/cloud.svg',
  },
  {
    id: 3,
    title: 'Cyber Security',
    description: 'Protect your business with real-time monitoring, firewalls, and threat detection solutions.',
    icon: '/services/security.svg',
  },
  {
    id: 4,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps tailored to your business and customer needs.',
    icon: '/services/mobile.svg',
  },
  {
    id: 5,
    title: 'Digital Marketing',
    description: 'Grow your brand with targeted SEO, social media strategy, and paid ad campaigns.',
    icon: '/services/marketing.svg',
  },
  {
    id: 6,
    title: 'Tech Consultancy',
    description: 'Get expert advice on scaling, digital transformation, architecture, and best practices.',
    icon: '/services/consulting.svg',
  },
];

export default function OurServices() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-100 to-white w-11/12 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-gray-800"
        >
          Our Services
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Empowering your business with tailored digital solutions designed to scale, secure, and succeed.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-lg p-6 rounded-xl shadow-md hover:shadow-xl transition hover:scale-[1.03]"
          >
            <div className="w-14 h-14 mb-4">
              <Image
                src={service.icon}
                alt={service.title}
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

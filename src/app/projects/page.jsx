'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Find It Zone',
    description: 'A platform to find blood donors and manage emergency services.',
    image: '/projects/findit.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Match Nest',
    description: 'A modern matchmaking web app for people and communities.',
    image: '/projects/matchnest.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Crowd Founding',
    description: 'Secure & scalable donation and fundraising system with payment gateway.',
    image: '/projects/crowd.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'TechCare CRM',
    description: 'A CRM dashboard for IT service companies with task tracking.',
    image: '/projects/crm.jpg',
    link: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 w-11/12 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Our Recent Projects</h2>
        <p className="text-gray-500 max-w-xl mx-auto mt-4">
          Explore some of the high-impact projects we’ve proudly delivered to our clients.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-2xl transition"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-4">
              <h3 className="text-white text-xl font-bold">{project.title}</h3>
              <p className="text-white text-sm">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

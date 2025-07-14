'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Md. Nahid Hasan',
    position: 'Frontend Developer',
    image: '/team/nahid.jpg',
    social: {
      facebook: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 2,
    name: 'Shakil Ahmed',
    position: 'Backend Engineer',
    image: '/team/shakil.jpg',
    social: {
      facebook: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 3,
    name: 'Rimjhim Khatun',
    position: 'UI/UX Designer',
    image: '/team/rimjhim.jpg',
    social: {
      facebook: '#',
      linkedin: '#',
      github: '#',
    },
  },
  {
    id: 4,
    name: 'Arafat Hossain',
    position: 'Project Manager',
    image: '/team/arafat.jpg',
    social: {
      facebook: '#',
      linkedin: '#',
      github: '#',
    },
  },
];

export default function TeamSection() {
  return (
    <section className="w-11/12 max-w-7xl mx-auto py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h4 className="text-green-500 font-semibold uppercase">Our Team</h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Expert Team</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Our talented and passionate team of professionals work round the clock to deliver outstanding results.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="overflow-hidden group relative">
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Optional social icons on hover */}
              {/* <div className="absolute bottom-2 right-2">...</div> */}
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.position}</p>
              {/* Future: social icons */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

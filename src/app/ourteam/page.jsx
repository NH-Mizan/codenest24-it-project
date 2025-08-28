'use client';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

const teamMembers = [
 
  {
    id: 2,
    name: 'Rafsan Janni',
    position: 'CEO',
    image: '/images/ceo.jpeg',
    facebook: '#',
    linkedin: '#',
    github: '#',
  },
   {
    id: 1,
    name: 'Nahid Hasan',
    position: 'Full Stack Developer',
    image: '/images/nahid.png',
    facebook: '#',
    linkedin: '#',
    github: '#',
  },
  {
    id: 3,
    name: 'MJ Towfik',
    position: 'Backend Developer',
    image: '/images/toufik.jpg',
    facebook: '#',
    linkedin: '#',
    github: '#',
  },
  {
    id: 4,
    name: 'Razwan Ahammad',
    position: 'Social Media & Community Manager',
    image: '/images/babuvai.png',
    facebook: '#',
    linkedin: '#',
    github: '#',
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 mt-10">
      <div className="w-11/12 max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800"
        >
          Meet Our Team
        </motion.h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          We’re a passionate team of engineers, creatives, and strategists building digital excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-11/12 max-w-7xl mx-auto">
        {teamMembers.map((member, i) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gre bg-opacity-30 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
          >
            <div className="relative group">
              <Image
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                className="rounded-full w-40 h-40 object-cover mx-auto group-hover:scale-105 transition duration-500"
              />

              {/* Social Icons */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-500 flex gap-3 bg-white p-2 rounded-full shadow">
                <a href={member.facebook} target="_blank" rel="noreferrer">
                  <FaFacebookF className="text-blue-600 hover:scale-110 transition" />
                </a>
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedinIn className="text-blue-700 hover:scale-110 transition" />
                </a>
                <a href={member.github} target="_blank" rel="noreferrer">
                  <FaGithub className="text-gray-800 hover:scale-110 transition" />
                </a>
              </div>
            </div>

            <div className="text-center mt-6">
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.position}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

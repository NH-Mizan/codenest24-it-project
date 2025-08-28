
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const aboutData = {
  title: 'About CodeNest24',
  tagline: 'We Build, We Scale, We Support — 24/7',
  description: `
    CodeNest24 is a full-service IT agency dedicated to transforming your digital presence. 
    With a team of skilled developers, designers, and strategists, we deliver tailored tech solutions 
    to startups, SMEs, and enterprises across the globe.
  `,
  mission: 'Our mission is to deliver secure, scalable, and modern technology services that grow your business.',
  vision: 'We envision a future where innovation meets execution — helping businesses evolve in the digital age.',
  image: '/images/what.jpeg',
};

export default function AboutUs() {
  return (
    <section className="w-11/12  mx-auto py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-10">
      {/* Left Content with animation */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h4 className="color-py font-medium text-sm uppercase tracking-wide">
          About Us
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          {aboutData.title}
        </h2>
        <p className="text-lg text-gray-600 font-medium">
          {aboutData.tagline}
        </p>
        <p className="text-gray-700 leading-relaxed">{aboutData.description}</p>

        <div className="border-l-4 border-green-400 pl-4 text-gray-700">
          <p><strong>Mission:</strong> {aboutData.mission}</p>
          <p className="mt-2"><strong>Vision:</strong> {aboutData.vision}</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-color hover:bg-green-600 text-white px-6 py-3 rounded-full transition font-medium mt-4"
        >
          Learn More →
        </motion.button>
      </motion.div>

      {/* Right Image with animation */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <Image
          src={aboutData.image}
          alt="About Us Image"
          width={500}
          height={500}
          className="rounded-xl shadow-xl w-full object-cover"
        />
      </motion.div>
    </section>
  );
}

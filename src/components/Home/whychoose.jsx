'use client';
import { motion } from "framer-motion";
import { FaShieldAlt, FaAward, FaUsers, FaClock, FaStar, FaChartLine } from "react-icons/fa";

const chooseData = [
  {
    id: 1,
    icon: <FaShieldAlt className="w-8 h-8 text-yellow-400" />,
    title: "Unmatched Security",
    desc: "Enterprise-grade security protocols with 99.9% uptime guarantee and advanced encryption to protect your valuable data.",
  },
  {
    id: 2,
    icon: <FaAward className="w-8 h-8 text-yellow-400" />,
    title: "Industry Excellence",
    desc: "Award-winning solutions recognized by industry leaders, with certifications from top global organizations.",
  },
  {
    id: 3,
    icon: <FaUsers className="w-8 h-8 text-yellow-400" />,
    title: "Expert Team",
    desc: "Dedicated professionals with decades of combined experience, providing personalized support and consultation.",
  },
  {
    id: 4,
    icon: <FaClock className="w-8 h-8 text-yellow-400" />,
    title: "24/7 Support",
    desc: "Round-the-clock premium support with guaranteed response times and dedicated account management.",
  },
  {
    id: 5,
    icon: <FaStar className="w-8 h-8 text-yellow-400" />,
    title: "Premium Quality",
    desc: "Meticulously crafted solutions using cutting-edge technology and best practices for superior performance.",
  },
  {
    id: 6,
    icon: <FaChartLine className="w-8 h-8 text-yellow-400" />,
    title: "Proven Results",
    desc: "Track record of delivering exceptional outcomes with measurable ROI and client satisfaction rates above 98%.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16   text-gray-100">
      <div className="w-11/12 mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Why <span className="color-py">Choose Us</span>
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Experience the difference that comes with partnering with industry leaders.
          We deliver excellence through innovation, expertise, and unwavering commitment to your success.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {chooseData.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-gre color-sd rounded-2xl p-8 border border-slate-700 hover:border-green-400 shadow-lg hover:shadow-green-400/20 transition-all group"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-slate-700/60 mb-6 group-hover:bg-green-400/10 transition">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-green-400 transition">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              <div className="mt-4 w-12 h-0.5 bg-green-400 group-hover:w-20 transition-all"></div>
            </motion.div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-green-400  text-gray-900 font-semibold shadow-lg hover:scale-105 transition">
            Get Started Today
          </button>
          <button className="px-6 py-3 rounded-lg border border-[#495db7] color-sd hover:border-green-400 hover:text-green-400 transition">
            Learn More
          </button>
        </div>

        <p className="mt-6 text-gray-500 text-sm">
          Join thousands of satisfied clients worldwide
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;

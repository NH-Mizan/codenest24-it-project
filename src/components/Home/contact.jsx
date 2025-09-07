"use client";
import { motion } from "framer-motion";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiSparkleLight } from "react-icons/pi";

export default function ContactUs() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center  overflow-hidden">
      {/* Background tiny dots */}
     

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1 mb-6 border border-teal-400 text-teal-400 rounded-full text-sm font-medium"
        >
          <PiSparkleLight className="h-4 w-4" />
          Premium Digital Solutions
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Ready to Transform Your Digital{" "}
          <span className="text-teal-400">Presence?</span>
        </motion.h1>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-gray-400"
        >
          Let's collaborate to create innovative solutions that drive your business forward.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-2 text-sm text-gray-500"
        >
          Experience excellence in every pixel, every interaction, every detail.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400  text-black font-semibold shadow-lg hover:opacity-90 transition">
            Start Your Project →
          </button>
          <button className="px-6 py-3 rounded-xl border border-yellow-500  font-semibold shadow-lg hover:bg-yellow-500/20 transition flex items-center">
            <FaRegCalendarAlt className="h-4 w-4 mr-2" />
            Schedule Consultation
          </button>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400"
        >
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal-400"></span>
            Free Consultation
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
            24/7 Support
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-teal-400"></span>
            100% Satisfaction Guarantee
          </span>
        </motion.div>
      </div>
    </section>
  );
}

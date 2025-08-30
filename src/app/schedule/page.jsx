"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCalendarAlt, FaClock, FaPaperPlane } from "react-icons/fa";

export default function BookingSection() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");

  return (
    <section className="w-full min-h-screen mt-20 py-16 px-6">
      <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side - Booking Calendar */}
        <div className=" bg-gre rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <FaCalendarAlt className="text-indigo-600" />
            Book Your Appointment
          </h2>
          <p className="text-gray-500 mt-2">
            Choose a date and time that works best for you. All times are shown
            in your local timezone.
          </p>

          {/* Calendar */}
          <div className="mt-6 bg-white rounded-2xl border border-gray-200 p-4 shadow-inner">
            <Calendar onChange={setDate} value={date} />
          </div>

          {/* Time Picker */}
          <div className="mt-6">
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
              <FaClock className="text-indigo-600" />
              Select Time
            </label>
            <select
              className="w-full border rounded-xl px-4 py-3 shadow-sm bg-gray-50 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="">-- Select a time --</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
            </select>
          </div>

          {/* Selected Date/Time */}
          <div className="mt-6 text-sm text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-200">
            <p>
              <span className="font-medium">📅 Date:</span>{" "}
              {Array.isArray(date)
                ? `${date[0].toDateString()} - ${
                    date[1]?.toDateString() || ""
                  }`
                : date?.toDateString()}
            </p>
            <p>
              <span className="font-medium">⏰ Time:</span>{" "}
              {time || "Not Selected"}
            </p>
            <p className="mt-1 text-gray-500 text-xs">Timezone: Asia/Dhaka</p>
          </div>

          {/* Button */}
          <button className="mt-6 w-full shadow-xl bg-gradient-to-r from-teal-400 color-sd hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition transform hover:-translate-y-0.5 hover:shadow-xl">
            Confirm Appointment
          </button>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gre p-8 rounded-3xl shadow-xl">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us Your Details
          </h3>
          <form className="space-y-5">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />

            {/* Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-indigo-400 focus:outline-none">
                <option value="">Select Project Type</option>
                <option value="web">Web Development</option>
                <option value="design">UI/UX Design</option>
                <option value="ecommerce">E-commerce</option>
              </select>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-indigo-400 focus:outline-none">
                <option value="">Select Budget</option>
                <option value="500">$500 - $1000</option>
                <option value="1000">$1000 - $5000</option>
                <option value="5000">$5000+</option>
              </select>
            </div>

            {/* Message */}
            <textarea
              placeholder="Enter your message..."
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            ></textarea>

            {/* Captcha */}
            <div className="bg-gray-100 text-gray-500 p-4 rounded-xl text-sm border border-dashed border-gray-300">
              🔒 reCAPTCHA Placeholder
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl shadow-xl bg-gradient-to-r from-teal-400 color-sd font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

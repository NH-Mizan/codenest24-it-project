export default function WhatDo() {
  return (
    <section className="w-11/12 mx-auto py-16">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            What We Do
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            At <span className="font-semibold color-py">Code Nest 24</span>, we provide 24/7 IT services designed to empower businesses with reliable, scalable, and secure technology solutions.
            Our team of experts is dedicated to supporting your organization’s IT needs around the clock, ensuring your operations run smoothly, without interruptions.
            <br /><br />
            We manage your IT infrastructure day and night — including servers, networks, and data centers — to ensure seamless operation and quick troubleshooting when needed. Our team guarantees high availability and optimal performance across all platforms.
          </p>
          <button className="bg-color hover:bg-color color-wt px-6 py-3 rounded-full transition font-medium">
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src="/images/what.jpeg"
            alt="What we do"
            className="w-full max-w-lg mx-auto rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

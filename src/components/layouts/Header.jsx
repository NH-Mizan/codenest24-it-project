"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-gre  shadow-md z-50">
      <div className="w-11/12 mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" className="h-10 w-auto" />
          
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium opacity-100  color-py">
          <Link href="/" className=" transition">Home</Link>
          <Link href="/aboutus" className=" transition">About</Link>
          <Link href="/services" className=" transition">Services</Link>
          <Link href="/ourteam" className=" transition">Our Team</Link>
          <Link href="/projects" className=" transition">Projects</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/schedule" className="px-4 py-2 rounded-lg bg-color text-white transition">
            Support
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-[5px] focus:outline-none"
        >
          <span className={`w-6 h-[2px] bg-gray-800 rounded transition ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`w-6 h-[2px] bg-gray-800 rounded transition ${isOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-[2px] bg-gray-800 rounded transition ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner">
          <nav className="flex flex-col items-center gap-4 py-4 font-medium text-gray-700">
            <Link href="/" onClick={() => setIsOpen(false)} className="transition">Home</Link>
            <Link href="/aboutus" onClick={() => setIsOpen(false)} className=" transition">About</Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className=" transition">Services</Link>
            <Link href="/ourteam" onClick={() => setIsOpen(false)} className=" transition">Our Team</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)} className=" transition">Projects</Link>
            <Link
              href="/schedule"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-lg bg-gre text-white  transition"
            >
              Support
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

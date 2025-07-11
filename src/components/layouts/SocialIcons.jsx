'use client';
import { useState } from 'react';
import { FaXmark, FaPhone, FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa6';

export default function SocialIcons({ contact }) {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <div className="fixed bottom-16 right-4 z-50 flex flex-col items-end gap-3">
      {/* Toggle Button */}
      {!showIcons ? (
        <button
          onClick={() => setShowIcons(true)}
          className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition"
          title="Contact Us"
        >
          <img
            src="/images/mg.png"
            alt="Message Icon"
            className="w-6 h-6"
          />
        </button>
      ) : (
        <button
          onClick={() => setShowIcons(false)}
          className="bg-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:rotate-90 transition"
          title="Hide"
        >
          <FaXmark className="w-5 h-5" />
        </button>
      )}

      {/* Social Buttons */}
      {showIcons && (
        <div className="flex flex-col gap-3 items-end">
          <a
            href={`tel:${contact?.hotline || ''}`}
            className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-md hover:scale-110 transition"
            title="Call"
          >
            <FaPhone className="w-5 h-5" />
          </a>

          <a
            href={`https://api.whatsapp.com/send?phone=${contact?.whatsapp || ''}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center shadow-md hover:scale-110 transition"
            title="WhatsApp"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>

          <a
            href={contact?.facebook_link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center shadow-md hover:scale-110 transition"
            title="Messenger"
          >
            <FaFacebookMessenger className="w-5 h-5" />
          </a>
        </div>
      )}
    </div>
  );
}

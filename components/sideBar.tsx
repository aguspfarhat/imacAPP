"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <div className="hidden md:block fixed top-1/2 -translate-y-1/2 left-0 z-50 group">
      <div className="flex flex-col bg-[#1f3b5b]/90 backdrop-blur-md rounded-r-2xl overflow-hidden shadow-lg transition-all duration-300 w-[55px] group-hover:w-[160px]">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/imac.tucuman/"
          target="_blank"
          className="flex items-center gap-3 px-4 py-4 text-white bg-gradient-to-r from-[#ff5a3c] to-[#e53935] hover:brightness-110"
        >
          <FaInstagram className="min-w-[18px] text-white" />
          <span className="opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap text-sm">
            Instagram
          </span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/imacimagenes/"
          target="_blank"
          className="flex items-center gap-3 px-4 py-4 text-white bg-gradient-to-r from-[#ff5a3c] to-[#e53935] hover:brightness-110"
        >
          <FaFacebookF className="min-w-[18px] text-white" />
          <span className="opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap text-sm">
            Facebook
          </span>
        </a>

        {/* Whatsapp */}
        <a
          href="https://wa.me/5493812031975"
          target="_blank"
          className="flex items-center gap-3 px-4 py-4 text-white bg-gradient-to-r from-[#ff5a3c] to-[#e53935] hover:brightness-110"
        >
          <FaWhatsapp className="min-w-[18px] text-white" />
          <span className="opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap text-sm">
            WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <section>
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 ">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* LOGO */}
        <div>
          <Image
            src="/logoNavbar.png"
            alt="Logo IMAC"
            width={45}
            height={40}
            className="object-cover object-[75%_center]"
            priority
          />
        </div>

        {/* LINKS (DESKTOP - IGUAL QUE ANTES) */}
        <div className="hidden md:flex gap-8 text-base font-semibold">
          <Link
            href="#inicio"
            className="relative hover:text-[#e53935] transition
              after:content-[''] after:absolute after:left-0 after:-bottom-1
              after:w-0 after:h-[2px] after:bg-[#e53935]
              after:transition-all after:duration-300
              hover:after:w-full"
          >
            Inicio
          </Link>
          <Link
            href="#estudios"
            className="relative hover:text-[#e53935] transition
              after:content-[''] after:absolute after:left-0 after:-bottom-1
              after:w-0 after:h-[2px] after:bg-[#e53935]
              after:transition-all after:duration-300
              hover:after:w-full"
          >
            Estudios
          </Link>
          <Link
            href="#servicios"
            className="relative hover:text-[#e53935] transition
              after:content-[''] after:absolute after:left-0 after:-bottom-1
              after:w-0 after:h-[2px] after:bg-[#e53935]
              after:transition-all after:duration-300
              hover:after:w-full"
          >
            Servicios
          </Link>
          <Link
            href="#obrasSociales"
            className="relative hover:text-[#e53935] transition
              after:content-[''] after:absolute after:left-0 after:-bottom-1
              after:w-0 after:h-[2px] after:bg-[#e53935]
              after:transition-all after:duration-300
              hover:after:w-full"
          >
            Obras sociales
          </Link>
          <Link
            href="#contacto"
            className="relative hover:text-[#e53935] transition
              after:content-[''] after:absolute after:left-0 after:-bottom-1
              after:w-0 after:h-[2px] after:bg-[#e53935]
              after:transition-all after:duration-300
              hover:after:w-full"
          >
            Contacto
          </Link>
        </div>

        {/* BOTÓN (DESKTOP - IGUAL QUE ANTES) */}
        <div className="hidden md:block">
          <Link
            href="https://wa.me/5493812031975"
            target="_blank"
            className="inline-flex items-center gap-2 
              bg-gradient-to-r from-[#ff5a3c] to-[#e53935] 
              text-white px-5 py-2 rounded-lg text-sm font-medium 
              transition-transform duration-300 hover:scale-105"
          >
            <FaWhatsapp className="text-white text-base" />
            Solicitar turno
          </Link>
        </div>

        {/* HAMBURGUESA */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-2xl text-[#e53935]"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      
    </header>
    <div
     onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 top-16 z-50 bg-white/10 backdrop-blur-md transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 text-base font-semibold">
          <Link href="#inicio" onClick={() => setOpen(false)}>
            Inicio
          </Link>
          <Link href="#estudios" onClick={() => setOpen(false)}>
            Estudios
          </Link>
          <Link href="#servicios" onClick={() => setOpen(false)}>
            Servicios
          </Link>
          <Link href="#obrasSociales" onClick={() => setOpen(false)}>
            Obras sociales
          </Link>
          <Link href="#contacto" onClick={() => setOpen(false)}>
            Contacto
          </Link>

          {/* REDES SOLO MOBILE */}
          <div className="flex gap-6 text-xl">
            <a href="https://www.instagram.com/imac.tucuman/" target="_blank" className="hover:text-[#e53935]">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/imacimagenes/" target="_blank" className="hover:text-[#e53935]">
              <FaFacebookF />
            </a>
          </div>

          {/* BOTÓN WHATSAPP */}
          <Link
            href="https://wa.me/5493812031975"
            target="_blank"
            className="inline-flex items-center gap-2 
              bg-gradient-to-r from-[#ff5a3c] to-[#e53935] 
              text-white px-6 py-3 rounded-lg font-medium 
              transition-transform duration-300 hover:scale-105"
          >
            <FaWhatsapp />
            Solicitar turno
          </Link>
        </div>
      </div>
      </section>
  );
}
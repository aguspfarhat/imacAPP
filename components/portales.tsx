"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Portales() {
  return (
    <section className="relative z-30 mt-24 px-6">
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Accedé a tus estudios digitales
      </motion.h2>

      <motion.div
        className="w-10 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#ff5a3c] to-[#e53935]"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
      />

      <div className="w-full flex justify-center mt-12">
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4">
          
          {/* Portal Paciente */}
          <Link
            href="https://miportal.imactucuman.pentalogic.ar/ecos/miportal/"
            className="w-full sm:w-auto flex items-center justify-between gap-6 px-8 py-5 rounded-2xl 
            bg-gradient-to-r from-[#ff5a3c] to-[#e53935] text-white 
            text-lg md:text-xl font-semibold shadow-lg 
            transition-transform duration-300 hover:scale-105 min-w-[280px]"
          >
            <div className="flex items-center gap-4 justify-center sm:justify-start w-full sm:w-auto">
              <Image
                src="/pacienteLogo.png"
                alt="Logo Paciente"
                width={40}
                height={40}
              />
              <span>Portal Paciente</span>
            </div>
            <span className="text-xl">→</span>
          </Link>

          {/* Portal Médico */}
          <Link
            href="https://pacs.imactucuman.pentalogic.ar/ecos/pacsexplorerwsp/index.php?e=1"
            className="w-full sm:w-auto flex items-center justify-between gap-6 px-8 py-5 rounded-2xl 
            bg-[#07579f] text-white 
            text-lg md:text-xl font-semibold shadow-lg 
            transition-transform duration-300 hover:scale-105 min-w-[280px]"
          >
            <div className="flex items-center gap-4 justify-center sm:justify-start w-full sm:w-auto">
              <Image
                src="/medicoLogo.png"
                alt="Logo Medico"
                width={40}
                height={40}
              />
              <span>Portal Médico</span>
            </div>
            <span className="text-xl">→</span>
          </Link>

        </div>
      </div>
    </section>
  );
}
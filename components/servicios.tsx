"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const servicios = [
  {
    titulo: "Resonancia Magnética",
    descripcion:
      "Estudio de alta precisión que utiliza un potente campo magnético y ondas de radio para obtener imágenes detalladas del interior del cuerpo. Es ideal para evaluar tejidos blandos como cerebro, columna, músculos y órganos, sin emplear radiación.",
    icono: "/resonancia.webp",
  },
  {
    titulo: "Tomografía Computada",
    descripcion:
      "Tecnología avanzada de diagnóstico por imágenes que combina múltiples cortes radiográficos para generar reconstrucciones en alta definición. Permite una evaluación rápida y precisa de órganos, huesos y estructuras internas.",
    icono: "/tomografia.avif",
  },
  {
    titulo: "Ecografía",
    descripcion:
      "Método diagnóstico no invasivo que emplea ultrasonido para visualizar órganos y estructuras en tiempo real. Es un estudio seguro, sin radiación, ampliamente utilizado en controles generales, abdominales y obstétricos.",
    icono: "/ecografia.jpg",
  },
  {
    titulo: "Rayos X",
    descripcion:
      "Estudio ágil y eficaz que utiliza radiación en bajas dosis para obtener imágenes del interior del cuerpo. Es fundamental para la evaluación de estructuras óseas, pulmones y diversas patologías.",
    icono: "/rayosx.jpg",
  },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="w-full px-6 md:px-16 py-20 bg-white scroll-mt-24"
    >
      {/* TITULO */}
      <div className="text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Nuestros Servicios
        </motion.h2>

        <motion.div
          className="w-10 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#ff5a3c] to-[#e53935]"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        />
      </div>

      {/* GRID */}
      <motion.div
        className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 justify-items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15, // 🔥 efecto escalonado
            },
          },
        }}
      >
        {servicios.map((servicio, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center text-center 
            transition-all duration-300 hover:scale-105 hover:shadow-xl 
            max-w-[260px] w-full mx-auto min-h-[320px] justify-between"
          >
            {/* ICONO */}
            <div className="mb-4">
              <Image
                src={servicio.icono}
                alt={servicio.titulo}
                width={200}
                height={60}
              />
            </div>

            {/* TITULO */}
            <h3 className="text-lg font-semibold">{servicio.titulo}</h3>

            {/* DESCRIPCION */}
            <p className="text-sm text-gray-600 mt-2">
              {servicio.descripcion}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
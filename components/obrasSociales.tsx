"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ObraSocial = {
  id: number;
  nombre: string;
  logo: string;
  width?: number;
  height?: number;
};

const obrasSociales: ObraSocial[] = [
  { id: 1, nombre: "PAMI", logo: "/logoPAMI.png", width: 150, height: 50 },
  { id: 2, nombre: "BOREAL", logo: "/logoBOREAL.jpg", width: 150, height: 50 },
  { id: 3, nombre: "OSDE", logo: "/logoOSDE.jpg", width: 170, height: 60 },
  {
    id: 4,
    nombre: "Swiss Medical",
    logo: "/logoSWISS.png",
    width: 170,
    height: 60,
  },
  
  { id: 6, nombre: "Medifé", logo: "/logoMEDIFE.jpg", width: 150, height: 55 },
  { id: 8, nombre: "Sancor", logo: "/logoSANCOR.png", width: 150, height: 55 },
  { id: 5, nombre: "Galeno", logo: "/logoGALENO.jpg", width: 200, height: 50 },
  { id: 7, nombre: "Prensa", logo: "/logoPRENSA.png", width: 100, height: 55 },
];

export default function ObrasSociales() {
  return (
    <section
      id="obras"
      className="w-full flex justify-center py-16 scroll-mt-24"
    >
      <div className="w-full max-w-6xl px-6 md:px-16">
        {/* TÍTULO */}
        <div className="text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Obras Sociales
          </motion.h2>

          <motion.div
            className="w-10 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#ff5a3c] to-[#e53935]"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
          />
        </div>

        {/* LOGOS */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-x-8 md:gap-x-12 gap-y-8 md:gap-y-10 mt-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {obrasSociales.map((obra) => (
            <motion.div
              key={obra.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center opacity-80 hover:opacity-100 transition duration-300"
            >
              <Image
                src={obra.logo}
                alt={obra.nombre}
                width={obra.width ?? 100}
                height={obra.height ?? 50}
                className="object-contain grayscale hover:grayscale-0 transition 
                  w-[90px] md:w-auto h-auto"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* BOTÓN */}
        <motion.div
          className="w-full flex flex-col items-center justify-center gap-4 mt-7"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Link
            href="/Listado de Obras Sociales IMAC.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#ff5a3c] to-[#e53935] text-white px-8 py-4 rounded-lg text-base font-medium text-center transition-transform duration-300 hover:scale-105"
          >
            Para ver todas las obras sociales que recibimos haz click acá
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

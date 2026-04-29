"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import {motion} from 'framer-motion';

export default function Contacto() {
  return (
    <section className="w-full px-6 md:px-16 py-20 bg-white">
      
      {/* Contenedor */}
      <div className="max-w-6xl mx-auto">
        
        {/* Título */}
        <div className="text-center mb-12">
          <motion.h2
        className="text-3xl md:text-4xl font-semibold text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Contacto
      </motion.h2>
      <motion.div
        className="w-10 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-[#ff5a3c] to-[#e53935]"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
      />
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* IZQUIERDA */}
          <div className="flex flex-col gap-6 text-[#1f3b5b] max-w-sm">
            
            <div className="flex items-start gap-3">
              <MapPin className="text-[#e53935]" />
              <div>
                <p className="font-semibold">Ubicación</p>
                <p className="text-sm text-gray-600">
                  Santiago del Estero 158 <br />
                  San Miguel de Tucumán, Argentina
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="text-[#e53935]" />
              <div>
                <p className="font-semibold">Teléfono y mail</p>
                <p className="text-sm font-bold">
                  Whatsapp
                </p>
                <p className="text-sm text-gray-600">
                  381 203 1975
                </p>
                <p className="text-sm font-bold">
                  Teléfono fijo
                </p>
                <p className="text-sm text-gray-600">
                  421-1118
                </p>
                <p className="text-sm text-gray-600">
                  255-4441
                </p>
                <p className="text-sm font-bold">
                  Mail
                </p>
                <p className="text-sm text-gray-600">
                  tac.rmn@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="text-[#e53935]" />
              <div>
                <p className="font-semibold">Horarios de atención</p>
                <p className="text-sm text-gray-600">
                  Lunes a Viernes: 8 a 22 hs <br />
                  Sábados: 9 a 18 hs
                </p>
              </div>
            </div>

            {/* BOTÓN */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Santiago+del+Estero+158+San+Miguel+de+Tucumán"
              target="_blank"
              className="mt-4 inline-block text-center bg-gradient-to-r from-[#ff5a3c] to-[#e53935] text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition"
            >
              Cómo llegar
            </a>
          </div>

          {/* MAPA CENTRADO */}
          <div className="flex justify-center w-full">
            <div className="w-full max-w-[650px] h-[320px] md:h-[380px] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps?q=Santiago%20del%20Estero%20158,%20San%20Miguel%20de%20Tucum%C3%A1n&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
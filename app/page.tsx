import Image from "next/image";
import Hero from "@/components/hero";
import Turnos from "@/components/turnos";
import Portales from "@/components/portales";
import Servicios from "@/components/servicios";
import ObrasSociales from "@/components/obrasSociales";
import Contacto from "@/components/contacto";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="pt-16">
      <section id="inicio" className="scroll-mt-24">
        <Hero />
      </section>

      <section id="turnos">
        <Turnos />
      </section>
      
      <section id="estudios" className="scroll-mt-20">
        <Portales />
      </section>

<div className="flex justify-center my-16">
    <div className="w-24 md:w-40 h-[2px] bg-gradient-to-r from-transparent via-[#e53935] to-transparent opacity-100 rounded-full" />
  </div>

      <section id="servicios">
        <Servicios />
      </section>

<div className="flex justify-center my-5">
    <div className="w-24 md:w-40 h-[2px] bg-gradient-to-r from-transparent via-[#e53935] to-transparent opacity-100 rounded-full" />
  </div>

      <section id="obrasSociales" className="scroll-mt-4">
        <ObrasSociales />
      </section>

      <div className="flex justify-center my-5">
    <div className="w-24 md:w-40 h-[2px] bg-gradient-to-r from-transparent via-[#e53935] to-transparent opacity-100 rounded-full" />
  </div>

      <section id="contacto">
        <Contacto />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}

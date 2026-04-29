import Link from "next/link";
import Image from "next/image";

export default function Turnos() {
  return (
    <section className="w-full flex justify-center px-6 md:px-16 -mt-16 relative z-10">
      <div className="w-full max-w-5xl bg-gradient-to-r from-[#ff5a3c] to-[#e53935] rounded-2xl shadow-xl px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left transition-transform duration-300 hover:scale-105">
        
        {/* IZQUIERDA */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          
          {/* ICONO */}
          <div className="flex justify-center">
            <Image
              src="/calendarLogo.png"
              alt="Logo Calendario"
              width={50}
              height={60}
              className="object-cover object-[75%_center]"
              priority
            />
          </div>

          {/* TEXTO */}
          <div>
            <h3 className="text-white font-semibold text-lg">TURNOS</h3>
            <p className="text-white/90 text-sm">
              Sacá tu turno de manera rápida <br className="hidden md:block" />
              y sencilla por WhatsApp.
            </p>
          </div>
        </div>

        {/* SEPARADOR */}
        <div className="hidden md:block w-px h-12 bg-white/40" />

        {/* BOTÓN */}
        <div className="md:mr-32 flex justify-center">
          <Link
            href="https://wa.me/5493812031975"
            target="_blank"
            className="bg-white text-[#e53935] px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:bg-gray-100 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/logoWP.png"
              alt="Logo WhatsApp"
              width={35}
              height={35}
              className="object-cover object-[75%_center]"
              priority
            />
            Ir a WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
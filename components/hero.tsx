import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[750px] flex items-center px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/home2.png"
          alt="Centro médico IMAC"
          fill
          className="object-cover object-[83%_center] md:object-[75%_center]"
          priority
        />
      </div>

      {/* GRADIENTE IZQUIERDA */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" /> */}

      {/* GRADIENTE ABAJO */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80" /> */}

      {/* CONTENIDO */}
      <div className="relative max-w-xl z-10 w-full text-center md:text-left md:ml-52 mb-20">
        
        {/* LOGO */}
        <div className="flex justify-center md:block md:ml-28">
          <Image
            src="/logoHome.png"
            alt="Logo IMAC"
            width={200}
            height={35}
            className="object-cover object-[75%_center]"
            priority
          />
        </div>

        <h1 className="text-3xl text-[#ffffff] md:text-5xl font-bold leading-tight mt-4 md:text-[#07579f]">
          Imágenes médicas <br />
          <span className="bg-gradient-to-r from-[#ff5a3c] to-[#e53935] bg-clip-text text-transparent">
            de alta complejidad
          </span>
        </h1>

        <p className="mt-4 text-sm text-[#ffffff] md:text-lg font-semibold md:text-[#07579f]">
          Tecnología avanzada y un equipo profesional <br />
          para brindarte la mejor atención.
        </p>
      </div>
    </section>
  );
}
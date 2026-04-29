// import Image from "next/image";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative w-full min-h-[750px] flex items-center px-6 md:px-16 overflow-hidden">
//       <div className="absolute inset-0">
//         <Image
//           src="/homeImage.jpg"
//           alt="Centro médico IMAC"
//           fill
//           className="object-cover object-[75%_center]"
//           priority
//         />
//       </div>

//       {/* GRADIENTE IZQUIERDA (principal) */}
//       <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />

//       {/* GRADIENTE ABAJO (suave, no invasivo) */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80" />

//       {/* CONTENIDO */}
//       <div className="relative max-w-xl z-10 ml-0 md:ml-52 mb-20">
//         <div className="ml-28">
//           <Image
//             src="/logoIMAC.png"
//             alt="Logo IMAC"
//             width={200}
//             height={35}
//             className="object-cover object-[75%_center]"
//             priority
//           />
//         </div>

//         <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//           Imágenes médicas <br />
//           <span className="bg-gradient-to-r from-[#ff5a3c] to-[#e53935] bg-clip-text text-transparent">
//             de alta complejidad
//           </span>
//         </h1>

//         <p className="mt-4 text-sm md:text-lg font-semibold">
//           Tecnología avanzada y un equipo profesional <br />
//           para brindarte la mejor atención.
//         </p>

        
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[750px] flex items-center px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/homeImage.jpg"
          alt="Centro médico IMAC"
          fill
          className="object-cover object-[75%_center]"
          priority
        />
      </div>

      {/* GRADIENTE IZQUIERDA */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />

      {/* GRADIENTE ABAJO */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80" />

      {/* CONTENIDO */}
      <div className="relative max-w-xl z-10 w-full text-center md:text-left md:ml-52 mb-20">
        
        {/* LOGO */}
        <div className="flex justify-center md:block md:ml-28">
          <Image
            src="/logoIMAC.png"
            alt="Logo IMAC"
            width={200}
            height={35}
            className="object-cover object-[75%_center]"
            priority
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-4">
          Imágenes médicas <br />
          <span className="bg-gradient-to-r from-[#ff5a3c] to-[#e53935] bg-clip-text text-transparent">
            de alta complejidad
          </span>
        </h1>

        <p className="mt-4 text-sm md:text-lg font-semibold">
          Tecnología avanzada y un equipo profesional <br />
          para brindarte la mejor atención.
        </p>
      </div>
    </section>
  );
}
// // "use client";

// // import { MapPin, Phone, Mail } from "lucide-react";
// // import Link from "next/link";
// // import Image from "next/image";

// // export default function Footer() {
// //   return (
// //     <footer className="w-full bg-[#1f3b5b] text-white px-6 md:px-16 py-12">
// //       <div className="max-w-6xl mx-auto">
// //         {/* GRID */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
// //           {/* LOGO / DESCRIPCIÓN */}
// //           <div>
// //             <Image
// //               src="/IMACblanco.png"
// //               alt="Logo IMAC"
// //               width={100}
// //               height={35}
// //               className="object-cover object-[75%_center]"
// //               priority
// //             />
// //             <p className="text-sm text-gray-300">
// //               Centro de diagnóstico por imágenes de alta complejidad, brindando
// //               atención profesional y tecnología avanzada.
// //             </p>
// //           </div>

// //           {/* NAVEGACIÓN */}
// //           <div>
// //             <h4 className="font-semibold mb-4">Navegación</h4>
// //             <ul className="flex flex-col gap-2 text-gray-300 text-sm">
// //               <li>
// //                 <Link href="#" className="hover:text-white transition">
// //                   Inicio
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link href="#" className="hover:text-white transition">
// //                   Servicios
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link href="#" className="hover:text-white transition">
// //                   Obras Sociales
// //                 </Link>
// //               </li>
// //               <li>
// //                 <Link href="#" className="hover:text-white transition">
// //                   Contacto
// //                 </Link>
// //               </li>
// //             </ul>
// //           </div>

// //           {/* CONTACTO */}
// //           <div>
// //             <h4 className="font-semibold mb-4">Contacto</h4>

// //             <div className="flex flex-col gap-3 text-sm text-gray-300">
// //               <div className="flex items-start gap-2">
// //                 <MapPin size={16} />
// //                 <p>
// //                   Santiago del Estero 158 <br />
// //                   San Miguel de Tucumán
// //                 </p>
// //               </div>

// //               <div className="flex items-center gap-2">
// //                 <Phone size={16} />
// //                 <p>381 203 1975</p>
// //               </div>

// //               <div className="flex items-center gap-2">
// //                 <Mail size={16} />
// //                 <p>info@imac.com</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* LÍNEA */}
// //         <div className="w-full h-[1px] bg-white/20 my-8"></div>

// //         {/* FOOTER INFERIOR */}
// //         <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
// //           <p>© 2026 IMAC. Todos los derechos reservados.</p>

// //           <p>
// //             Coded by{" "}
// //             <span className="text-white font-semibold">
// //               Agustin Perez Farhat
// //             </span>
// //           </p>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }
// "use client";

// import { MapPin, Phone, Mail } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="w-full bg-[#1f3b5b] text-white px-6 md:px-16 py-12">
//       <div className="max-w-6xl mx-auto">
//         {/* GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-72 justify-items-center md:justify-items-start text-center md:text-left">
//           {/* LOGO / DESCRIPCIÓN */}
//           <div className="max-w-[260px]">
//             <Image
//               src="/IMACblanco.png"
//               alt="Logo IMAC"
//               width={100}
//               height={35}
//               className="object-cover object-[75%_center] mb-4 mx-auto md:mx-0"
//               priority
//             />
//             <p className="text-sm text-gray-300 font-medium">
//               Comprometidos con tu salud.
//             </p>
//           </div>

//           {/* NAVEGACIÓN */}
//           <div className="max-w-[200px] mt-4">
//             <h4 className="font-semibold mb-4">Navegación</h4>
//             <ul className="flex flex-col gap-2 text-gray-300 text-sm">
//               <li>
//                 <Link href="#inicio" className="hover:text-white transition">
//                   Inicio
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#estudios" className="hover:text-white transition">
//                   Estudios
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#servicios" className="hover:text-white transition">
//                   Servicios
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#obrasSociales"
//                   className="hover:text-white transition"
//                 >
//                   Obras Sociales
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#contacto" className="hover:text-white transition">
//                   Contacto
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* CONTACTO */}
//           <div className="max-w-[220px] mt-4">
//             <h4 className="font-semibold mb-4">Contacto</h4>

//             <div className="flex flex-col gap-3 text-sm text-gray-300">
//               <div className="flex items-start gap-2 justify-center md:justify-start">
//                 <MapPin size={16} />
//                 <p>
//                   Santiago del Estero 158, <br />
//                   San Miguel de Tucumán
//                 </p>
//               </div>

//               <div className="flex items-center gap-2 justify-center md:justify-start">
//                 <Phone size={16} />
//                 <p>381 203 1975</p>
//               </div>

//               <div className="flex items-center gap-2 justify-center md:justify-start">
//                 <Mail size={16} />
//                 <p>info@imac.com</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* LÍNEA */}
//         <div className="w-full h-[1px] bg-white/20 my-8"></div>

//         {/* FOOTER INFERIOR */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
//           <p>© 2026 IMAC. Todos los derechos reservados.</p>

//           <p>
//             Coded by{" "}
//             <span className="text-white font-semibold">
//               <Link
//                 href="https://www.linkedin.com/in/agustin-perez-farhat-913069238/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block transition-transform duration-300 hover:scale-103"
//               >
//                 Agustin Perez Farhat
//               </Link>
//             </span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }


"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1f3b5b] text-white px-6 md:px-16 py-12">
      <div className="max-w-6xl mx-auto">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-72 justify-items-center md:justify-items-start text-center md:text-left">
          
          {/* LOGO / DESCRIPCIÓN */}
          <div className="max-w-[260px]">
            <Image
              src="/IMACblanco.png"
              alt="Logo IMAC"
              width={100}
              height={35}
              className="object-cover object-[75%_center] mb-4 mx-auto md:mx-0"
              priority
            />
            <p className="text-sm text-gray-300 font-medium">
              Comprometidos con tu salud.
            </p>
          </div>

          {/* NAVEGACIÓN */}
          <div className="max-w-[200px] mt-6 md:mt-4">
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="flex flex-col gap-2 text-gray-300 text-sm">
              <li><Link href="#inicio" className="hover:text-white transition">Inicio</Link></li>
              <li><Link href="#estudios" className="hover:text-white transition">Estudios</Link></li>
              <li><Link href="#servicios" className="hover:text-white transition">Servicios</Link></li>
              <li><Link href="#obrasSociales" className="hover:text-white transition">Obras Sociales</Link></li>
              <li><Link href="#contacto" className="hover:text-white transition">Contacto</Link></li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div className="max-w-[220px] mt-6 md:mt-4">
            <h4 className="font-semibold mb-4">Contacto</h4>

            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <MapPin size={16} />
                <p>
                  Santiago del Estero 158, <br />
                  San Miguel de Tucumán
                </p>
              </div>

              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Phone size={16} />
                <p>381 203 1975</p>
              </div>

              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Mail size={16} />
                <p>tac.rmn@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* LÍNEA */}
        <div className="w-full h-[1px] bg-white/20 my-8"></div>

        {/* FOOTER INFERIOR */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 md:gap-4 text-sm text-gray-300 text-center md:text-left">
          <p>© 2026 IMAC. Todos los derechos reservados.</p>

          <p>
            Coded by{" "}
            <span className="text-white font-semibold">
              <Link
                href="https://www.linkedin.com/in/agustin-perez-farhat-913069238/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform duration-300 hover:scale-105"
              >
                Agustin Perez Farhat
              </Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
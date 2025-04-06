import Link from "next/link";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SobreMi from "./components/sobreMi";
import ProyectosInteresantes from "./components/proyectosInteresantes";


export default function RootLayout({
}: {
}) {
  return (
    <html lang="es">
      <head>
      </head>
      <body className="bg-gray-100">
        <nav className="bg-black py-2">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link href="/sobreMi" className="text-white">
                SOBRE MÍ
              </Link>
            </li>
            <li>
              <Link href="/curriculumVitae" className="text-white">
                CURRICULUM VITAE
              </Link>
            </li>
            <li>
              <Link href="/proyectosInteresantes" className="text-white">
                PROYECTOS INTERESANTES
              </Link>
            </li>
            <li>
              <Link href="/carreraDportiva" className="text-white">
                CARRERA DEPORTIVA
              </Link>
            </li>
          </ul>
        </nav>
     </body>
    </html>
  );
}
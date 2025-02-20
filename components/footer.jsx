import { links } from "@/data/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-grisSemi py-16">
      <div className="contenedor px-4">
        <div className="flex justify-between flex-wrap">
          <div className="mb-10 lg:mb-0">
            <div className="mb-5">
              <Image
                src="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1738289316/logo-grupo-castillo_lqjs7h.png"
                width="70"
                height="70"
                alt="logo grupo castillo"
              />
            </div>

            <div className="flex items-center gap-2 mb-5 ">
              <MdEmail className="text-2xl text-azulPrimary" />
              <a
                href="mailto:comercializacion.grupocastillo@hotmail.com"
                className="block text-xs  md:text-base poppins-medium  text-gray-500"
              >
                comercializacion.grupocastillo@hotmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 ">
              <FaPhoneAlt className="text-xl text-azulPrimary" />
              <a
                href="tel:+51979906253"
                className="block  tracking-wide text-sm md:text-base poppins-medium text-gray-500"
              >
                +51 979906253
              </a>
            </div>
          </div>
          <div className="mb-10 lg:mb-0">
            <h3 className="text-xl poppins-medium mb-6">ENLACES RÁPIDOS</h3>
            <ul>
              {links.map((link) => (
                <li
                  key={link.id}
                  className="mb-2 text-[1.0625rem] text-gray-500"
                >
                  <Link href={link.url}>{link.nombre}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl poppins-medium mb-6">DATOS CORPORATIVOS</h3>

            <div>
              <p className="text-grisText mb-5">
                <span className="text-[#656565] poppins-medium">RUC :</span> 20
                606156252
              </p>

              <p className="text-grisText mb-5">
                <span className="text-[#656565] poppins-medium">
                  Planta Productiva :{" "}
                </span>
                Cantera Tres Tomas S/N - <br />
                Mesones Muro – Ferreñafe
              </p>

              <p className="text-grisText mb-5">
                <span className="text-[#656565] poppins-medium">
                  Domicilo Fiscal :
                </span>{" "}
                Av. General Álvarez de <br /> Arenales Nro. 931 Dpto. 302 Urb.
                Santa <br /> Beatriz, Lima – Lima – Lima
              </p>

              <p className="text-grisText mb-5">
                <span className="text-[#656565] poppins-medium">
                  Oficina :{" "}
                </span>{" "}
                Mz. 19 Lt. 05, P.J. Chosica del Norte, <br /> La Victoria –
                Chiclayo – Lambayeque
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

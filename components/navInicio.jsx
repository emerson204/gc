import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function NavInicio({ ruta, nombre }) {
  return (
    <section className="mt-7 md:mt-8 lg:mt-10">
      <div className="contenedor px-4 flex items-center gap-3 md:text-lg ">
        <Link href="/" className="text-gray-500">
          Inicio
        </Link>
        <MdKeyboardArrowRight className="text-gray-500" />
        <Link href={ruta}>{nombre}</Link>
      </div>
    </section>
  );
}

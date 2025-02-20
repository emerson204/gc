import Link from "next/link";
import React from "react";

export default function BtnContactoFlotante() {
  return (
    <Link
      href="/contacto"
      className="bg-azulPrimary text-white block w-full text-center poppins-semibold  md:text-xl lg:text-[1.325rem] py-4 hover:bg-azulHover transition-all duration-300 sticky bottom-0 z-30 uppercase"
    >
      ¡Haz clic para una consulta gratuita!
    </Link>
  );
}

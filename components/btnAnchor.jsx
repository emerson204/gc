import React from "react";

export default function BtnAnchor({ ruta, nombre }) {
  return (
    <a
      href={ruta}
      className="bg-azulPrimary text-white px-4 py-3 md:px-8 lg:py-4 lg:text-[1.0950rem] rounded-sm poppins-medium hover:bg-azulHover transition-all duration-300"
    >
      {nombre}
    </a>
  );
}

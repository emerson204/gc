import React from "react";

export default function Heading({ titulo, descripcion }) {
  return (
    <>
      <h2 className="text-[1.80rem] md:text-[2.5rem] lg:text-[2.75rem] poppins-bold leading-10 md:leading-[3rem] text-azulPrimary">
        {titulo}
      </h2>
      <p className="text-gris md:text-lg mb-6 lg:mb-10">{descripcion}</p>
    </>
  );
}

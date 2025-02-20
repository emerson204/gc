import Image from "next/image";
import React from "react";

export default function LogosEmpresasAsociadas({ imagen, alt, nombre }) {
  return (
    <>
      <Image src={imagen} alt={alt} width="290" height="290" />
      <h3 className="md:mb-3 lg:mb-4  text-xl sm:text-2xl md:text-[1.7rem]  text-center underline underline-offset-2 poppins-semibold uppercase">
        {nombre}
      </h3>
    </>
  );
}

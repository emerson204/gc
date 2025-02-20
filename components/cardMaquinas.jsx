import React from "react";
import Image from "next/image";

export default function CardMaquinas({ imagen, alt, titulo, descripcion }) {
  return (
    <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-black/60 overflow-hidden rounded-lg group h-[13.75rem] md:h-[15.625rem] hover:after:bg-azulPrimary/90 transition-all duration-300">
      <Image
        src={imagen}
        alt={alt}
        width="500"
        height="500"
        className="h-full w-full object-cover"
      />
      <h3 className="group-hover:opacity-0 tracking-wide absolute top-[45%] flex justify-center w-full text-white z-10 text-xl poppins-medium transition-all duration-300 text-center">
        {titulo}
      </h3>
      <p className="opacity-0 group-hover:opacity-100 flex justify-center absolute top-[33%] lg:top-[35%] md:text-lg  w-full text-white z-10 text-center px-3 transition-all duration-300 poppins-medium text-[1.0625rem]">
        {descripcion}
      </p>
    </div>
  );
}

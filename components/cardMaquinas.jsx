import React from "react";
import Image from "next/image";

export default function CardMaquinas({ imagen, alt, titulo }) {
  return (
    <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-black/60 overflow-hidden rounded-lg">
      <Image
        src={imagen}
        alt={alt}
        width="500"
        height="500"
        className="h-full w-full"
      />
      <h3 className="tracking-wide absolute top-[45%] flex justify-center w-full text-white z-10 text-xl poppins-medium">
        {titulo}
      </h3>
    </div>
  );
}

import Image from "next/image";
import React from "react";

export default function CardEleegirnos({
  nombre,
  descripcion,
  className = "",
  imagen,
  alt,
  background = false,
  texto = false,
}) {
  return (
    <div
      className={`${
        background ? "bg-azulPrimary" : "bg-white"
      }  shadow px-5 pb-7`}
    >
      <div
        className={`bg-azulPrimary w-fit px-3 py-[0.875rem] mb-5 ${className}`}
      >
        <Image src={imagen} alt={alt} width="40" height="40" />
      </div>
      <h3
        className={`${
          texto ? "text-white" : "text-azulPrimary "
        } text-[1.375rem] poppins-semibold mb-3 leading-7`}
      >
        {nombre}
      </h3>
      <p className={`${texto ? "text-white" : "text-gray-500"}`}>
        {descripcion}
      </p>
    </div>
  );
}

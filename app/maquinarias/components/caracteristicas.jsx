import React from "react";

export default function Características({ icono: Icono, titulo, descripcion }) {
  return (
    <div className="flex flex-col items-center justify-center shadow px-4 py-7">
      {<Icono className="text-[2.625rem] text-azulPrimary mb-3" />}
      <h3 className="text-xl poppins-semibold text-azulPrimary mb-2 text-center">
        {titulo}
      </h3>
      <p className="text-center text-gray-500">{descripcion}</p>
    </div>
  );
}

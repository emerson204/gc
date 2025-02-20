import React from "react";

export default function InfoIcons({ icono: Icono, texto, info }) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-azulPrimary text-white p-3 rounded-full flex text-xl">
        <Icono />
      </div>
      <div>
        <h3 className="text-lg poppins-medium ">{texto}</h3>
        <p className="text-xs md:text-base">{info}</p>
      </div>
    </div>
  );
}

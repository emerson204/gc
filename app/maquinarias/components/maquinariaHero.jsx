import React from "react";

export default function MaquinariaHero() {
  return (
    <section className="bg-[url('/maquinariahero.jpg')] bg-center bg-cover bg-no-repeat h-[16rem] md:h-[22rem] py-5 relative after:content-[''] after:absolute after:inset-0 after:bg-black/65">
      <div className="contenedor relative z-10 text-white px-4 flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-2 poppins-semibold text-center">
          Maquinaria y Equipos
        </h1>
        <p className="text-center md:text-lg lg:text-xl ">
          Tecnología y rendimiento al servicio de cada proyecto.
        </p>
      </div>
    </section>
  );
}

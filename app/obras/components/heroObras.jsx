import React from "react";

export default function HeroObras() {
  return (
    <section className="bg-[url('/herobra.jpg')] bg-center bg-cover bg-no-repeat h-[16rem] md:h-[22rem] py-5 relative after:content-[''] after:absolute after:inset-0 after:bg-black/65">
      <div className="contenedor relative z-10 text-white px-4 flex flex-col justify-center items-center h-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-2 poppins-semibold text-center">
          Obras Ejecutadas
        </h1>
        <p className="text-center md:text-lg lg:text-xl ">
          Construyendo caminos, conectando el futuro
        </p>
      </div>
    </section>
  );
}

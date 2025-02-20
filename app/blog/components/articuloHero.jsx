import React from "react";

export default function ArticuloHero({ titulo }) {
  return (
    <section className="bg-azulPrimary py-5 md:py-6">
      <div className="contenedor px-4">
        <h1 className="text-[1.375rem] leading-7 md:text-[1.625rem] lg:text-3xl poppins-semibold uppercase text-white">
          {titulo}
        </h1>
      </div>
    </section>
  );
}

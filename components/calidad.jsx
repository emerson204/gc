import React from "react";
import CardsCalidad from "./cardsCalidad";

export default function Calidad() {
  return (
    <section className="bg-grisClaro py-12 md:py-16 lg:py-20">
      <div className="contenedor px-4">
        <div className="grid lg:grid-cols-2 gap-8  lg:gap-5 items-center">
          <div>
            <h2 className="text-[1.80rem] md:text-[2.5rem] lg:text-[2.75rem] poppins-bold leading-10 md:leading-[3rem] text-azulPrimary mb-3 lg:mb-7">
              Ofrecemos calidad y seguridad.
            </h2>
            <p className="lg:leading-7 lg:max-w-[90%]">
              El factor clave de nuestra empresa es la satisfaccion del cliente,
              por ello siempre cuidamos la calidad de nuestros productos y
              servicios, teniendo de referencia las normas tecnicas nacionales y
              los controles de calidad.
            </p>
          </div>
          <CardsCalidad />
        </div>
      </div>
    </section>
  );
}

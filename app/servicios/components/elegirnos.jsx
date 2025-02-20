import Heading from "@/components/heading";
import React from "react";
import CardsElegirnos from "./cardsElegirnos";

export default function Elegirnos() {
  return (
    <section className="pb-12 md:pb-16 lg:pb-24">
      <div className="contenedor px-4">
        <Heading
          titulo="¿Por qué elegirnos?"
          descripcion="Experiencia, tecnología y compromiso en cada obra."
        />

        <CardsElegirnos />
      </div>
    </section>
  );
}

import React from "react";
import Heading from "./heading";

export default function Historia() {
  return (
    <section className="py-10 md:py-14 lg:py-20">
      <div className="contenedor px-4">
        <Heading
          titulo="Nuestra Historia"
          descripcion="Desde nuestros inicios, hemos crecido con compromiso y calidad."
        />
      </div>
    </section>
  );
}

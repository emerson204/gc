import React from "react";
import Heading from "./heading";
import CardServicios from "./cardServicios";
import BtnVerMas from "./btnVerMas";

export default function Servicios() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="contenedor px-4">
        <Heading
          titulo="Nuestros Servicios"
          descripcion="Brindamos calidad y experiencia en cada proyecto"
        />

        <CardServicios />

        <BtnVerMas ruta="/servicios" nombre="Ver más" />
      </div>
    </section>
  );
}

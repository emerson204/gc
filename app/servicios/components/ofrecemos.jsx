import CardServicios from "@/components/cardServicios";
import Heading from "@/components/heading";
import { serviciosData } from "@/data/serviciosData";
import React from "react";

export default function Ofrecemos() {
  return (
    <section className="py-10 md:py-14 lg:py-20">
      <div className="contenedor px-4">
        <Heading
          titulo="¿Qué ofrecemos?"
          descripcion="Servicios de pavimentación con altos estándares de calidad."
        />

        <CardServicios data={serviciosData} />
      </div>
    </section>
  );
}

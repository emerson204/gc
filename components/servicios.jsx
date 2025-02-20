import React from "react";
import Heading from "./heading";
import CardServicios from "./cardServicios";
import BtnVerMas from "./btnVerMas";
import { serviciosData } from "@/data/serviciosData";

export default function Servicios() {
  const serviciosTres = serviciosData.slice(0, 3);
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="contenedor px-4">
        <Heading
          titulo="Nuestros Servicios"
          descripcion="Brindamos calidad y experiencia en cada proyecto"
        />

        <CardServicios data={serviciosTres} />

        <BtnVerMas ruta="/servicios" nombre="Ver más" />
      </div>
    </section>
  );
}

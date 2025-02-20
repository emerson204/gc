import React from "react";
import Heading from "./heading";
import CardObras from "./cardObras";
import BtnVerMas from "./btnVerMas";
import { dataObras } from "@/data/obrasData";

export default function Obras() {
  const obrasInicio = dataObras.slice(0, 3);

  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="contenedor px-4">
        <Heading
          titulo="Obras Ejecutadas"
          descripcion="Proyectos que reflejan excelencia y confianza"
        />

        <CardObras obraImages={obrasInicio} />

        <BtnVerMas ruta="/obras" />
      </div>
    </section>
  );
}

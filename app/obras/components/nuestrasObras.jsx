import CardObras from "@/components/cardObras";
import Heading from "@/components/heading";
import { dataObras } from "@/data/obrasData";
import React from "react";

export default function NuestrasObras() {
  return (
    <section className="pt-10 md:pt-14 lg:pt-20">
      <div className="contenedor px-4">
        <Heading
          titulo="Nuestras Obras"
          descripcion="Construimos calidad en cada proyecto."
        />

        <CardObras obraImages={dataObras} />
      </div>
    </section>
  );
}

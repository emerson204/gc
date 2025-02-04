import React from "react";
import Heading from "./heading";
import Image from "next/image";
import CardMaquinas from "./cardMaquinas";
import BtnVerMas from "./btnVerMas";

export default function Maquinarias() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="contenedor px-4">
        <Heading
          titulo="Maquinaria y Equipos"
          descripcion="Equipos de vanguardia para resultados excepcionales."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-9 lg:gap-10">
          <CardMaquinas
            imagen="/camion.png"
            alt="imagen de un camnion imprimador"
            titulo="CAMION IMPRIMADOR"
          />
          <CardMaquinas
            imagen="/planta.png"
            alt="imagen de planta de asfalto"
            titulo="PLANTA DE ASFALTO"
          />
          <CardMaquinas
            imagen="/cargador.png"
            alt="imagen de un cargador frontal"
            titulo="CARGADOR FRONTAL"
          />
        </div>

        <BtnVerMas ruta="/maquinarias" nombre="Ver más" />
      </div>
    </section>
  );
}

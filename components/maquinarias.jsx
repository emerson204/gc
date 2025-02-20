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
            imagen="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1738882694/camion_ipdqzp.png"
            alt="imagen de un camnion imprimador"
            titulo="CAMION IMPRIMADOR"
            descripcion="Aplica emulsión asfáltica sobre la base antes del asfaltado para mejorar adherencia."
          />
          <CardMaquinas
            imagen="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1738882695/planta-gc_o9b99h.jpg"
            alt="imagen de planta de asfalto"
            titulo="PLANTA DE ASFALTO"
            descripcion="Mezcla y calienta materiales para producir asfalto utilizado en pavimentación."
          />
          <CardMaquinas
            imagen="/cargador.png"
            alt="imagen de un cargador frontal"
            titulo="CARGADOR FRONTAL"
            descripcion="Equipo pesado con pala frontal para cargar, mover y apilar materiales."
          />
        </div>

        <BtnVerMas ruta="/maquinarias" nombre="Ver más" />
      </div>
    </section>
  );
}

import CardMaquinas from "@/components/cardMaquinas";
import Heading from "@/components/heading";
import React from "react";

export default function NuestrasMaquinarias() {
  return (
    <section className="pt-10 md:pt-14 lg:pt-20">
      <div className="contenedor px-4">
        <Heading
          titulo="Nuestras Maquinarias"
          descripcion="Maquinarias y equipos para resultados de alto nivel."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-8 ">
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

          <CardMaquinas
            imagen="/trenasfalto.jpg"
            alt="imagen de tren de asfalto"
            titulo="TREN DE ASFALTO"
            descripcion="Conjunto de máquinas que colocan, compactan y nivelan la mezcla asfáltica en carreteras."
          />

          <CardMaquinas
            imagen="/grua.jpg"
            alt="imagen de grua"
            titulo="GRUA"
            descripcion="Máquina con brazo articulado o telescópico usada para levantar y mover cargas pesadas."
          />

          <CardMaquinas
            imagen="/chancadora.jpg"
            alt="imagen de planta chancadora de agregados"
            titulo="PLANTA CHANCADORA DE AGREGADOS"
            descripcion="Tritura y clasifica piedras para producir agregados usados en construcción."
          />
        </div>
      </div>
    </section>
  );
}

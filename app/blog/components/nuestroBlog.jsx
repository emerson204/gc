import Heading from "@/components/heading";
import React from "react";
import ArticuloBlog from "./articuloBlog";

export default function NuestroBlog() {
  return (
    <section className="py-10 md:py-14 lg:py-20">
      <div className="contenedor px-4">
        <Heading
          titulo="Últimos artículos"
          descripcion="Descubre información clave y mantente actualizado."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9 md:gap-8">
          <ArticuloBlog
            imagen="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1738881304/imprimacion2_u7l6hs.jpg"
            alt="articulo imprimacion"
            titulo="Articulo de Imprimación Asfáltica"
            descripcion=" Consiste en la aplicación de un riego asfáltico sobre la superficie de una base debidamente preparada , con la finalidad de recibir una capa de pavimento asfáltico o de impermeabilizar y evitar la disgregación de la base construida, de acuerdo con estas especificaciones y de conformidad con el proyecto. Incluye la aplicación de arena cuando sea requerido."
            ruta="/blog/imprimacion-asfaltica"
          />
          <ArticuloBlog
            imagen="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1738881304/imprimacion1_ms4zjg.jpg"
            alt="articulo pavimento asfaltico en caliente"
            titulo="Pavimento asfáltico en caliente"
            descripcion="Este trabajo consistirá en la fabricación de mezclas asfálticas en caliente y su colocación en una o más capas sobre una superficie debidamente preparada e imprimada, de acuerdo con estas especificaciones y de conformidad con el Proyecto."
            ruta="/blog/pavimento-caliente"
          />
          <ArticuloBlog
            imagen="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1738881305/imprimacion6_zmkv0y.jpg"
            alt="articulo calidad de trabajo terminado"
            titulo="Calidad de Trabajo Terminado"
            descripcion="El pavimento terminado deberá presentar una superficie uniforme y ajustarse a las rasantes y pendientes establecidas en el Proyecto. La distancia entre el eje del proyecto y el borde de la zona pavimentada no podrá ser, en ningún punto, inferior a la señalada en los planos o la aprobada por el Supervisor."
            ruta="/blog/calidad-trabajo-terminado"
          />
        </div>
      </div>
    </section>
  );
}

import React from "react";
import ArticuloHero from "../components/articuloHero";
import NavBlog from "../components/navBlog";

export default function PageCalidadTrabajoTerminado() {
  return (
    <>
      <ArticuloHero titulo="Calidad de Trabajo Terminado " />
      <NavBlog
        ruta="/blog/calidad-trabajo-terminado"
        nombre="Calidad de Trabajo Terminado "
      />

      <section className="pb-10 md:pb-14 lg:pb-20">
        <div className="contenedor px-4">
          <div className="mb-7">
            <h3 className="text-xl underline poppins-semibold mb-2 text-azulPrimary">
              Calidad en el trabajo terminado
            </h3>
            <p className="mb-2">
              El pavimento terminado deberá presentar una superficie uniforme y
              ajustarse a las rasantes y pendientes establecidas en el Proyecto.
              La distancia entre el eje del proyecto y el borde de la zona
              pavimentada no podrá ser, en ningún punto, inferior a la señalada
              en los planos o la aprobada por el Supervisor.
            </p>
            <p>
              Se considerará como "lote" que se aceptará o rechazará en bloque,
              la obra ejecutada por jornada de trabajo, en la cual el Supervisor
              efectuará los controles indicados a continuación:
            </p>
          </div>
          <div className="mb-7">
            <h3 className="text-xl underline poppins-semibold mb-2 text-azulPrimary">
              1. Tasa de aplicación
            </h3>
            <p className="mb-4">
              En sitios ubicados al azar se efectuarán en cada una de las capas
              de tratamiento y diariamente, como mínimo 3 determinaciones de las
              tasas de aplicación de ligante y agregados pétreos. Las tasas
              medias de aplicación de ligante (TML) y de agregados (TMA) por
              jornada, no podrán variar en más de 10% de las aprobadas por el
              Supervisor como resultado del tramo de prueba (TPL y TPA) y
              Formula de Trabajo aprobada.
            </p>
            <p className="text-lg poppins-medium text-center">
              0,9 TPL ≤ TML ≤ 1,1 TPL <br />
              0,9 TPA ≤ TMA ≤ 1,1 TPA
            </p>
          </div>
          <div className="mb-7">
            <h3 className="text-xl underline poppins-semibold mb-2 text-azulPrimary">
              2. Textura
            </h3>
            <p className="mb-4">
              Por jornada se efectuarán, como mínimo, dos determinaciones de la
              resistencia al deslizamiento (MTC E1004) y de la profundidad de
              textura con el círculo de arena (MTC E1005). En relación con la
              primera, ningún valor individual podrá ser inferior a 0,45 y en
              cuanto a la segunda, el promedio de las dos lecturas deberá ser,
              cuando menos, igual a 1,2 mm, sin que ninguno de los valores
              individuales sea inferior a 1,0 mm.
            </p>
          </div>
          <div className="mb-7">
            <h3 className="text-xl underline poppins-semibold mb-2 text-azulPrimary">
              3. Rugosidad
            </h3>
            <p className="mb-2">
              Se entenderá que la superficie del pavimento tiene una rugosidad
              aceptable, si el promedio por km o fracción tienen un valor de IRI
              igual o inferior a 2,5 m/km, salvo que la especificación
              particular establezca un límite diferente.
            </p>
            <p>
              Todas las áreas con defectos de calidad y que excedan las
              tolerancias indicadas en el presente numeral, deberán ser
              reconstruidas por el Contratista, a su cuenta, costo y riesgo, de
              acuerdo con las instrucciones y la aprobación del Supervisor.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import React from "react";
import ArticuloHero from "../components/articuloHero";
import NavBlog from "../components/navBlog";

export default function PagePavimentoCaliente() {
  return (
    <>
      <ArticuloHero titulo="Pavimento asfáltico en caliente " />
      <NavBlog
        ruta="/blog/pavimento-caliente"
        nombre="Pavimento asfáltico en caliente "
      />
      <section className="pb-10 md:pb-14 lg:pb-20">
        <div className="contenedor px-4">
          <div className="mb-7">
            <h3 className="text-xl underline poppins-semibold mb-2 text-azulPrimary">
              Descripción:
            </h3>
            <p>
              Este trabajo consistirá en la fabricación de mezclas asfálticas en
              caliente y su colocación en una o más capas sobre una superficie
              debidamente preparada e imprimada, de acuerdo con estas
              especificaciones y de conformidad con el Proyecto.
            </p>
          </div>
          <div className="mb-7">
            <h3 className="text-xl underline poppins-semibold mb-2 text-azulPrimary">
              Materiales:
            </h3>
            <ol className="letra ml-6">
              <li className="poppins-medium mb-4 text-lg">
                Agregados minerales gruesos{" "}
                <span className="poppins-regular block mt-1 text-base">
                  Los agregados gruesos, deben cumplir además con los
                  requerimientos, establecidos en Manual de Carreteras
                  “Especificaciones Técnicas Generales para Construcción” (EG –
                  2013).
                </span>
              </li>
              <li className="poppins-medium text-lg mb-4">
                Gradación{" "}
                <span className="poppins-regular block mt-1 text-base">
                  La gradación de los agregados pétreos para la producción de la
                  mezcla asfáltica en caliente deberán ajustarse a alguna de las
                  siguientes gradaciones y serán propuestas por el Contratista y
                  aprobadas por el Supervisor. <br /> Además de los requisitos
                  de calidad que debe tener el agregado grueso y fino según lo
                  establecido en el acápite (a) y (b) de esta Subsección, el
                  material de la mezcla de los agregados debe estar libre de
                  terrones de arcilla y se aceptará como máximo el 1% de
                  partículas deleznables según ensayo MTC E 212. Tampoco deberá
                  contener materia orgánica y otros materiales deletéreos.
                </span>
              </li>
              <li className="poppins-medium mb-4 text-lg">
                Cemento asfáltico{" "}
                <span className="poppins-regular block mt-1 text-base">
                  El Cemento Asfáltico deberá cumplir con lo especificado en
                  Especificaciones Técnicas Generales para Construcción y los
                  equivalentes al PG (Grado de ComportamientoAASHTO M-320),
                  basados en el clima y temperatura de la zona.
                </span>
              </li>
              <li className="poppins-medium mb-4 text-lg">
                Fuentes de provisión o canteras{" "}
                <span className="poppins-regular block mt-1 text-base">
                  El Supervisor deberá aprobar los yacimientos de los agregados,
                  relleno mineral de aportación y cemento asfáltico, antes de
                  procederse a la entrega de dichos materiales.
                </span>
              </li>
            </ol>
          </div>

          <div>
            <h3 className="text-xl underline poppins-semibold mb-2 text-azulPrimary">
              Equipos:
            </h3>
            <ol className="letra ml-6">
              <li className="poppins-medium mb-4 text-lg">
                Equipo para la elaboración de los agregados triturados{" "}
                <span className="poppins-regular block mt-1 text-base">
                  La planta consta de una trituradora primaria y una secundaria.{" "}
                  <br />
                  Además, se cuenta con un equipo de lavado asfaltico que
                  garantiza la calidad de la MEZCLA ASFASLTICA EN CALIENTE,
                  estos resultados y controles de calidad lo proporciona la
                  EMPRESA “SERVICIO DE LABOTARIOS DE SUELOS Y PAVIMENTOS SAC”.{" "}
                  <br />
                  Además, deberá estar provista por filtros necesarios para
                  prevenir la contaminación ambiental.
                </span>
              </li>
              <li className="poppins-medium text-lg mb-4">
                Planta de asfalto{" "}
                <span className="poppins-regular block mt-1 text-base">
                  La mezcla de concreto asfáltico se fabrica en una planta
                  moderna adecuada de tipo continuo o discontinuo, capaces de
                  manejar simultáneamente en frío el número de agregados que
                  exija la fórmula de trabajo adoptada.
                  <br /> La planta productora de mezcla asfáltica cumple con lo
                  establecido en la reglamentación vigente sobre protección y
                  control de calidad del aire.
                  <br /> Las tolvas de agregados en frío tienen paredes
                  resistentes y estar provistas de dispositivos de salida que
                  puedan ser ajustados exactamente y mantenidos en cualquier
                  posición.
                </span>
              </li>
              <li className="poppins-medium mb-4 text-lg">
                Equipo para el transporte{" "}
                <span className="poppins-regular block mt-1 text-base">
                  Tanto los agregados como las mezclas se transportarán en
                  volquetes debidamente acondicionadas para tal fin. La forma y
                  altura de la tolva será tal, que, durante el vertido en la
                  terminadora, el volquete sólo toque a ésta a través de los
                  rodillos previstos para ello. Los volquetes están siempre
                  provistos de dispositivos que mantengan la temperatura, los
                  cuales están debidamente asegurados, tanto para proteger los
                  materiales que transporta, como para prevenir emisiones
                  contaminantes.
                </span>
              </li>
              <li className="poppins-medium mb-4 text-lg">
                Equipo para el esparcido de la mezcla{" "}
                <span className="poppins-regular block mt-1 text-base mb-2">
                  La extensión y terminación de las mezclas densas en caliente,
                  se hará con una pavimentadora autopropulsada, adecuada para
                  extender y terminar la mezcla con un mínimo de pre
                  compactación de acuerdo con los anchos y espesores
                  especificados.
                </span>
                <span className="poppins-regular block mt-1 text-base">
                  La pavimentadora posee un equipo de dirección adecuado y tiene
                  velocidades para retroceder y avanzar. Está equipada con un
                  vibrador y un distribuidor de tornillo sinfín, de tipo
                  reversible, capacitado para colocar la mezcla uniformemente
                  por delante de los enrasadores.
                </span>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}

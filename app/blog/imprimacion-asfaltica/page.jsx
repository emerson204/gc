import React from "react";
import NavBlog from "../components/navBlog";
import ArticuloHero from "../components/articuloHero";

export default function PageImprimacionAsfaltica() {
  return (
    <>
      <ArticuloHero titulo="Imprimación Asfáltica" />
      <NavBlog
        ruta="/blog/imprimacion-asfaltica"
        nombre="Imprimación Asfáltica"
      />
      <section className="pb-10 md:pb-14 lg:pb-20">
        <div className="contenedor px-4">
          <div className="mb-7">
            <h3 className="text-xl underline poppins-semibold mb-2 text-azulPrimary">
              Descripción:
            </h3>
            <p>
              Consiste en la aplicación de un riego asfáltico sobre la
              superficie de una base debidamente preparada, con la finalidad de
              recibir una capa de pavimento asfáltico o de impermeabilizar y
              evitar la disgregación de la base construida, de acuerdo con estas
              especificaciones y de conformidad con el proyecto. Incluye la
              aplicación de arena cuando sea requerido.
            </p>
          </div>
          <div className="mb-7">
            <h3 className="text-xl underline poppins-semibold mb-2 text-azulPrimary">
              Materiales:
            </h3>
            <p className="mb-2">
              El material bituminoso a aplicar en este trabajo será el
              siguiente:
            </p>
            <ul className="list-disc ml-6">
              <li>
                Podría ser admitido el uso de Asfalto líquido, de grados MC-30.
              </li>
              <li>
                El material es aplicado tal como sale de planta, sin agregar
                ningún solvente o material que altere sus características.
              </li>
              <li>
                La cantidad por m2 de material bituminoso, está comprendida
                entre 0,7 – 1,5 1/m2 para una penetración dentro de la capa
                granular de apoyo de 5mm a 7mm por lo menos.
              </li>
            </ul>
          </div>
          <div className="mb-7">
            <h3 className="text-xl underline poppins-semibold mb-2 text-azulPrimary">
              Equipo:
            </h3>
            <p>
              El equipo de limpieza estará constituido por una barredora
              mecánica y/o una sopladora mecánica. Como equipo adicional se
              utiliza, escobas. El camión cisterna imprimador de materiales
              bituminosos cumple exigencias mínimas que garanticen la aplicación
              uniforme y constante de cualquier material bituminoso, sin que lo
              afecten la carga, la pendiente de la vía a la dirección del
              vehículo. Sus dispositivos de irrigación proporcionan una
              distribución transversal adecuada del ligante. El camión cisterna
              aplica el producto asfáltico a presión y en forma uniforme,
              también está provisto de un termómetro para el ligante. Para áreas
              inaccesibles al equipo irrigador y para retoques y aplicaciones
              mínimas, se usará una cocina asfáltica portátil, con sus elementos
              de irrigación a presión, o una extensión del camión cisterna con
              una boquilla de expansión que permita un riego uniforme
            </p>
          </div>

          <div>
            <h3 className="text-xl underline poppins-semibold mb-1 text-azulPrimary">
              Requerimientos de construcción
            </h3>
            <h3 className="text-xl underline poppins-semibold mb-3 text-azulPrimary">
              Aplicación de la capa de imprimación
            </h3>
            <p className="mb-2">
              El material bituminoso de imprimación debe ser aplicado cobre la
              base completamente limpia, por un distribuidor a presión que
              cumpla con los requisitos indicados anteriormente. En general, el
              régimen debe estar entre 0,7 a 1,5 1/m2, dependiendo de cómo se
              halle la textura superficial de la base.
            </p>
            <p>
              Al aplicar la capa de imprimación, el distribuidor debe ser
              conducido a lo largo de un filo marcado para mantener una línea
              recta de aplicación. Si las condiciones de tráfico lo permiten, la
              aplicación debe ser hecha sólo en la mitad del ancho de la
              superficie a imprimar.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

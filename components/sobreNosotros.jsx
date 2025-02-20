import React from "react";
import Heading from "./heading";
import Image from "next/image";
import Link from "next/link";

export default function SobreNosotros() {
  return (
    <section className="pt-10 md:pt-14 lg:pt-20">
      <div className="contenedor px-4">
        <Heading
          titulo="Sobre Nosotros"
          descripcion="Pasión y excelencia en nuestra historia"
        />

        <div className="grid lg:grid-cols-2 gap-5 ">
          <div>
            <Image
              src="/nosotros.png"
              alt="imagen de sobre nosotros"
              width="500"
              height="500"
              className="w-full"
            />
          </div>
          <div>
            <p className="mb-4 text-justify ">
              Somos una empresa jurídica cuyo objeto social es la Actividad de
              Construcciones viales y Edificaciones, así como Obras Civiles,
              asfaltos y pavimentos, Venta de Mezcla Asfáltica en caliente,
              venta de materiales de construcción, transporte de carga por
              carretera, alquiler de maquinaria para la construcción y otro a
              NIVEL NACIONAL.
            </p>
            <h3 className="text-gris poppins-semibold text-[1.0625rem] mb-2">
              NUESTRAS CERTIFICACIONES:
            </h3>
            <ul className="list-disc ml-7 mb-8">
              <li className="mb-1">
                Asfalto certificado por nuestro proveedor Petróleos del Perú SAC
                y Repsol SA.
              </li>
              <li className="mb-1 lg:mb-0">
                Control de Calidad supervisado con conformidad de otra empresa
                “Servicios de Laboratorio de Suelos y Pavimentos S.A.C. con RUC:
                20487357465”.
              </li>
              <li className="lg:hidden">
                Aditivo Mejorador de Adherencia QUIMIBOND 3000.
              </li>
            </ul>
            <Link
              href="/nosotros"
              className="bg-azulPrimary text-white px-4 py-3 rounded-sm hover:bg-azulHover transition-all duration-300 poppins-medium"
            >
              Más sobre nosotros
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

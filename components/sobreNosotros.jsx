import React from "react";
import Heading from "./heading";
import Image from "next/image";
import Link from "next/link";
import Principios from "./principios";

export default function SobreNosotros() {
  return (
    <section className="pt-10 md:pt-14 lg:pt-20">
      <div className="contenedor px-4">
        <Heading
          titulo="Sobre Nosotros"
          descripcion="Pasión y excelencia en nuestra historia"
        />

        <div className="grid lg:grid-cols-2 gap-5 mb-14">
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
              <li>
                Asfalto certificado por nuestro proveedor Petróleos del Perú SAC
                y Repsol SA.
              </li>
              <li>
                Control de Calidad supervisado con conformidad de otra empresa
                “Servicios de Laboratorio de Suelos y Pavimentos S.A.C. con RUC:
                20487357465”.
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

        <div className="grid lg:grid-cols-3 gap-9 lg:gap-8">
          <Principios
            titulo="MISIÓN"
            descripcion="Proporcionar a nuestra clientela, el mejor servicio de
              construcción de obras viales, superando sus expectativas, con la
              mejor tecnología y calidad, tanto en materiales como en mano de
              obra y equipos; en el mejor tiempo propuesto, para que nuestro
              cliente sea nuestra mejor recomendación a nivel nacional."
          />
          <Principios
            titulo="VISIÓN"
            descripcion="Mantenernos como la mejor empresa en el ámbito de las Construcciones viales, creando soluciones innovadoras, que se encuentren a la vanguardia en cuanto a las nuevas tecnologías de la construcción, basándose en la especialización y capacitación de nuestro personal, respetando las normas para la conservación de nuestro medio ambiente."
          />
          <div className="bg-white shadow px-3 md:px-5 py-6 md:py-7 rounded-lg">
            <h3 className="text-2xl text-center lg:text-[1.625rem] poppins-semibold mb-5 lg:mb-3 text-azulPrimary">
              VALORES
            </h3>
            <div className="flex justify-center">
              <ul className="list-disc">
                <li className="mb-[0.625rem] lg:mb-3">RESPONSABILIDAD</li>
                <li className="mb-[0.625rem] lg:mb-3">HONESTIDAD</li>
                <li className="mb-[0.625rem] lg:mb-3">EFICIENCIA</li>
                <li className="mb-[0.625rem] lg:mb-3">CALIDAD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Principios from "@/components/principios";
import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { FaEye, FaHandshake } from "react-icons/fa6";

export default function PrincipiosEmpresa() {
  return (
    <section className="bg-grisClaro py-12 md:py-16 lg:py-20">
      <div className="contenedor px-4">
        <div className="grid lg:grid-cols-3 gap-9 lg:gap-8">
          <Principios
            titulo="MISIÓN"
            descripcion="Proporcionar a nuestra clientela, el mejor servicio de
              construcción de obras viales, superando sus expectativas, con la
              mejor tecnología y calidad, tanto en materiales como en mano de
              obra y equipos; en el mejor tiempo propuesto, para que nuestro
              cliente sea nuestra mejor recomendación a nivel nacional."
            icono={TbTargetArrow}
          />
          <Principios
            titulo="VISIÓN"
            descripcion="Mantenernos como la mejor empresa en el ámbito de las Construcciones viales, creando soluciones innovadoras, que se encuentren a la vanguardia en cuanto a las nuevas tecnologías de la construcción, basándose en la especialización y capacitación de nuestro personal, respetando las normas para la conservación de nuestro medio ambiente."
            icono={FaEye}
          />
          <div className="bg-white shadow px-3 md:px-5 py-6 md:py-7 rounded-lg">
            <FaHandshake className="text-azulPrimary text-[3rem] mb-4 mx-auto" />

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

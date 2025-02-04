import React from "react";
import Image from "next/image";

export default function CardsCalidad() {
  return (
    <div className="grid md:grid-cols-2 gap-5 md:gap-6 lg:gap-4">
      <div className="bg-grisSemi py-6 px-5 md:py-5 lg:py-4 rounded-2xl">
        <Image
          src="/gota.png"
          alt="gota"
          width="45"
          height="45"
          className="mx-auto mb-1"
        />
        <h3 className="text-center text-azulPrimary poppins-semibold text-xl uppercase mb-1">
          Productos
        </h3>

        <div>
          <h4 className="text-center poppins-medium mb-2">
            Contamos con productos certificados.
          </h4>
          <div className="flex justify-center">
            <ul className="text-sm text-grisText list-disc ml-5">
              <li className="mb-[0.125rem]">Asfaltos por Petroperu y Repsol</li>
              <li className="mb-[0.125rem]">Aditivo por Quimica Suiza</li>
              <li className="mb-[0.125rem]">
                Diseño de mezcla y control de calidad por Servicios de
                Laboratorio de Suelos y Pavimentos S.A.C
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-grisSemi py-6 md:py-5 lg:py-4 px-5 rounded-2xl">
        <Image
          src="/dollar.png"
          alt="dollar"
          width="45"
          height="45"
          className="mx-auto mb-1"
        />
        <h3 className="text-center text-azulPrimary poppins-semibold text-xl uppercase mb-2">
          Oferta
        </h3>

        <div>
          <h4 className="text-center mb-2">
            Nuestro oferta es competitiva y se ajusta a la medida del proyecto
            de nuestros clientes.
          </h4>
        </div>
      </div>
      <div className="bg-grisSemi py-6 md:py-5 lg:py-4 px-5 rounded-2xl">
        <Image
          src="/tabler.png"
          alt="tabler"
          width="45"
          height="45"
          className="mx-auto mb-1"
        />
        <h3 className="text-center text-azulPrimary poppins-semibold text-xl uppercase mb-1">
          Equipos
        </h3>

        <div>
          <h4 className="text-center poppins-medium mb-2">
            Contamos con los equipos para los trabajos requeridos.
          </h4>
          <div className="flex justify-center">
            <ul className="text-sm text-grisText list-disc ml-5">
              <li className="mb-[0.125rem]">Planta chancadora</li>
              <li className="mb-[0.125rem]">Planta de asfalto</li>
              <li className="mb-[0.125rem]">Camion imprimador</li>
              <li className="mb-[0.125rem]">Tren de asfalto</li>
              <li className="mb-[0.125rem]">Cargadores, y mas equipos.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-grisSemi py-6 md:py-5 lg:py-4 px-5 rounded-2xl">
        <Image
          src="/location.png"
          alt="location"
          width="45"
          height="45"
          className="mx-auto mb-1"
        />
        <h3 className="text-center text-azulPrimary poppins-semibold text-xl uppercase mb-1">
          Lugares
        </h3>

        <div>
          <h4 className="text-center poppins-medium mb-2">
            Llegamos a las distintas regiones del Peru.
          </h4>
          <div className="flex justify-center">
            <ul className="text-sm text-grisText list-disc ml-5">
              <li className="mb-[0.125rem]">Lambayeque</li>
              <li className="mb-[0.125rem]">Piura</li>
              <li className="mb-[0.125rem]">Cajamarca</li>
              <li className="mb-[0.125rem]">La Libertad</li>
              <li className="mb-[0.125rem]">y demas.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

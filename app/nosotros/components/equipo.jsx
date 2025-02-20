"use client";
import Heading from "@/components/heading";
import { Separator } from "@/components/ui/separator";
import { imagenesEquipo } from "@/data/equipo";
import Image from "next/image";
import { Carousel } from "nuka-carousel";
import React from "react";

export default function Equipo() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="px-4 contenedor">
        <Heading
          titulo="Nuestro Equipo"
          descripcion="Profesionales comprometidos con la excelencia en cada proyecto."
        />

        <div className="grid lg:grid-cols-2 gap-3 md:gap-0 lg:gap-10">
          <div className="md:h-[30rem] lg:h-[27rem] flex items-center justify-center overflow-hidden mb-4 md:mb-5 rounded-md">
            <Carousel showArrows>
              {imagenesEquipo.map((imagen) => (
                <Image
                  key={imagen.id}
                  src={imagen.imagen}
                  alt="equipo"
                  width="500"
                  height="500"
                  className="w-full object-cover flex-shrink-0"
                />
              ))}
            </Carousel>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl md:mt-1 poppins-medium text-azulPrimary ">
              Compromiso y experiencia en cada proyecto
            </h3>
            <Separator className="my-3 md:my-5" />
            <p className="leading-7 mb-4 text-justify">
              Contamos con un equipo altamente capacitado en pavimentación y
              asfaltos, con años de experiencia en la ejecución de proyectos
              viales. Nos especializamos en ofrecer soluciones eficientes,
              seguras y de alta calidad, cumpliendo con los más altos
              estándares. Nuestro compromiso es garantizar resultados duraderos
              y satisfactorios para cada obra.
            </p>
            <p className="leading-7 hidden md:flex text-justify">
              Nuestro equipo está conformado por profesionales con amplia
              experiencia en la industria del asfalto y pavimentación.
              Utilizamos tecnología de vanguardia y materiales certificados para
              garantizar superficies resistentes y de alto desempeño. Nos
              enfocamos en cada detalle del proceso, desde la planificación
              hasta la ejecución, asegurando obras eficientes y seguras que
              superen las expectativas de nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

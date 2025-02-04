"use client";

import { serviciosData } from "@/data/serviciosData";
import Image from "next/image";
import { Carousel } from "nuka-carousel";

export default function CardServicios() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-11 ">
      {serviciosData.map((servicio) => (
        <div key={servicio.id}>
          <div className=" h-[16.875rem] lg:h-[18.125rem] flex items-center justify-center overflow-hidden mb-4 md:mb-5 rounded-md">
            <Carousel showArrows>
              {servicio.imagenes.map((imagen) => (
                <Image
                  key={imagen.id}
                  src={imagen.src}
                  alt={servicio.alt}
                  width="500"
                  height="500"
                  className="w-full"
                />
              ))}
            </Carousel>
          </div>

          <div>
            <h3 className="text-lg md:text-xl uppercase poppins-medium mb-[0.3125rem] md:mb-2">
              {servicio.titulo}
            </h3>
            <p className="text-gris">{servicio.descripcion}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

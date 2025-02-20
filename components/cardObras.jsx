"use client";
import Image from "next/image";
import { Carousel } from "nuka-carousel";

export default function CardObras({ obraImages }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-11 ">
      {obraImages.map((obra) => (
        <div key={obra.id}>
          <div className="h-[16.875rem] lg:h-[18.125rem] flex items-center justify-center overflow-hidden mb-4 md:mb-5 rounded-md">
            <Carousel showArrows>
              {obra.imagenes.map((imagen) => (
                <Image
                  key={imagen.id}
                  src={imagen.src}
                  alt={imagen.alt}
                  width="500"
                  height="500"
                  className="w-full"
                />
              ))}
            </Carousel>
          </div>

          <div>
            <p className="text-[1.6875rem] poppins-semibold text-azulPrimary">
              {obra.year}
            </p>
            <h3 className="text-lg md:text-xl uppercase poppins-medium">
              {obra.nombre}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

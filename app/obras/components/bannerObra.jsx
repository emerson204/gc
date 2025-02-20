import BtnPrincipal from "@/components/btnPrincipal";
import React from "react";

export default function BannerObra() {
  return (
    <section className="bg-[url('/bannerobra.jpg')] bg-center bg-cover bg-no-repeat h-[18rem] md:h-[25rem] lg:h-[30rem] relative after:content-[''] after:absolute after:inset-0 after:bg-black/65">
      <div className="relative z-10 flex flex-col items-center text-white justify-center h-full px-4">
        <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] poppins-bold mb-2 md:mb-3 lg:mb-4 text-center">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="text-center md:text-lg lg:text-xl mb-5 md:mb-7">
          Solicita tu cotización gratuita hoy y hagamos realidad tu próxima
          obra.
        </p>

        <BtnPrincipal
          ruta="/contacto"
          nombre="Cotiza tu proyecto"
          className="px-8 lg:px-10"
        />
      </div>
    </section>
  );
}

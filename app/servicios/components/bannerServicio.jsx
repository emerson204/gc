import BtnPrincipal from "@/components/btnPrincipal";
import React from "react";

export default function BannerServicio() {
  return (
    <section className="bg-[url('/pista.jpg')] bg-center bg-cover bg-no-repeat h-[18rem] md:h-[25rem] lg:h-[30rem] relative after:content-[''] after:absolute after:inset-0 after:bg-black/65">
      <div className="relative z-10 flex flex-col items-center text-white justify-center h-full px-4">
        <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] poppins-bold mb-2 md:mb-3 lg:mb-4 text-center">
          Solicita tu cotización gratuita ahora
        </h2>
        <p className="text-center md:text-lg lg:text-xl mb-5 md:mb-7">
          Confía en nuestra experiencia y calidad para garantizar proyectos
          viales seguros y duraderos.
        </p>

        <BtnPrincipal
          ruta="/contacto"
          nombre="Solicitar cotización"
          className="px-8 lg:px-10"
        />
      </div>
    </section>
  );
}

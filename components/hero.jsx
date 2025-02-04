import React from "react";
import BtnPrincipal from "./btnPrincipal";
import BtnAnchor from "./btnAnchor";

export default function Hero() {
  return (
    <section className="bg-[url('/planta-gc.jpg')] bg-no-repeat bg-cover bg-center h-[23rem] md:h-[28rem] lg:h-[35.7rem] relative after:content-[''] after:absolute after:inset-0 after:bg-black/65">
      <div className="contenedor px-4 text-white relative z-10 h-full flex flex-col justify-center">
        <h1 className="text-[1.79rem] sm:text-3xl md:text-4xl leading-8 mb-3 md:mb-5 lg:mb-6 lg:text-6xl poppins-bold sm:max-w-[60%] md:max-w-[75%] lg:max-w-[69%] lg:leading-[4.2rem]">
          Construimos caminos hacia el futuro
        </h1>
        <p className="md:max-w-[75%] lg:max-w-[60%] lg:text-lg hidden md:block">
          <span className="poppins-semibold">Grupo Castillo</span> se
          especializa en pavimentos y asfaltos, ofreciendo servicios de calidad
          como venta de mezcla asfáltica, materiales de construcción, transporte
          y alquiler de maquinaria. Con{" "}
          <span className="poppins-semibold">Asfalpaca</span> y{" "}
          <span className="poppins-semibold">Construpaca</span> como empresas
          asociadas, brindamos soluciones integrales al sector.
        </p>

        <p className="md:hidden sm:max-w-[65%]  ">
          <span className="poppins-semibold">Grupo Castillo</span>,
          especialistas en pavimentos y asfaltos, ofrece soluciones integrales
          al sector, respaldado por sus empresas asociadas,{" "}
          <span className="poppins-semibold">Asfalpaca</span> y{" "}
          <span className="poppins-semibold">Construpaca</span>.
        </p>

        <div className="flex items-center gap-3 md:gap-5 mt-7 lg:mt-10">
          <BtnAnchor ruta="tel:+51979906253" nombre="Contáctanos" />
          <BtnPrincipal ruta="/obras" nombre="Proyectos" />
        </div>
      </div>
    </section>
  );
}

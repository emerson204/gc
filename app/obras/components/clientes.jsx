"use client";
import Heading from "@/components/heading";
import { clientesImages } from "@/data/clientes";
import Image from "next/image";
import React, { useState } from "react";

export default function Clientes() {
  const [views, setViews] = useState(4);

  const primerosClientes = clientesImages.slice(0, views);

  const cargarMasImagenes = () => {
    setViews(views + 2);
  };

  const mostrarMenosImagenes = () => {
    setViews(4);
  };

  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="contenedor px-4">
        <Heading
          titulo="Nuestros Clientes a Nivel Nacional"
          descripcion="Confianza y resultados que nos respaldan."
        />

        <div className="grid lg:grid-cols-2 gap-5">
          {primerosClientes.map((imagen) => (
            <Image
              key={imagen.id}
              src={imagen.src}
              alt={imagen.alt}
              width="600"
              height="600"
              className="w-full"
            />
          ))}
        </div>

        {views < clientesImages.length ? (
          <button
            className="bg-azulPrimary text-white px-12 py-3 md:px-16 md:py-4  lg:text-[1.0950rem] rounded-sm poppins-semibold hover:bg-azulHover transition-all duration-300 mx-auto block w-fit uppercase mt-11 md:mt-12 lg:mt-[4.380rem]"
            onClick={cargarMasImagenes}
          >
            Ver más clientes
          </button>
        ) : (
          <button
            className="bg-azulPrimary text-white px-12 py-3 md:px-16 md:py-4  lg:text-[1.0950rem] rounded-sm poppins-semibold hover:bg-azulHover transition-all duration-300 mx-auto block w-fit uppercase mt-11 md:mt-12 lg:mt-[4.380rem]"
            onClick={mostrarMenosImagenes}
          >
            Ver menos clientes
          </button>
        )}
      </div>
    </section>
  );
}

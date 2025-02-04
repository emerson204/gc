import React from "react";
import BtnPrincipal from "./btnPrincipal";

export default function Blog() {
  return (
    <section className="bg-[url('/bloghero.png')] bg-no-repeat bg-cover bg-center h-[18rem] md:h-[25rem] lg:h-[30rem] relative after:content-[''] after:absolute after:inset-0 after:bg-black/60">
      <div className="relative z-10 flex flex-col items-center text-white justify-center h-full px-4">
        <h2 className="text-3xl md:text-5xl lg:text-[4rem] poppins-bold mb-2 md:mb-3 lg:mb-4">
          Explora Nuestro Blog
        </h2>
        <p className="text-center md:text-lg lg:text-xl mb-5 md:mb-7">
          Noticias, tendencias y conocimientos sobre construcción vial.
        </p>

        <BtnPrincipal
          ruta="/blog"
          nombre="Ir al Blog"
          className="px-8 lg:px-10"
        />
      </div>
    </section>
  );
}

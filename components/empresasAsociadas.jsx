import React from "react";
import BtnPrincipal from "./btnPrincipal";
import LogosEmpresasAsociadas from "./logosEmpresasAsociadas";

export default function EmpresasAsociadas() {
  return (
    <section className="bg-grisClaro py-12 md:py-16 lg:py-24">
      <div className="contenedor px-4">
        <h2 className="text-[1.80rem] md:text-[2.5rem] lg:text-[2.75rem] poppins-bold leading-10 md:leading-[3rem] text-azulPrimary text-center">
          Empresas Asociadas
        </h2>
        <p className="text-gris md:text-lg mb-6 lg:mb-10 text-center">
          Unimos experiencia y calidad a través de nuestras empresas asociadas.
        </p>

        <div className="grid grid-cols-2 gap-10 justify-items-center">
          <div className="flex flex-col items-center gap-4">
            <LogosEmpresasAsociadas
              imagen="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1738881876/logo-asfa_sihvsh.png"
              alt="logo asfalpaca"
              nombre="Asfalpaca"
            />
          </div>
          <div className="flex flex-col items-center gap-4">
            <LogosEmpresasAsociadas
              imagen="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1738881876/logo-constru_xyd68k.png"
              alt="logo construpaca"
              nombre="Construpaca"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

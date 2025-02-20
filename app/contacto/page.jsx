import React from "react";

import ContactoInfo from "./components/contactoInfo";
import FormularioContacto from "./components/formularioContacto";

export default function PageContacto() {
  return (
    <section className="pt-4 pb-16 md:pt-14 lg:pt-16">
      <div className="contenedor px-4 grid lg:grid-cols-2 gap-9 md:gap-12 lg:gap-20">
        <ContactoInfo />
        <FormularioContacto />
      </div>
    </section>
  );
}

import React from "react";
import MaquinariaHero from "./components/maquinariaHero";
import NuestrasMaquinarias from "./components/nuestrasMaquinarias";
import NavInicio from "@/components/navInicio";
import Beneficios from "./components/beneficios";
import MaquinariaBanner from "./components/maquinariaBanner";

export default function PageMaquinaria() {
  return (
    <>
      <MaquinariaHero />
      <NavInicio ruta="/maquinarias" nombre="Maquinarias" />
      <NuestrasMaquinarias />
      <Beneficios />
      <MaquinariaBanner />
    </>
  );
}

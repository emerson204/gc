import React from "react";
import NosotrosHero from "./components/nosotrosHero";
import NavInicio from "../../components/navInicio";
import Certificaciones from "./components/certificaciones";
import Historia from "@/components/historia";
import EmpresasAsociadas from "@/components/empresasAsociadas";
import BannerContacto from "./components/bannerContacto";
import Equipo from "./components/equipo";
import PrincipiosEmpresa from "./components/principiosEmpresa";

export default function PageNosotros() {
  return (
    <>
      <NosotrosHero />
      <NavInicio ruta="/nosotros" nombre="Nosotros" />
      <Historia />
      <PrincipiosEmpresa />
      <Certificaciones />
      <EmpresasAsociadas />
      <Equipo />
      <BannerContacto />
    </>
  );
}

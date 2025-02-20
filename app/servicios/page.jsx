import React from "react";
import ServiciosHero from "./components/serviciosHero";
import Ofrecemos from "./components/ofrecemos";
import NavInicio from "../../components/navInicio";
import Elegirnos from "./components/elegirnos";
import BannerServicio from "./components/bannerServicio";

export default function PageServicios() {
  return (
    <>
      <ServiciosHero />
      <NavInicio ruta="/servicios" nombre="Servicios" />
      <Ofrecemos />
      <Elegirnos />
      <BannerServicio />
    </>
  );
}

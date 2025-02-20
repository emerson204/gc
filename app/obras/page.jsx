import React from "react";
import HeroObras from "./components/heroObras";
import NavInicio from "@/components/navInicio";
import NuestrasObras from "./components/nuestrasObras";
import Clientes from "./components/clientes";
import BannerObra from "./components/bannerObra";

export default function PageObras() {
  return (
    <>
      <HeroObras />
      <NavInicio ruta="/obras" nombre="Obras" />
      <NuestrasObras />
      <Clientes />
      <BannerObra />
    </>
  );
}

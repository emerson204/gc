import Blog from "@/components/blog";
import Calidad from "@/components/calidad";
import EmpresasAsociadas from "@/components/empresasAsociadas";
import Hero from "@/components/hero";
import Maquinarias from "@/components/maquinarias";
import Obras from "@/components/obras";
import Servicios from "@/components/servicios";
import SobreNosotros from "@/components/sobreNosotros";

export default function Home() {
  return (
    <>
      <Hero />
      <SobreNosotros />
      <Servicios />
      <Calidad />
      <Obras />
      <EmpresasAsociadas />
      <Blog />
      <Maquinarias />
    </>
  );
}

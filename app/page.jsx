import Blog from "@/components/blog";
import Calidad from "@/components/calidad";
import Hero from "@/components/hero";
import Maquinarias from "@/components/maquinarias";
import Servicios from "@/components/servicios";
import SobreNosotros from "@/components/sobreNosotros";

export default function Home() {
  return (
    <>
      <Hero />
      <SobreNosotros />
      <Servicios />
      <Calidad />
      <Maquinarias />
      <Blog />
    </>
  );
}

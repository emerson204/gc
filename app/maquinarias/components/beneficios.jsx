import Heading from "@/components/heading";
import React from "react";
import Características from "./caracteristicas";
import {
  TbHexagonNumber1Filled,
  TbHexagonNumber2Filled,
  TbHexagonNumber3Filled,
  TbHexagonNumber4Filled,
  TbHexagonNumber5Filled,
  TbHexagonNumber6Filled,
} from "react-icons/tb";

export default function Beneficios() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="contenedor px-4">
        <Heading
          titulo="Características y Beneficios"
          descripcion="Rendimiento y eficiencia en cada proyecto."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Características
            icono={TbHexagonNumber1Filled}
            titulo="Precisión absoluta"
            descripcion="Equipos avanzados que garantizan máxima exactitud en cada tarea."
          />
          <Características
            icono={TbHexagonNumber2Filled}
            titulo="Resistencia extrema"
            descripcion="Materiales de alta calidad que soportan cualquier desafío."
          />
          <Características
            icono={TbHexagonNumber3Filled}
            titulo="Productividad máxima"
            descripcion="Optimización del tiempo y rendimiento en cada proyecto."
          />
          <Características
            icono={TbHexagonNumber4Filled}
            titulo="Seguridad total"
            descripcion="Cumple con los más altos estándares de seguridad y protección."
          />
          <Características
            icono={TbHexagonNumber5Filled}
            titulo="Versatilidad en acción"
            descripcion="Diseñadas para adaptarse a cualquier terreno y necesidad."
          />
          <Características
            icono={TbHexagonNumber6Filled}
            titulo="Potencia y rendimiento"
            descripcion="Equipos con alto desempeño para trabajos exigentes."
          />
        </div>
      </div>
    </section>
  );
}

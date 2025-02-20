import React from "react";
import CardEleegirnos from "./cardElegirnos";

export default function CardsElegirnos() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
      <CardEleegirnos
        nombre="Experiencia y trayectoria"
        descripcion="Más de 15 años en el sector de pavimentación y asfaltos, ejecutando proyectos de alto nivel con resultados comprobados."
        imagen="/experiencia.png"
        alt="experiencia"
        className="bg-white text-white"
        background={true}
        texto={true}
      />
      <CardEleegirnos
        nombre="Equipo altamente capacitado"
        descripcion="Nuestro equipo está formado por ingenieros y tecnicos con años de experiencia en el sector, garantizando soluciones de calidad."
        imagen="/obrero.png"
        alt="obrero"
      />
      <CardEleegirnos
        nombre="Cobertura y alcance nacional"
        descripcion="Ejecutamos proyectos en diversas regiones, adaptándonos a distintos entornos y garantizando la misma calidad en cada obra."
        imagen="/ubi.png"
        alt="ubicacion"
      />
      <CardEleegirnos
        nombre="Materiales certificados y tecnología avanzada"
        descripcion="Trabajamos con materiales certificados y equipos de última generación, garantizando servicios de alta resistencia y durabilidad."
        imagen="/materiales.png"
        alt="materiales"
      />

      <CardEleegirnos
        nombre="Cumplimiento normativo y calidad garantizada"
        descripcion="Todas nuestras obras cumplen con las normativas nacionales , asegurando eficiencia y seguridad en cada etapa del proyecto."
        imagen="/normativa.png"
        alt="normativa"
      />

      <CardEleegirnos
        nombre="Atención personalizada y soluciones a medida"
        descripcion="Analizamos cada proyecto a detalle, adaptándonos a las necesidades específicas de cada cliente para ofrecer soluciones eficientes y personalizadas."
        imagen="/apreton.png"
        alt="apreton"
      />
    </div>
  );
}

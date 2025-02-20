import Heading from "@/components/heading";
import React from "react";
import Certi from "./certi";
import ImagenesCertificados from "./imagenesCertificados";

export default function Certificaciones() {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="contenedor px-4">
        <Heading
          titulo="Certificaciones y Avales"
          descripcion="Cumplimos con los más altos estándares. "
        />

        <Certi />

        <h3 className="text-center mb-12 text-2xl text-azulPrimary poppins-semibold">
          EQUIPOS PROPIOS Y CISTERNAS PROPIAS
        </h3>

        <div className="grid grid-cols-2  gap-6 lg:grid-cols-4 lg:gap-8">
          <ImagenesCertificados
            imagen="/certificado1.png"
            alt="primer certificado"
          />

          <ImagenesCertificados
            imagen="/certificado2.png"
            alt="segundo certificado"
          />

          <ImagenesCertificados
            imagen="/certificado3.png"
            alt="tercer certificado"
          />

          <ImagenesCertificados
            imagen="/certificado4.png"
            alt="cuarto certificado"
          />
        </div>
      </div>
    </section>
  );
}

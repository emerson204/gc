import Image from "next/image";
import React from "react";

export default function ImagenesCertificados({ imagen, alt }) {
  return (
    <div>
      <Image src={imagen} alt={alt} width="300" height="300" />
    </div>
  );
}

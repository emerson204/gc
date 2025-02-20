"use client";

import Image from "next/image";
import Link from "next/link";
import { CgChevronDoubleRight } from "react-icons/cg";
import { useRouter } from "next/navigation";
export default function ArticuloBlog({
  imagen,
  alt,
  titulo,
  descripcion,
  ruta,
}) {
  const router = useRouter();

  return (
    <div className="rounded-md overflow-hidden shadow-lg">
      <div>
        <Image
          src={imagen}
          alt={alt}
          width="300"
          height="300"
          className="w-full h-[18rem] md:h-[19rem] lg:h-[22rem]"
        />
      </div>

      <div className="bg-grisClaro px-4 py-5 h-full">
        <h3
          className="text-xl poppins-medium mb-2 cursor-pointer"
          onClick={() => router.push(ruta)}
        >
          {titulo}
        </h3>
        <p className="line-clamp-2 text-gray-500 mb-4 ">{descripcion}</p>

        <div className=" text-azulPrimary hover:text-azulHover cursor-pointer poppins-medium hover:translate-x-1 transition-all duration-300">
          <Link href={ruta} className="uppercase flex items-center gap-1">
            Ver más <CgChevronDoubleRight className="text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function NavBlog({ ruta, nombre }) {
  return (
    <section className="my-7 lg:my-8">
      <div className="contenedor px-4 flex items-center gap-3 md:text-lg ">
        <Link href="/blog" className="text-gray-500">
          Blog
        </Link>
        <MdKeyboardArrowRight className="text-gray-500" />
        <Link href={ruta}>{nombre}</Link>
      </div>
    </section>
  );
}

import { links } from "@/data/links";
import Link from "next/link";
import React from "react";

export default function NavLinks({ handleClick }) {
  return (
    <ul className="flex flex-col md:flex-row md:items-center md:gap-6 ">
      {links.map((link) => (
        <li
          key={link.id}
          onClick={handleClick}
          className="after:content-[''] relative after:absolute md:after:w-0 after:h-[0.1420rem] after:bg-azulHover after:-bottom-[0.15rem] after:left-0 md:hover:after:w-full after:transition-all after:duration-200 after:rounded-full text-azulPrimary poppins-medium uppercase md:hover:text-azulHover transition-all 
          duration-300"
        >
          <Link
            href={link.url}
            className="text-[0.9275rem] py-[1.125rem] md:py-0 block border-b md:border-b-0 "
          >
            {link.nombre}
          </Link>
        </li>
      ))}
    </ul>
  );
}

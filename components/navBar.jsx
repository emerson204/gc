"use client";

import { links } from "@/data/links";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar({ open, handleClose }) {
  const rutaActiva = usePathname();
  return (
    <div
      className={`fixed md:relative h-screen md:h-auto bg-black/50 md:bg-transparent inset-0 transition-opacity duration-300 ease-in-out ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none md:pointer-events-auto"
      } md:opacity-100`}
    >
      <nav className="flex flex-col md:flex-row md:gap-7 pt-5 md:pt-0 left-0 absolute md:static top-0 w-[73%] md:w-auto bottom-0 bg-white md:bg-transparent md:items-center">
        <IoCloseOutline
          className="md:hidden flex flex-end w-[150%] ml-9 text-black text-3xl "
          onClick={handleClose}
        />
        <Image
          src="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1738289316/logo-grupo-castillo_lqjs7h.png"
          width="68"
          height="68"
          alt="logo grupo castillo"
          onClick={() => router.push("/")}
          className="ml-5 mb-5 md:hidden"
        />
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            onClick={() => {
              handleClose();
            }}
            className={`${
              link.url === rutaActiva &&
              "text-azulHover after:w-[1.3325rem] md:after:w-full"
            } text-[0.9275rem] py-5 md:py-0 block border-b border-b-gray-100 md:border-b-0 after:content-[''] relative after:absolute after:h-[0.1520rem] after:-rotate-[78deg] after:bottom-[50%] md:after:rotate-0  md:after:w-0 md:after:h-[0.1420rem] after:bg-azulHover md:after:-bottom-[0.15rem] after:left-5 md:after:left-0 md:hover:after:w-full after:transition-all after:duration-200 md:after:rounded-full text-azulPrimary poppins-medium uppercase md:hover:text-azulHover transition-all pl-10 duration-300 md:pl-0 `}
          >
            {link.nombre}
          </Link>
        ))}
      </nav>
    </div>
  );
}

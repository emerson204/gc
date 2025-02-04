"use client";

import Image from "next/image";
import NavLinks from "./navLinks";
import MenuMobile from "./menuMobile";
import { FaPhoneAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import TopBar from "./topBar";

export default function Header() {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50">
      <TopBar />
      <header className="py-2 md:py-3 px-3  bg-white">
        <div className="contenedor flex justify-between items-center">
          <div className="flex flex-grow basis-0">
            <Image
              src="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1738289316/logo-grupo-castillo_lqjs7h.png"
              width="55"
              height="55"
              alt="logo grupo castillo"
              onClick={() => router.push("/")}
            />
          </div>

          <nav className="hidden md:flex ">
            <NavLinks />
          </nav>

          <div className="md:hidden">
            <MenuMobile />
          </div>

          <div className="hidden lg:flex flex-grow basis-0 justify-end">
            <a
              href="tel:+51979906253"
              className="flex items-center gap-2 bg-azulPrimary text-white rounded-full px-5 py-3 hover:bg-azulHover transition-all duration-300 tracking-wide poppins-medium "
            >
              <FaPhoneAlt />
              +51 979906253
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

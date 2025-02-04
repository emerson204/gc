"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import NavLinks from "./navLinks";
import { useCallback, useEffect, useState } from "react";

export default function MenuMobile() {
  const [open, setOpen] = useState(false);

  const isMobile = () => window.innerWidth < 768;

  const handleResize = useCallback(() => {
    if (!isMobile() && open) {
      setOpen(false);
    }
  }, [open]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const handleOpenChange = (state) => {
    if (isMobile()) {
      setOpen(state);
    }
  };

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <FiMenu className="text-3xl md:hidden" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <Image
              src="https://res.cloudinary.com/dy3pthdns/image/upload/f_auto,q_auto/v1738289316/logo-grupo-castillo_lqjs7h.png"
              width="65"
              height="65"
              alt="logo grupo castillo"
              className="mt-5 mb-4"
            />
          </SheetTitle>
          <SheetDescription asChild>
            <NavLinks handleClick={handleClick} />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

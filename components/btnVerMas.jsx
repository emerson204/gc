import Link from "next/link";

export default function BtnVerMas({ ruta }) {
  return (
    <Link
      href={ruta}
      className="bg-azulPrimary text-white px-12 py-3 md:px-16 md:py-4  lg:text-[1.0950rem] rounded-sm poppins-semibold hover:bg-azulHover transition-all duration-300 mx-auto block w-fit uppercase mt-11 md:mt-12"
    >
      Ver Más
    </Link>
  );
}

import { FaPhoneAlt } from "react-icons/fa";

export default function BtnLlamadaFlotante() {
  return (
    <div className="fixed bottom-5 right-5 z-30 flex justify-center items-center mt-6 lg:hidden">
      <div className="absolute w-16 h-16 bottom-1 right-1 animate-fade-in-out rounded-full bg-azulHover/30 "></div>
      <a
        href="tel:+51979906253"
        className="flex items-center justify-center  bg-azulHover text-white rounded-full w-[4.375rem] h-[4.375rem] hover:bg-azulHover transition-all duration-300 fixed lg:hidden bottom-5 right-5 text-[1.625rem] z-30"
      >
        <FaPhoneAlt />
      </a>
    </div>
  );
}

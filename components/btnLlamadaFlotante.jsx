import { FaPhoneAlt } from "react-icons/fa";

export default function BtnLlamadaFlotante() {
  return (
    <div className="fixed bottom-[4.7rem] right-5 z-30 flex justify-center items-center mt-6 lg:hidden">
      <div className="absolute w-14 h-14 bottom-1 right-1 animate-fade-in-out rounded-full bg-azulHover/30 "></div>
      <a
        href="tel:+51979906253"
        className="flex items-center justify-center bg-azulHover text-white rounded-full w-[3.9rem] h-[3.9rem] hover:bg-azulHover transition-all duration-300 fixed lg:hidden bottom-[4.7rem] right-5 text-[1.625rem] z-30"
      >
        <FaPhoneAlt className="text-2xl" />
      </a>
    </div>
  );
}

import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

export default function TopBar() {
  return (
    <div className="bg-azulPrimary text-white py-3 md:py-2 px-3">
      <div className="flex items-center justify-between contenedor">
        <div className="flex items-center gap-7">
          <div className="flex items-center gap-2">
            <FaLocationDot className="md:text-lg" />
            <p className="leading-3 md:leading-4 text-[0.680rem] md:text-xs poppins-medium">
              Mz. 19 Lt 05 PJ Chosica del <br /> Norte, La Victoria – Chiclayo
            </p>
          </div>

          <Separator orientation="vertical" className="h-5 hidden md:flex" />

          <div className="md:flex hidden items-center gap-2">
            <MdEmail className="text-lg" />
            <a
              href="mailto:comercializacion.grupocastillo@hotmail.com"
              className="block text-xs poppins-medium "
            >
              comercializacion.grupocastillo@hotmail.com
            </a>
          </div>
        </div>

        <Separator
          orientation="vertical"
          className="h-5 lg:hidden sm:hidden md:flex flex"
        />
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="md:text-lg" />
          <a
            href="tel:+51979906253"
            className="block text-[0.750rem] md:text-[0.845rem] tracking-wide poppins-medium"
          >
            +51 979906253
          </a>
        </div>
      </div>
    </div>
  );
}

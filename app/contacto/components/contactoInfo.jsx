import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";
import InfoIcons from "./infoIcons";

export default function ContactoInfo() {
  return (
    <div>
      <h2 className="text-[1.80rem] md:text-[2.5rem] lg:text-[2.75rem] poppins-bold leading-10 md:leading-[3rem] text-azulPrimary mb-2">
        Hablemos sobre tu próximo proyecto
      </h2>
      <p className="text-gris md:text-lg mb-3 md:mb-5">
        Asesoría experta y atención personalizada.
      </p>
      <p className="mb-5">
        Estamos listos para escucharte. Contáctanos y obtén soluciones
        eficientes, maquinaria de calidad y un equipo comprometido con el éxito
        de tu obra.{" "}
        <span className="text-azulPrimary poppins-medium">
          ¡Completa el formulario y hablemos!
        </span>
      </p>

      <div className="flex flex-wrap gap-5 ">
        <InfoIcons
          icono={FaLocationDot}
          texto="Dirección"
          info="Mz. 19 Lt 05 PJ Chosica del Norte, La Victoria – Chiclayo"
        />
        <InfoIcons icono={FaPhoneAlt} texto="Llámanos" info="+51 979906253" />
        <InfoIcons
          icono={BsFillSendFill}
          texto="Escríbenos"
          info="comercializacion.grupocastillo@hotmail.com"
        />
      </div>
    </div>
  );
}

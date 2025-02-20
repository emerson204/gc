import CertiCheck from "./certiCheck";
import { FaCheckSquare } from "react-icons/fa";

export default function Certi() {
  return (
    <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 mb-14">
      <div className="flex flex-col gap-5 lg:gap-10">
        <CertiCheck
          certi="Registro OSINERGMIN N° 108889-112-230916 de fecha 26/09/2016 como Consumidor Directo de Combustibles Líquidos y Otros Productos Derivados de los Hidrocarburos."
          className="text-6xl md:text-[1.6875rem] lg:text-[3.875rem]"
        />
        <CertiCheck
          certi="Asfalto certificado por nuestro proveedor Petróleos del Perú SAC y Repsol SA"
          className="text-[27px] md:text-[1.0625rem] "
        />
        <CertiCheck
          certi="Aditivo Mejorador de Adherencia QUIMIBOND 3000. Petróleos del Perú SAC y Repsol SA"
          className="text-3xl md:text-[1.0625rem] lg:text-[2rem]"
        />
      </div>
      <div className="flex flex-col gap-3 lg:gap-5">
        <div className="flex gap-4">
          <FaCheckSquare className="text-azulPrimary text-2xl md:text-lg lg:text-3xl" />
          <div>
            <h3 className="poppins-medium text-lg mb-2">ISOs:</h3>
            <ul className="list-disc ml-6">
              <li className="mb-3">
                ISO 37001:2016 Sistema de Gestión Anti soborno
              </li>
              <li className="mb-3">
                ISO 45001:2018 Sistema de Gestión de Seguridad y Salud en el
                Trabajo
              </li>
              <li className="mb-3">
                ISO 14001:2015 Sistema de Gestión Ambiental
              </li>
            </ul>
          </div>
        </div>
        <CertiCheck
          certi="Control de Calidad supervisado con conformidad de otra empresa “Servicios de Laboratorio de Suelos y Pavimentos S.A.C. con RUC: 20487357465”."
          className="text-5xl md:text-[1.6875rem]  lg:text-[3.7rem]"
        />
      </div>
    </div>
  );
}

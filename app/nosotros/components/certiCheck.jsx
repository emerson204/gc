import React from "react";
import { FaCheckSquare } from "react-icons/fa";

export default function CertiCheck({ certi, className }) {
  return (
    <div className="flex gap-4 items-center lg:items-start">
      <FaCheckSquare className={`${className} text-azulPrimary lg:text-3xl`} />
      <p>{certi}</p>
    </div>
  );
}

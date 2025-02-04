export default function Principios({ titulo, descripcion }) {
  return (
    <div className="text-center bg-white shadow px-3 md:px-5 py-6 md:py-7 rounded-lg">
      <h3 className="text-2xl lg:text-[1.625rem] poppins-semibold mb-3 text-azulPrimary">
        {titulo}
      </h3>
      <p>{descripcion}</p>
    </div>
  );
}

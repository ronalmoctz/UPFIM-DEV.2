import AboutImg from "../../../assets/about.webp";
const About = () => {
  return (
    <div className="bg-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 px-4 md:px-8">
      <div className="md:w-1/2">
        <img src={AboutImg} alt="" />
      </div>

      <div className="md:w-3/5">
        <h2 className="md:text-5xl text-3xl font-bold text-slate-900 mb-5 leading-normal text-center">
          ¿Por qué cursar un taller durante tu ciclo escolar{" "}
          <span className="text-verde">en la UPFIM?</span>
        </h2>

        <p className="text-slate-800 text-lg mb-5 text-justify">
          Ofrecer servicios de transporte de carga a través de unidades modernas
          y equipadas con tecnología de punta, que permitan satisfacer las
          expectativas de nuestros clientes, logrando ser la mejor opción en la
          cadena logística de distribución.
        </p>
        <div className="flex justify-center">
          <button className="py-3 px-8 bg-verde font-semibold text-white rounded-lg transform transition-transform duration-300 hover:scale-105">
            Vamos
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

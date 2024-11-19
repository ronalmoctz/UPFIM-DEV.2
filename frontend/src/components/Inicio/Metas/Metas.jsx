import React from "react";
import metaMedall from "../../../assets/medall.svg";
import metaTropy from "../../../assets/tropy.svg";
import metaGoal from "../../../assets/goals.svg";

const Metas = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto bg-white dark:bg-slate-700">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="lg:w-1/4">
          <h3 className="text-3xl text-slate-700 font-bold lg:w-1/2 mb-3 dark:text-gray-300">
            Nuestros Servicios
          </h3>
          <p className="text-base text-slate-700 dark:text-gray-300">
            Te Ofrecemos la mejor logistica para planear de forma mas eficiente
            el modo en que serán transportados y almacenados los bienes que
            necesita trasladar en el mejor plazo posible y con seguridad que
            nosotros brindamos
          </p>
        </div>
        <div className="w-full lg:w-3/4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8 ">
            <div className="file-card h-96 p-8 items-center flex justify-center gradient-card-one">
              <div>
                <img src={metaMedall} alt="img" className="p-4 mt-3" />
                <h5 className="text-2xl font-semibold text-slate-900 px-5 text-center dark:text-black">
                  Transporte encapsulado
                </h5>
              </div>
            </div>

            <div className="file-card h-96 p-8 items-center flex justify-center md:mt-16 gradient-card-two">
              <div>
                <img src={metaTropy} alt="img" className="p-4 mt-3" />
                <h5 className="text-2xl font-semibold text-slate-300 px-5 text-center dark:text-white">
                  Transporte encapsulado
                </h5>
              </div>
            </div>

            <div className="file-card h-96  p-8 items-center flex justify-center gradient-card-three ">
              <div>
                <img src={metaGoal} alt="img" className="p-4 mt-3" />
                <h5 className="text-2xl font-semibold text-slate-900 px-5 text-center dark:text-verde">
                  Transporte encapsulado
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metas;

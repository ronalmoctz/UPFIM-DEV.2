import React from "react";
import metaimg from "../../../assets/metas.png";

const Metas = () => {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="lg:w-1/4">
          <h3 className="text-3xl text-slate-700 font-bold lg:w-1/2 mb-3 ">
            Nuestros Servicios
          </h3>
          <p className="text-base text-slate-700">
            Te Ofrecemos la mejor logistica para planear de forma mas eficiente
            el modo en que serán transportados y almacenados los bienes que
            necesita trasladar en el mejor plazo posible y con seguridad que
            nosotros brindamos
          </p>
        </div>
        <div className="w-full lg:w-3/4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <div
              className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center cursor-pointer"
              
            >
              <div>
                <img src={metaimg} alt="img" />
                <h5 className="text-2xl font-semibold text-slate-900 px-5 text-center mt-5 ">
                  Transporte encapsulado
                </h5>
              </div>
            </div>

            <div
              className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center  cursor-pointer md:mt-16"
              
            >
              <div>
                <img src={metaimg} alt="img" />
                <h5 className="text-2xl font-semibold text-slate-900 px-5 text-center mt-5 ">
                  Transporte encapsulado
                </h5>
              </div>
            </div>

            <div
              className="bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center  cursor-pointer  "
            >
              <div>
                <img src={metaimg} alt="img" />
                <h5 className="text-2xl font-semibold text-slate-900 px-5 text-center mt-5 ">
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

import React from 'react';

const Hero = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-[70px] py-[220px] max-md:px-5 max-md:py-[100px] 
      bg-gradient-to-b from-blue-100 to-blue-200 dark:from-[#0A0F1A] dark:to-[#1A1F2E] transition-colors duration-500">
      <div className="w-[936px] max-w-full -mb-11 max-md:mb-2.5">
        <div className="flex gap-16 max-md:flex-col max-md:items-center">

          {/* Imagem com borda */}
          <div className="w-[41%] max-md:w-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/cd6130fc011782bcdae421934c24cadf022e055b?placeholderIfAbsent=true"
              alt="Yúri Cordeiro profile"
              className="aspect-[1] object-contain w-full border-8 border-white dark:border-[#E5E7EB] shadow-lg max-md:mt-10 transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Texto */}
          <div className="w-[59%] max-md:w-full max-md:mt-8">
            <div className="flex flex-col items-start max-md:items-center text-[#0F172B] dark:text-[#F8FAFC] my-auto max-md:max-w-full">
              <h1 className="text-black dark:text-[#FFFFFF] text-[52px] font-bold leading-none max-md:text-[40px] max-md:text-center">
                Yúri Cordeiro
              </h1>
              <h2 className="text-[#0F172B] dark:text-[#FFFFFF] text-2xl font-semibold leading-none max-md:text-center">
                UX/UI Designer
              </h2>
              <p className="text-[#0F172B] dark:text-[#F8FAFC] text-lg font-normal leading-6 mt-[39px] max-md:text-center">
                Sou um designer UX/UI{" "}
                <span className="dark:text-[#F8FAFC]">
                  apaixonado por criar experiências digitais simples, funcionais e impactantes.{" "}
                </span>
                Acredito que um bom design vai além da estética: ele resolve problemas e conecta pessoas.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

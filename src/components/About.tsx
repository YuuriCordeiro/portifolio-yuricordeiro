import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center px-5 py-[100px] max-md:py-20 transition-colors duration-500"
    >
      <h2 className="text-black dark:text-white text-center text-[32px] font-bold leading-none max-md:text-3xl">
        Sobre mim
      </h2>

      <p className="text-[#0F172B] dark:text-[#F8FAFC] text-center text-lg font-normal leading-7 mt-6 max-w-[760px] max-md:max-w-full">
        Sou um profissional autodidata, apaixonado por criar soluções que impactam pessoas. 
        Cursando Análise e Desenvolvimento de Sistemas e certificações em cibersegurança, 
        uno tecnologia e design para produtos funcionais, acessíveis e inclusivos.
      </p>
    </section>
  );
};

export default About;

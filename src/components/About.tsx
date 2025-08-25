import React, { useRef, useEffect, useState } from "react";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Para não continuar observando
        }
      },
      { threshold: 0.2 } // 20% visível para ativar
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="about"
      role="region"
      aria-label="Sobre mim"
      ref={sectionRef}
      className={`w-full flex flex-col items-center px-5 py-[100px] max-md:py-20 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-black dark:text-white text-center text-[32px] font-bold leading-none max-md:text-3xl">
        Sobre mim
      </h2>
      <p className="text-[#0F172B] dark:text-[#F8FAFC] text-center text-lg font-normal leading-relaxed tracking-wide mt-6 max-w-[760px] max-md:max-w-full">
        Sou um profissional autodidata, apaixonado por criar soluções que impactam pessoas. Cursando Análise e Desenvolvimento de Sistemas e certificações em cibersegurança, uno tecnologia e design para produtos funcionais, acessíveis e inclusivos.
      </p>
    </section>
  );
};

export default About;

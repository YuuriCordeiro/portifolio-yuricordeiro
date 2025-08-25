import React, { useRef, useEffect, useState } from "react";
import ContactForm from "./ContactForm";

const Contact: React.FC = () => {
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
      id="contact"
      ref={sectionRef}
      className={`w-full flex flex-col items-center bg-white dark:bg-[#020817] transition-all duration-[1200ms] ease-in-out 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <h2 className="text-black dark:text-white text-center text-[32px] font-normal leading-none mt-20 max-md:mt-10">
        Contato
      </h2>
      <p className="text-black dark:text-white text-xl font-normal leading-[1.2] text-center mt-[23px] max-md:max-w-full">
        Vamos conversar sobre projetos e oportunidades.
      </p>

      <div className="w-full max-w-[1160px] mt-[60px] max-md:max-w-full max-md:mt-10 px-5">
        <div className="gap-5 flex items-center max-md:flex-col max-md:items-center">
          {/* Coluna da esquerda */}
          <div className="w-6/12 max-md:w-full flex items-center max-md:justify-center">
            <div className="flex flex-col justify-center max-md:items-center text-left max-md:text-center max-md:px-4">
              <h3 className="text-[#0F172B] dark:text-[#F8FAFC] text-2xl font-medium leading-none max-md:text-xl">
                Sempre aberto a novas oportunidades!
              </h3>
              <p className="text-[#0F172B] dark:text-[#F8FAFC] text-lg font-normal leading-8 mt-5 max-md:text-base max-md:leading-7">
                Sou movido pela curiosidade e pelo aprendizado contínuo. Acredito que cada experiência é uma chance de evoluir e estou sempre pronto para encarar novos desafios.
                <br />
                Seja em projetos inovadores, colaborações ou networking, quero trocar conhecimentos e construir algo incrível — seja de forma profissional ou voluntária.
              </p>
            </div>
          </div>

          {/* Coluna da direita */}
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0 max-md:mt-8 flex items-center justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

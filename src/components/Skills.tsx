import React, { useRef, useEffect, useState } from 'react';
import SkillCard from './SkillCard';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const designSkills = [
    { icon: "https://api.builder.io/api/v1/image/assets/TEMP/3fc8dc38e732e34be408b92c5175065f1d926ae8?placeholderIfAbsent=true", title: "Figma", description: "(protótipos, wireframes e design de interfaces)" },
    { icon: "https://api.builder.io/api/v1/image/assets/TEMP/613de89cc900c1db7653d839b9f73fd08b6cb4bc?placeholderIfAbsent=true", title: "Criação de layout responsivo", description: "(desktop, tablet, mobile)" },
    { icon: "https://api.builder.io/api/v1/image/assets/TEMP/9c2af679cd41b15972892d202cd7e61c773ddeaa?placeholderIfAbsent=true", title: "Wireframing e prototipagem" },
    { icon: "https://api.builder.io/api/v1/image/assets/TEMP/10ba5f14a6807ed7da2f6a652c5192645b99b75b?placeholderIfAbsent=true", title: "Design System", description: "(organização de cores, tipografia e componentes)" },
    { icon: "https://api.builder.io/api/v1/image/assets/TEMP/9d5d86501e9636a2061956f72a0f0207400203ca?placeholderIfAbsent=true", title: "Noções de usabilidade e acessibilidade" }
  ];

  const toolsSkills = [
    { icon: "https://api.builder.io/api/v1/image/assets/TEMP/72b231db74247bc3768dedaab4c671e16f2fd2c9?placeholderIfAbsent=true", title: "Pesquisa e análise de referências", description: "(benchmarking)" },
    { icon: "https://api.builder.io/api/v1/image/assets/TEMP/5574d6035ace931063edeb3f5a4a69b7e1a50b3e?placeholderIfAbsent=true", title: "Trabalho autodidata", description: "(aprendizado contínuo)" },
    { icon: "https://api.builder.io/api/v1/image/assets/TEMP/9bc25c0cc42e5fef677d450f8308cd5a04d9d639?placeholderIfAbsent=true", title: "Colaboração em equipe", description: "(Criando junto, evoluindo sempre.)" }
  ];

  const techSkills = [
    { icon: "/imagens/cibersec.png", title: "Noções de cibersegurança" },
    { icon: "/imagens/redes.png", title: "Fundamentos de infraestrutura e redes" },
    { icon: "/imagens/devops.png", title: "Interesse em DevOps e segurança de aplicações" }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`bg-slate-50 dark:bg-gray-900 shadow-[0px_2px_6px_rgba(0,0,0,0.25)] w-full flex flex-col items-center justify-center mt-20 px-20 py-[60px] max-md:mt-10 max-md:px-5 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex w-full max-w-[1160px] flex-col items-stretch max-md:max-w-full">
        <h2 className="text-black dark:text-white text-center text-[32px] font-normal leading-none self-center">
          Habilidades
        </h2>
        <div className="mt-[27px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[33%] max-md:w-full flex flex-col">
              <SkillCard title="Design & UI/UX" skills={designSkills} className="flex-1 mt-[5px] pb-8 max-md:mt-10" />
            </div>
            <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0 flex flex-col">
              <SkillCard title="Ferramentas & Métodos" skills={toolsSkills} className="flex-1 pb-[168px] max-md:mt-10 max-md:pb-[100px]" />
            </div>
            <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0 flex flex-col">
              <SkillCard title="Tecnologia & Segurança" skills={techSkills} className="flex-1 pb-[225px] max-md:mt-10 max-md:pb-[100px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // fecha o menu ao clicar
    }
  };

  return (
    <header className="bg-slate-50 dark:bg-gray-900 shadow-[0px_2px_6px_rgba(0,0,0,0.25)] w-full flex flex-col justify-center py-5 transition-colors duration-500">
      <div className="w-full max-w-[1160px] mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <div className="text-black dark:text-white text-lg font-medium leading-none transition-colors duration-500">
          Yúri Cordeiro
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-8 text-base font-normal transition-colors duration-500">
          <button
            onClick={() => scrollToSection('about')}
            className="text-[#0F172B] dark:text-white hover:opacity-70 transition-opacity"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-[#0F172B] dark:text-white hover:opacity-70 transition-opacity"
          >
            Projetos
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-[#0F172B] dark:text-white hover:opacity-70 transition-opacity"
          >
            Habilidades
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-[#0F172B] dark:text-white hover:opacity-70 transition-opacity"
          >
            Contato
          </button>
        </div>

        {/* Botão hamburger mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#0F172B] dark:text-white focus:outline-none transition-colors duration-500"
          >
            {/* Ícone hamburger */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden w-full max-w-[1160px] mx-auto px-5 flex flex-col gap-4 mt-4 transition-colors duration-500">
          <button
            onClick={() => scrollToSection('about')}
            className="text-[#0F172B] dark:text-white hover:opacity-70 transition-opacity"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-[#0F172B] dark:text-white hover:opacity-70 transition-opacity"
          >
            Projetos
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-[#0F172B] dark:text-white hover:opacity-70 transition-opacity"
          >
            Habilidades
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-[#0F172B] dark:text-white hover:opacity-70 transition-opacity"
          >
            Contato
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

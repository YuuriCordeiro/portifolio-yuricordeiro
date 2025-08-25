import React, { useState, useRef } from "react";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const projectImages = [
    "/imagens/chambinho.png",
    "/imagens/sparkmind.png",
    "/imagens/grt.png",
    "/imagens/codigocerto.png",
    "/imagens/rioselection.png",
    "/imagens/bicraft.png",
    "/imagens/tjb.png",
  ];

  const scrollAmount = 400;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      className="w-full flex flex-col items-center px-5 py-[100px] transition-colors duration-500"
    >
      <h2 className="text-black dark:text-white text-center text-[32px] font-bold leading-none max-md:text-3xl">
        Projetos
      </h2>

      <div className="relative w-full mt-8">
        {/* Seta esquerda */}
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white dark:bg-black/70 dark:hover:bg-black rounded-full p-3 shadow-lg transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-black dark:text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Carrossel */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto scrollbar-none flex gap-6 px-5 lg:px-10"
        >
          {projectImages.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] sm:w-[450px] lg:w-[550px] xl:w-[600px]"
            >
              <img
                src={src}
                alt={`Project ${index + 1}`}
                className="h-[350px] w-full object-cover object-top rounded-2xl cursor-pointer hover:scale-105 transition-transform shadow-lg"
                onClick={() => setSelectedImage(src)}
              />
            </div>
          ))}
        </div>

        {/* Seta direita */}
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 hover:bg-white dark:bg-black/70 dark:hover:bg-black rounded-full p-3 shadow-lg transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-black dark:text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Project full"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default Projects;

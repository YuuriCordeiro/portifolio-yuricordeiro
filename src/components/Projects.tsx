import React, { useState } from "react";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projectImages = [
    "/imagens/sparkmind.png",
    "/imagens/grt.png",
    "/imagens/codigocerto.png",
    "/imagens/rioselection.png",
    "/imagens/bicraft.png",
    "/imagens/tjb.png"
  ];

  return (
    <section
      id="projects"
      className="w-full flex flex-col items-center px-5 py-[100px] transition-colors duration-500"
    >
      <h2 className="text-black dark:text-white text-center text-[32px] font-bold leading-none max-md:text-3xl">
        Projetos
      </h2>

      {/* Grid */}
      <div className="w-full max-w-[1160px] mt-8 max-md:max-w-full flex flex-wrap gap-5 justify-center">
        {projectImages.map((src, index) => (
          <div key={index} className="w-[32%] max-md:w-full">
            <img
              src={src}
              alt={`Project ${index + 1}`}
              className="aspect-[1.8] object-cover object-top w-full rounded-2xl cursor-pointer hover:scale-105 transition-transform shadow-lg"
              onClick={() => setSelectedImage(src)}
            />
          </div>
        ))}
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


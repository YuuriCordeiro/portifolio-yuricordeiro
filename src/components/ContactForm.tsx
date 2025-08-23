import React from 'react';
import { Button } from '@/components/ui/button';

const ContactForm = () => {
  return (
    <div className="bg-gray-100 dark:bg-[#1F2937] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] border-gray-300 dark:border-gray-700 border flex w-full flex-col items-center mx-auto px-10 py-8 rounded-2xl max-md:max-w-full max-md:px-5">

      
      {/* Conteúdo textual centralizado */}
      <h3 className="text-black dark:text-white text-2xl font-medium leading-none mb-[22px] text-center">
  Vamos criar juntos?
</h3>

      <p className="text-[#0F172B] dark:text-[#F8FAFC]  text-lg font-normal leading-8 mb-[22px] text-center">
        Gosto de trocar ideias e aprender com novas experiências.
      </p>
      <p className="text-[#0F172B] dark:text-[#F8FAFC] text-lg font-normal leading-8 mb-5 max-md:max-w-full text-center">
        Se quiser falar sobre design, tecnologia ou networking, me chame nas redes sociais —{" "}
        <span className="font-semibold text-[#0F172B] dark:text-[#F8FAFC]">será um prazer conectar com você!</span>
      </p>
      
      {/* Ícones */}
      <div className="flex w-72 max-w-full items-center gap-5 justify-between mt-5">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/yuri-cordeiroo/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:opacity-70 transition-opacity"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/8079a677e217bf27fbe5975358232631f80f6e2c?placeholderIfAbsent=true"
            alt="LinkedIn"
            className="aspect-[1] object-contain w-20 shrink-0"
          />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/cordeiroy/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:opacity-70 transition-opacity"
        >
          <div className="flex items-center justify-center w-20 h-20">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/61da91cca9cd3a8d369992a40efb21bd1ecfb182?placeholderIfAbsent=true"
              alt="Instagram"
              className="w-12 h-12"
            />
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/5524999671855"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:opacity-70 transition-opacity"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c35b8d90c21745c900b9038c53da090883058d1b?placeholderIfAbsent=true"
            alt="WhatsApp"
            className="aspect-[1] object-contain w-20 shrink-0"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
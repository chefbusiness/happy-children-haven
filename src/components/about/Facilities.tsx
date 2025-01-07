import React from "react";

const Facilities = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
        Nuestras Instalaciones
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="aspect-video rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/442d45bd-1500-46dc-bc8b-38f7f37c5c72.png" 
            alt="Área de juegos y aprendizaje con bloques educativos de colores"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-video rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/f711483c-39d6-4b4e-a21e-a6d8a42fd56b.png" 
            alt="Salón de clases con mesas y sillas coloridas, decorado con números y letras"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-video rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/02147882-7d95-446e-9b7b-0ea115262ce9.png" 
            alt="Niño participando en actividades educativas y recreativas"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-video rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/996e5047-24be-4d37-8130-6f06980b4664.png" 
            alt="Salón infantil con decoración educativa y área de juegos"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Facilities;
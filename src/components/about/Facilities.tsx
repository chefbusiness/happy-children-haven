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
            src="/lovable-uploads/7bc70d9d-7fbd-41c7-b4f0-b58379147407.png" 
            alt="Niños jugando y divirtiéndose con lentes creativos"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-video rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/064fe58c-ba13-464d-8aef-405fec4d434d.png" 
            alt="Grupo de niños participando en actividades educativas"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-video rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/27820403-d30f-4f9d-a926-9bee90c85ce3.png" 
            alt="Niños disfrutando en el área verde de juegos"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="aspect-video rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/c1a6fa5b-1f26-4387-a19c-a2a24a38e7ae.png" 
            alt="Celebración navideña con niños y personal de la guardería"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Facilities;
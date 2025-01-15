import { useState } from "react";
import { Image } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOMetadata from "@/components/SEOMetadata";

const Galeria = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/lovable-uploads/dd615389-dd80-4aaf-b6ad-5d55702643be.png",
      alt: "Niños jugando en el área verde",
      category: "Juegos y Diversión"
    },
    {
      src: "/lovable-uploads/2497bf72-a47a-4cc0-b090-a5c42dcddf3f.png",
      alt: "Actividades educativas en el aula",
      category: "Educación"
    },
    {
      src: "/lovable-uploads/e3800a28-9a5f-4531-ac4b-bca8cd1d027e.png",
      alt: "Celebración navideña con los niños",
      category: "Eventos Especiales"
    },
    {
      src: "/lovable-uploads/e7e092b3-18bf-4d48-b648-ff91fda7a33b.png",
      alt: "Niños jugando y aprendiendo",
      category: "Actividades Diarias"
    },
    {
      src: "/lovable-uploads/8452ba5a-9dce-4e29-b7a5-6af529d88edd.png",
      alt: "Momento de descanso en el área verde",
      category: "Momentos Especiales"
    },
    {
      src: "/lovable-uploads/15350a72-716f-4320-a7ab-4eaf40d0b6b5.png",
      alt: "Niños en actividades recreativas",
      category: "Recreación"
    },
    {
      src: "/lovable-uploads/1bde3a84-9f78-4776-8a70-8dcd4a146ba2.png",
      alt: "Celebración de cumpleaños",
      category: "Eventos Especiales"
    },
    {
      src: "/lovable-uploads/4cc3df72-0e81-43a5-8824-975efd2b4943.png",
      alt: "Niños jugando con rompecabezas",
      category: "Desarrollo y Aprendizaje"
    },
    {
      src: "/lovable-uploads/f51fa39c-3f1c-42ed-b0f4-d2f8f99f6be3.png",
      alt: "Actividades educativas grupales",
      category: "Educación"
    },
    {
      src: "/lovable-uploads/ff47bd79-690e-4f13-b462-7c88d1ba1014.png",
      alt: "Niños en actividades recreativas",
      category: "Juegos y Diversión"
    },
    {
      src: "/lovable-uploads/58ffa90b-605b-477a-ae46-a1f7fddccbf0.png",
      alt: "Merienda al aire libre",
      category: "Momentos Especiales"
    },
    {
      src: "/lovable-uploads/8207066d-2ded-4ab9-b24c-8350168866ce.png",
      alt: "Niños armando rompecabezas",
      category: "Desarrollo y Aprendizaje"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOMetadata
        title="Galería de Fotos - Guardería Mi Regazo | Momentos Especiales"
        description="Explora nuestra galería de fotos y conoce las actividades, eventos y momentos especiales que vivimos en Guardería Mi Regazo. ¡Descubre cómo cuidamos y educamos a nuestros pequeños!"
        canonicalUrl="https://guarderiamiregazo.com/galeria"
      />
      
      <Navigation />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestra Galería de Momentos Especiales
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre a través de imágenes cómo nuestros pequeños aprenden, juegan y crecen en un ambiente seguro y lleno de amor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <Image className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <img
                src={selectedImage}
                alt="Vista ampliada"
                className="w-full h-auto rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                <span className="sr-only">Cerrar</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Galeria;
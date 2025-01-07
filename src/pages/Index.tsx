import { Baby, Book, Heart, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const services = [
    {
      icon: Baby,
      title: "Cuidado Infantil",
      description: "Atención personalizada para cada etapa del desarrollo de tu hijo.",
    },
    {
      icon: Book,
      title: "Educación Temprana",
      description: "Programas educativos diseñados para estimular el aprendizaje.",
    },
    {
      icon: Heart,
      title: "Ambiente Seguro",
      description: "Instalaciones seguras y personal altamente calificado.",
    },
    {
      icon: Clock,
      title: "Horarios Flexibles",
      description: "Adaptados a las necesidades de las familias modernas.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-b from-[#7DD3FC] to-[#BAE6FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              El mejor cuidado para tu tesoro más preciado
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              En Guardería Mi Regazo, nos dedicamos a brindar un ambiente seguro, 
              educativo y lleno de amor para el desarrollo integral de tu pequeño.
            </p>
            <Button size="lg" className="bg-[#FEF7CD] hover:bg-[#FEF7CD]/90 text-primary">
              Agenda una visita
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 bg-[#F2FCE2] rounded-2xl text-center hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300"
              >
                <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#FEF7CD]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Sobre Mi Regazo
            </h2>
            <p className="text-gray-600 mb-8">
              Con años de experiencia en el cuidado infantil, nos enorgullece ser 
              parte del crecimiento y desarrollo de los niños de nuestra comunidad. 
              Nuestro equipo de profesionales está comprometido con brindar el mejor 
              cuidado y educación temprana.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Conoce más sobre nosotros
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
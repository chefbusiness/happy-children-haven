import { Baby, Book, Heart, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SEOMetadata from "@/components/SEOMetadata";

const Index = () => {
  const services = [
    {
      icon: Baby,
      title: "Cuidado Infantil",
      description: "Atención personalizada para cada etapa del desarrollo de tu hijo.",
      bgColor: "bg-primary hover:bg-primary/90",
      iconColor: "text-blue-600"
    },
    {
      icon: Book,
      title: "Educación Temprana",
      description: "Programas educativos diseñados para estimular el aprendizaje.",
      bgColor: "bg-secondary hover:bg-secondary/90",
      iconColor: "text-green-600"
    },
    {
      icon: Heart,
      title: "Ambiente Seguro",
      description: "Instalaciones seguras y personal altamente calificado.",
      bgColor: "bg-accent hover:bg-accent/90",
      iconColor: "text-yellow-600"
    },
    {
      icon: Clock,
      title: "Horarios Flexibles",
      description: "Adaptados a las necesidades de las familias modernas.",
      bgColor: "bg-[#FDE1D3] hover:bg-[#FDE1D3]/90",
      iconColor: "text-orange-600"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOMetadata
        title="Guardería Mi Regazo - Cuidado Infantil en Naguanagua, Carabobo"
        description="Centro líder en cuidado infantil en Naguanagua. Ofrecemos desarrollo integral, educación temprana y un ambiente seguro para el crecimiento de tu pequeño."
        canonicalUrl="https://guarderiamiregazo.com"
      />
      
      <Navigation />
      
      {/* Hero Section with pattern background */}
      <section className="relative pt-32">
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: 'url("/pattern-bg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(3px)'
          }}
        />
        <div className="relative z-10 bg-gradient-to-b from-primary to-primary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                El mejor cuidado para tu tesoro más preciado
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                En Guardería Mi Regazo, nos dedicamos a brindar un ambiente seguro, 
                educativo y lleno de amor para el desarrollo integral de tu pequeño.
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-gray-900 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300"
              >
                Agenda una visita gratuita
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`p-6 rounded-xl ${service.bgColor} transform hover:scale-105 transition-all duration-300 shadow-lg`}
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sobre Mi Regazo
            </h2>
            <p className="text-gray-700 mb-8">
              Con años de experiencia en el cuidado infantil, nos enorgullece ser 
              parte del crecimiento y desarrollo de los niños de nuestra comunidad. 
              Nuestro equipo de profesionales está comprometido con brindar el mejor 
              cuidado y educación temprana.
            </p>
            <Button 
              variant="outline" 
              className="bg-white hover:bg-gray-50 transform hover:scale-105 transition-all duration-300"
            >
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
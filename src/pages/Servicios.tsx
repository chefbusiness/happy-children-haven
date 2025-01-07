import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Baby, Brain, Apple, Music, Globe, Heart, Clock, Star } from "lucide-react";
import SEOMetadata from "@/components/SEOMetadata";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Servicios = () => {
  const servicios = [
    {
      icon: Baby,
      title: "Cuidado Infantil",
      description: "Atención personalizada por grupos de edad: maternal (1-2 años), preescolar (3-5 años). Personal capacitado y ambiente seguro.",
      bgColor: "bg-primary hover:bg-primary/90",
      iconColor: "text-blue-600"
    },
    {
      icon: Brain,
      title: "Estimulación Temprana",
      description: "Programas especializados para desarrollar habilidades motoras, cognitivas y sociales desde temprana edad.",
      bgColor: "bg-secondary hover:bg-secondary/90",
      iconColor: "text-green-600"
    },
    {
      icon: Apple,
      title: "Alimentación y Nutrición",
      description: "Menús balanceados y nutritivos, adaptados a las necesidades de cada edad, supervisados por nutricionistas.",
      bgColor: "bg-accent hover:bg-accent/90",
      iconColor: "text-yellow-600"
    },
    {
      icon: Music,
      title: "Actividades Especiales",
      description: "Clases de música, arte y expresión corporal para un desarrollo integral y creativo.",
      bgColor: "bg-[#FDE1D3] hover:bg-[#FDE1D3]/90",
      iconColor: "text-orange-600"
    },
    {
      icon: Globe,
      title: "Inglés Temprano",
      description: "Introducción al idioma inglés a través de juegos, canciones y actividades lúdicas.",
      bgColor: "bg-[#E5DEFF] hover:bg-[#E5DEFF]/90",
      iconColor: "text-purple-600"
    },
    {
      icon: Heart,
      title: "Desarrollo Socioemocional",
      description: "Actividades que fomentan la empatía, trabajo en equipo y habilidades sociales.",
      bgColor: "bg-[#FFDEE2] hover:bg-[#FFDEE2]/90",
      iconColor: "text-pink-600"
    },
    {
      icon: Clock,
      title: "Horarios Flexibles",
      description: "Diferentes opciones de horario para adaptarnos a las necesidades de cada familia.",
      bgColor: "bg-[#D3E4FD] hover:bg-[#D3E4FD]/90",
      iconColor: "text-sky-600"
    },
    {
      icon: Star,
      title: "Eventos Especiales",
      description: "Celebraciones, días temáticos y actividades familiares para crear momentos memorables.",
      bgColor: "bg-[#FEC6A1] hover:bg-[#FEC6A1]/90",
      iconColor: "text-amber-600"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOMetadata
        title="Servicios de Guardería Mi Regazo - Cuidado Infantil en Naguanagua"
        description="Descubre nuestros servicios de cuidado infantil, estimulación temprana, alimentación balanceada y actividades especiales. Desarrollo integral para niños en Naguanagua, Carabobo."
        canonicalUrl="https://guarderiamiregazo.com/servicios"
      />
      
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section - Ajustado el espaciado */}
        <section className="bg-gradient-to-b from-primary to-primary/50 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Nuestros Servicios
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Ofrecemos una amplia gama de servicios diseñados para el desarrollo integral 
                y bienestar de tu pequeño en un ambiente seguro y estimulante.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid - Nuevos colores y diseño mejorado */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicios.map((servicio) => (
                <Card 
                  key={servicio.title} 
                  className={`transform hover:scale-105 transition-all duration-300 ${servicio.bgColor} border-none shadow-lg`}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm">
                      <servicio.icon className={`w-8 h-8 ${servicio.iconColor}`} />
                    </div>
                    <CardTitle className="text-2xl">{servicio.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 text-base">
                      {servicio.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Mejorado para conversiones */}
        <section className="bg-gradient-to-r from-accent to-secondary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ¿Quieres conocer más sobre nuestros servicios?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Agenda una visita y conoce nuestras instalaciones. Estaremos encantados de mostrarte 
              cómo podemos contribuir al desarrollo de tu pequeño.
            </p>
            <button className="bg-accent hover:bg-accent/90 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              Agendar Visita Gratuita
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Servicios;
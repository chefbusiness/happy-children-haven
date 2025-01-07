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
    },
    {
      icon: Brain,
      title: "Estimulación Temprana",
      description: "Programas especializados para desarrollar habilidades motoras, cognitivas y sociales desde temprana edad.",
    },
    {
      icon: Apple,
      title: "Alimentación y Nutrición",
      description: "Menús balanceados y nutritivos, adaptados a las necesidades de cada edad, supervisados por nutricionistas.",
    },
    {
      icon: Music,
      title: "Actividades Especiales",
      description: "Clases de música, arte y expresión corporal para un desarrollo integral y creativo.",
    },
    {
      icon: Globe,
      title: "Inglés Temprano",
      description: "Introducción al idioma inglés a través de juegos, canciones y actividades lúdicas.",
    },
    {
      icon: Heart,
      title: "Desarrollo Socioemocional",
      description: "Actividades que fomentan la empatía, trabajo en equipo y habilidades sociales.",
    },
    {
      icon: Clock,
      title: "Horarios Flexibles",
      description: "Diferentes opciones de horario para adaptarnos a las necesidades de cada familia.",
    },
    {
      icon: Star,
      title: "Eventos Especiales",
      description: "Celebraciones, días temáticos y actividades familiares para crear momentos memorables.",
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
        {/* Hero Section */}
        <section className="bg-primary py-20">
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

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicios.map((servicio) => (
                <Card key={servicio.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                      <servicio.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <CardTitle className="text-xl">{servicio.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {servicio.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ¿Quieres conocer más sobre nuestros servicios?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Agenda una visita y conoce nuestras instalaciones. Estaremos encantados de mostrarte 
              cómo podemos contribuir al desarrollo de tu pequeño.
            </p>
            <button className="bg-accent hover:bg-accent/90 text-gray-900 px-8 py-3 rounded-lg font-semibold">
              Agendar Visita
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Servicios;
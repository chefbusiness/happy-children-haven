import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOMetadata from "@/components/SEOMetadata";
import Hero from "@/components/about/Hero";
import History from "@/components/about/History";
import MissionVision from "@/components/about/MissionVision";
import Team from "@/components/about/Team";
import Facilities from "@/components/about/Facilities";

const SobreNosotros = () => {
  return (
    <>
      <SEOMetadata
        title="Sobre Nosotros | Guardería Mi Regazo - Naguanagua, Carabobo"
        description="Conoce la historia, misión y equipo detrás de Guardería Mi Regazo. Más de 5 años brindando cuidado infantil de calidad en Naguanagua, Carabobo. Descubre nuestras instalaciones y compromiso con el desarrollo integral de los niños."
        canonicalUrl="https://guarderiamiregazo.com/sobre-nosotros"
      />
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <History />
          <MissionVision />
          <Team />
          <Facilities />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SobreNosotros;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOMetadata from "@/components/SEOMetadata";
import PricingCard from "@/components/precios/PricingCard";
import DiscountSection from "@/components/precios/DiscountSection";
import FAQSection from "@/components/precios/FAQSection";
import HeroSection from "@/components/precios/HeroSection";

const Precios = () => {
  const planes = [
    {
      nombre: "Plan Básico",
      precio: 80,
      descripcion: "Cuidado infantil esencial",
      caracteristicas: [
        "Cuidado de lunes a viernes",
        "Horario: 7:00 AM - 1:00 PM",
        "Merienda incluida",
        "Actividades recreativas",
        "Evaluación mensual"
      ],
      color: "bg-primary",
      textColor: "text-primary",
      popular: false
    },
    {
      nombre: "Plan Premium",
      precio: 120,
      descripcion: "La experiencia completa",
      caracteristicas: [
        "Cuidado de lunes a viernes",
        "Horario extendido: 7:00 AM - 5:00 PM",
        "Actividades especiales",
        "Estimulación temprana",
        "Tareas dirigidas",
        "Reporte semanal personalizado"
      ],
      color: "bg-accent",
      textColor: "text-accent",
      popular: true
    },
    {
      nombre: "Plan Flexible",
      precio: 150,
      descripcion: "Adaptado a tus necesidades",
      caracteristicas: [
        "Horario personalizable",
        "Alimentación opcional",
        "Actividades recreativas",
        "Clases especiales opcionales",
        "Evaluación mensual"
      ],
      color: "bg-secondary",
      textColor: "text-secondary",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOMetadata
        title="Precios y Planes - Guardería Mi Regazo en Naguanagua"
        description="Conoce nuestros planes y precios accesibles para el cuidado infantil en Naguanagua. Opciones flexibles que se adaptan a las necesidades de tu familia."
        canonicalUrl="https://guarderiamiregazo.com/precios"
      />
      
      <Navigation />
      
      <main className="flex-grow">
        <HeroSection />

        {/* Pricing Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {planes.map((plan) => (
                <PricingCard key={plan.nombre} {...plan} />
              ))}
            </div>
          </div>
        </section>

        <DiscountSection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default Precios;
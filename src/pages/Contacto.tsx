import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOMetadata from "@/components/SEOMetadata";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import LocationMap from "@/components/contact/LocationMap";

const Contacto = () => {
  return (
    <>
      <SEOMetadata
        title="Contacto | Guardería Mi Regazo en Naguanagua"
        description="Contáctanos para más información sobre nuestros servicios de guardería en Naguanagua. Ubicados en Calle Miranda, Sector Guere. Llámanos al +58 426 574 2607 o visítanos."
        canonicalUrl="https://guarderiamiregazo.com/contacto"
      />
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-primary/30 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Contáctanos
              </h1>
              <p className="text-lg text-gray-600">
                Estamos aquí para responder tus preguntas y ayudarte a brindar el mejor cuidado para tu pequeño.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-semibold mb-6">Información de contacto</h2>
                  <ContactInfo />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold mb-8 text-center">Nuestra ubicación</h2>
            <LocationMap />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contacto;
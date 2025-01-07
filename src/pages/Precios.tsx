import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOMetadata from "@/components/SEOMetadata";

const Precios = () => {
  const planes = [
    {
      nombre: "Plan Básico",
      precio: 150,
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
      precio: 250,
      descripcion: "La experiencia completa",
      caracteristicas: [
        "Cuidado de lunes a viernes",
        "Horario extendido: 7:00 AM - 5:00 PM",
        "Desayuno y almuerzo incluidos",
        "Clases de inglés",
        "Actividades especiales",
        "Estimulación temprana",
        "Reporte semanal personalizado"
      ],
      color: "bg-accent",
      textColor: "text-accent",
      popular: true
    },
    {
      nombre: "Plan Flexible",
      precio: 200,
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
        {/* Hero Section */}
        <section className="pt-32 bg-gradient-to-b from-primary to-primary/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Planes diseñados para tu familia
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Ofrecemos opciones flexibles y accesibles para el cuidado y desarrollo 
                de tu pequeño. ¡Encuentra el plan perfecto para tu familia!
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {planes.map((plan) => (
                <Card 
                  key={plan.nombre}
                  className={`relative transform hover:scale-105 transition-all duration-300 ${
                    plan.popular ? 'border-accent border-2' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-accent shadow-lg text-gray-800 px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 animate-pulse">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span>Más Popular</span>
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">{plan.nombre}</CardTitle>
                    <CardDescription>{plan.descripcion}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">${plan.precio}</span>
                      <span className="text-gray-600">/mes</span>
                    </div>
                    <ul className="space-y-3">
                      {plan.caracteristicas.map((caracteristica) => (
                        <li key={caracteristica} className="flex items-center gap-2">
                          <Check className={`h-5 w-5 ${plan.textColor}`} />
                          <span>{caracteristica}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className={`w-full ${plan.color} hover:${plan.color}/90`}
                    >
                      Seleccionar Plan
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Descuentos Section */}
        <section className="py-20 bg-gradient-to-r from-accent to-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Descuentos Especiales
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="mb-4">
                  <span className="font-semibold">Descuento por Hermanos:</span>
                  {" "}15% de descuento en la mensualidad del segundo hijo.
                </p>
                <p className="mb-4">
                  <span className="font-semibold">Pago Trimestral:</span>
                  {" "}10% de descuento al pagar tres meses por adelantado.
                </p>
                <p>
                  <span className="font-semibold">Inscripción Anticipada:</span>
                  {" "}Matrícula gratis al inscribirse con un mes de anticipación.
                </p>
              </div>
              <Button 
                variant="outline" 
                className="mt-8 bg-white hover:bg-gray-50 transform hover:scale-105 transition-all duration-300"
              >
                Consultar Disponibilidad
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Preguntas Frecuentes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="font-semibold text-lg mb-2">¿Qué incluye la matrícula?</h3>
                <p className="text-gray-600">
                  La matrícula incluye el material didáctico, seguro escolar y uniforme 
                  institucional para todo el año escolar.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">¿Cómo se manejan los pagos?</h3>
                <p className="text-gray-600">
                  Aceptamos pagos mensuales en efectivo, transferencia bancaria o pago 
                  móvil. Los pagos deben realizarse los primeros 5 días de cada mes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">¿Puedo cambiar de plan?</h3>
                <p className="text-gray-600">
                  Sí, puedes cambiar de plan al inicio de cada mes, previo aviso de 
                  al menos una semana.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">¿Hay período mínimo de permanencia?</h3>
                <p className="text-gray-600">
                  No exigimos un período mínimo, pero recomendamos al menos un trimestre 
                  para que el niño se adapte adecuadamente.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Precios;
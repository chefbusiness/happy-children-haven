import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOMetadata from "@/components/SEOMetadata";

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
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre la historia y el equipo detrás de Mi Regazo, donde cada niño es parte de nuestra familia
            </p>
          </div>

          {/* Historia Section */}
          <section className="mb-16">
            <Card className="bg-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                  Nuestra Historia
                </h2>
                <p className="text-gray-600 mb-4">
                  Mi Regazo nació en 2018 con la visión de crear un espacio donde los niños pudieran desarrollarse en un ambiente seguro, amoroso y estimulante. Desde entonces, hemos crecido junto a las familias de Naguanagua, manteniendo siempre nuestro compromiso con la excelencia en el cuidado infantil.
                </p>
                <p className="text-gray-600">
                  A lo largo de estos años, hemos formado un equipo excepcional de profesionales dedicados y hemos implementado programas educativos innovadores que fomentan el desarrollo integral de cada niño.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Misión y Visión */}
          <section className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-secondary/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Nuestra Misión
                </h2>
                <p className="text-gray-600">
                  Brindar un servicio de cuidado infantil integral que promueva el desarrollo físico, emocional e intelectual de cada niño en un ambiente seguro y estimulante, trabajando en estrecha colaboración con las familias.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-accent/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Nuestra Visión
                </h2>
                <p className="text-gray-600">
                  Ser reconocidos como la guardería líder en Naguanagua por nuestra excelencia en el cuidado infantil, innovación educativa y compromiso con el desarrollo integral de cada niño.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Equipo Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
              Nuestro Equipo
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg" alt="Aura Núñez" />
                      <AvatarFallback>AN</AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Aura Núñez
                  </h3>
                  <p className="text-gray-600 mb-2">Directora Educativa</p>
                  <p className="text-sm text-gray-500">
                    Licenciada en Educación Inicial con más de 15 años de experiencia en educación temprana.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg" alt="Ana Martínez" />
                      <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Ana Martínez
                  </h3>
                  <p className="text-gray-600 mb-2">Coordinadora Pedagógica</p>
                  <p className="text-sm text-gray-500">
                    Especialista en desarrollo infantil y planificación de actividades educativas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg" alt="Carlos Pérez" />
                      <AvatarFallback>CP</AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Carlos Pérez
                  </h3>
                  <p className="text-gray-600 mb-2">Psicólogo Infantil</p>
                  <p className="text-sm text-gray-500">
                    Dedicado al acompañamiento emocional y desarrollo psicológico de nuestros niños.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Instalaciones Section */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
              Nuestras Instalaciones
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/442d45bd-1500-46dc-bc8b-38f7f37c5c72.png" 
                  alt="Área de juegos y aprendizaje con bloques educativos de colores"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/f711483c-39d6-4b4e-a21e-a6d8a42fd56b.png" 
                  alt="Salón de clases con mesas y sillas coloridas, decorado con números y letras"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/02147882-7d95-446e-9b7b-0ea115262ce9.png" 
                  alt="Niño participando en actividades educativas y recreativas"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/996e5047-24be-4d37-8130-6f06980b4664.png" 
                  alt="Salón infantil con decoración educativa y área de juegos"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SobreNosotros;
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const History = () => {
  return (
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
  );
};

export default History;
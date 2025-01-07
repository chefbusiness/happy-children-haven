import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const MissionVision = () => {
  return (
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
  );
};

export default MissionVision;
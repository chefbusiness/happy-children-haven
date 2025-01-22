import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Team = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
        Nuestro Equipo
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/lovable-uploads/f680df2a-8701-422f-839e-a68dd61cde47.png" alt="Aura Núñez" />
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
                <AvatarImage src="/lovable-uploads/969d713b-7e67-48bf-8895-f487b6cf1e3c.png" alt="Yesenia Villot" />
                <AvatarFallback>YV</AvatarFallback>
              </Avatar>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Yesenia Villot
            </h3>
            <p className="text-gray-600 mb-2">Coordinadora Pedagógica</p>
            <p className="text-sm text-gray-500">
              Especialista en planificación educativa y desarrollo de programas pedagógicos personalizados.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/lovable-uploads/dd2568f0-a22c-4e1b-aabf-46e553543d4b.png" alt="Arelis Rueda" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Arelis Rueda
            </h3>
            <p className="text-gray-600 mb-2">Psicopedagoga</p>
            <p className="text-sm text-gray-500">
              Brinda apoyo y orientación especializada en casos específicos que requieren atención psicopedagógica.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/lovable-uploads/dd2568f0-a22c-4e1b-aabf-46e553543d4b.png" alt="Dra. Nairoby Rondon" />
                <AvatarFallback>NR</AvatarFallback>
              </Avatar>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Dra. Nairoby Rondon
            </h3>
            <p className="text-gray-600 mb-2">Pediatra</p>
            <p className="text-sm text-gray-500">
              Realiza jornadas de evaluación pediátrica para asegurar el óptimo desarrollo y salud de nuestros niños.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Team;
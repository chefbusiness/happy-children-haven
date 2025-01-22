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

interface PricingCardProps {
  nombre: string;
  precio: number;
  descripcion: string;
  caracteristicas: string[];
  color: string;
  textColor: string;
  popular: boolean;
}

const PricingCard = ({
  nombre,
  precio,
  descripcion,
  caracteristicas,
  color,
  textColor,
  popular,
}: PricingCardProps) => {
  return (
    <Card 
      className={`relative transform hover:scale-105 transition-all duration-300 ${
        popular ? 'border-accent border-2' : ''
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-accent shadow-lg text-gray-800 px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 animate-pulse">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span>Más Popular</span>
          </div>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{nombre}</CardTitle>
        <CardDescription>{descripcion}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <span className="text-4xl font-bold">${precio}</span>
          <span className="text-gray-600">/mes</span>
        </div>
        <ul className="space-y-3">
          {caracteristicas.map((caracteristica) => (
            <li key={caracteristica} className="flex items-center gap-2">
              <Check className={`h-5 w-5 ${textColor}`} />
              <span>{caracteristica}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className={`w-full ${color} hover:${color}/90`}
        >
          Seleccionar Plan
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
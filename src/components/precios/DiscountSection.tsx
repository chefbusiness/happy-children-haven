import { Button } from "@/components/ui/button";

const DiscountSection = () => {
  return (
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
  );
};

export default DiscountSection;
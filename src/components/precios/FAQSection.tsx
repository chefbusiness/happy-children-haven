const FAQSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Preguntas Frecuentes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="font-semibold text-lg mb-2">¿Qué incluye la matrícula?</h3>
            <p className="text-gray-600">
              La matrícula incluye material didáctico, cuaderno diario y caja de 
              artículos personales para el año escolar.
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
  );
};

export default FAQSection;
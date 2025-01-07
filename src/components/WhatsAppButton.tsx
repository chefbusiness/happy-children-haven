import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+584265742607"; // Número de WhatsApp de la guardería
  const message = encodeURIComponent("¡Hola! Me gustaría obtener más información sobre la Guardería Mi Regazo.");

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 z-50 flex items-center gap-2"
      aria-label="Contactar por WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
      <span className="hidden md:inline">Contáctanos</span>
    </button>
  );
};

export default WhatsAppButton;
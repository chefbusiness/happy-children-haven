import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3">
        <MapPin className="h-5 w-5 text-primary-foreground mt-1" />
        <div>
          <h3 className="font-semibold text-lg">Dirección</h3>
          <p className="text-gray-600">
            Calle Miranda, Sector Guere, Naguanagua, Carabobo, Venezuela
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Phone className="h-5 w-5 text-primary-foreground mt-1" />
        <div>
          <h3 className="font-semibold text-lg">Teléfono</h3>
          <p className="text-gray-600">+58 412 574 2607</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Mail className="h-5 w-5 text-primary-foreground mt-1" />
        <div>
          <h3 className="font-semibold text-lg">Correo electrónico</h3>
          <p className="text-gray-600">info@guarderiamiregazo.com</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Clock className="h-5 w-5 text-primary-foreground mt-1" />
        <div>
          <h3 className="font-semibold text-lg">Horario de atención</h3>
          <div className="text-gray-600">
            <p>Lunes a Viernes: 7:00 AM - 6:00 PM</p>
            <p>Sábados: 8:00 AM - 12:00 PM</p>
            <p>Domingos: Cerrado</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
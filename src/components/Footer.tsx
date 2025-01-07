import { Instagram, Mail, MapPin, Phone, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F1F0FB] border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Mi Regazo</h3>
            <p className="text-gray-600 mb-4">
              Brindando cuidado y educación de calidad para el desarrollo integral de tu pequeño.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin className="h-5 w-5" />
                <span>Calle Miranda, Sector Guere, Naguanagua, Carabobo, Venezuela</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="h-5 w-5" />
                <span>+58 426 574 2607</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="h-5 w-5" />
                <span>info@guarderiamiregazo.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Síguenos</h3>
            <a
              href="https://instagram.com/mi_regazo_guarderia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-600 hover:text-gray-900"
            >
              <Instagram className="h-5 w-5" />
              <span>@mi_regazo_guarderia</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-center text-gray-500">
              © {new Date().getFullYear()} Guardería Mi Regazo. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-1 text-gray-500">
              <span>Con</span>
              <Coffee className="h-4 w-4" />
              <span>por</span>
              <a 
                href="https://localseoads.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 hover:underline"
              >
                LocalSEOAds.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
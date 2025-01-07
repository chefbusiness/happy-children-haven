import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Reemplazar con tu Service ID de EmailJS
        'YOUR_TEMPLATE_ID', // Reemplazar con tu Template ID de EmailJS
        form,
        'YOUR_PUBLIC_KEY' // Reemplazar con tu Public Key de EmailJS
      );

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error al enviar el mensaje",
        description: "Por favor, intenta nuevamente más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Nombre completo"
          required
          className="w-full"
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
          className="w-full"
        />
      </div>
      <div>
        <Input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          className="w-full"
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Mensaje"
          required
          className="w-full min-h-[150px]"
        />
      </div>
      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  );
};

export default ContactForm;
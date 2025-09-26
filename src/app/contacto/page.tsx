import { Metadata } from "next";
import contactImage from "@/assets/images/opengraph/contact.jpg";
import ContactPageContent from "./_components/contact-page-content";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contacto",
    description: "Ponte en contacto con nosotros para resolver tus dudas, recibir asistencia o conocer más sobre nuestros servicios. Estamos aquí para ayudarte.",
    openGraph: {
      images: contactImage.src,
    },
  };
}

export default function Contacto() {
  return <ContactPageContent />;
}

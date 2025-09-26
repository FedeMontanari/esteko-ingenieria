import { Metadata } from "next";
import contactImage from "@/assets/images/opengraph/contact.jpg";
import ContactPageContent from "./_components/contact-page-content";

const METADATA_DESCRIPTION =
  "Ponte en contacto con nosotros para resolver tus dudas, recibir asistencia o conocer más sobre nuestros servicios. Estamos aquí para ayudarte.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contacto",
    description: METADATA_DESCRIPTION,
    openGraph: {
      images: contactImage.src,
    },
    twitter: {
      card: "summary_large_image",
      title: "Contacto",
      description: METADATA_DESCRIPTION,
      images: contactImage.src,
    },
  };
}

export default function Contacto() {
  return <ContactPageContent />;
}

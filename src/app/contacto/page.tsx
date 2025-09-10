import { Metadata } from "next";
import contactImage from "@/assets/images/opengraph/contact.jpg";
import ContactPageContent from "./_components/contact-page-content";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contacto",
    description: "Contáctanos para más información",
    openGraph: {
      images: contactImage.src,
    },
  };
}

export default function Contacto() {
  return <ContactPageContent />;
}

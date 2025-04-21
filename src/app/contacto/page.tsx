import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Slash } from "lucide-react";
import { CONTACT_DATA } from "@/lib/constants/contact";

import { Metadata } from "next";
import ContactForm from "./_components/contact-form";
import contactImage from "@/assets/images/opengraph/contact.jpg";

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
  return (
    <main className="min-h-screen w-full">
      {/* Hero section */}
      <div className="w-full">
        <div className="flex flex-col justify-center bg-foreground h-[400px]">
          <nav className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold text-white">Contáctanos</h1>
            <Breadcrumb className="mt-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className="text-white hover:text-white/80"
                    href="/"
                  >
                    Inicio
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="text-white">Nosotros</BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="text-primary font-bold text-lg">
                  Contacto
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </nav>
        </div>
      </div>

      {/* Contact form section */}
      <div className="flex items-center justify-center w-full py-24 relative">
        <div
          className="absolute bg-[#1C1C1C] h-[700px] w-[calc(75%+1px)] top-0 right-0 -z-10 opacity-50"
          style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 10% 100%)" }}
        />

        <div
          className="absolute bg-white h-[700px] w-3/4 top-0 right-0 -z-10"
          style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 10% 100%)" }}
        />
        <div
          className="bg-foreground text-white py-12 w-1/4"
          style={{
            clipPath: "polygon(0 0, 80% 0%, 70% 100%, 0% 100%)",
          }}
        >
          <h3 className="text-2xl font-bold pl-4">
            Medios para
            <br />
            contáctarnos
          </h3>
          <div className="px-12 pt-8 flex flex-col gap-4">
            <p className="relative before:content-[''] before:-left-10 before:absolute before:-bottom-1 before:w-[100px] before:h-[2px] before:bg-primary">
              {CONTACT_DATA.email}
            </p>
            <p className="relative before:content-[''] before:-left-10 before:absolute before:-bottom-1 before:w-[100px] before:h-[2px] before:bg-primary">
              {CONTACT_DATA.phone}
            </p>
          </div>
        </div>
        <div className="w-1/2 mx-auto">
          <h3 className="sr-only">Formulario de contacto</h3>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}

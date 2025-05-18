"use client";

import { useIsMobile } from "@/hooks/use-media-query";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Slash } from "lucide-react";
import { CONTACT_DATA } from "@/lib/constants/contact";
import ContactForm from "./contact-form";

export default function ContactPageContent() {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile ? (
        <main className="min-h-screen w-full">
          {/* Hero section */}
          <div className="w-full">
            <div className="bg-foreground flex h-[400px] flex-col justify-center">
              <nav className="mb-4 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-white">Contáctanos</h1>
              </nav>
            </div>
          </div>

          <div className="px-4 py-12">
            <h3 className="sr-only">Formulario de contacto</h3>
            <ContactForm />
          </div>

          {/* Contact form section */}
          <div className="relative flex w-full items-center justify-center">
            <div className="bg-primary w-full py-12 text-white">
              <h3 className="text-center text-3xl font-bold">
                Medios para contáctarnos
              </h3>
              <div className="flex flex-col gap-4 px-12 pt-8">
                <p className="before:bg-foreground relative font-semibold before:absolute before:-bottom-2 before:-left-10 before:h-[2px] before:w-[100px] before:content-['']">
                  {CONTACT_DATA.email}
                </p>
                <p className="before:bg-foreground relative font-semibold whitespace-pre-line before:absolute before:-bottom-2 before:-left-10 before:h-[2px] before:w-[100px] before:content-['']">
                  {CONTACT_DATA.phone}
                </p>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <main className="min-h-screen w-full">
          {/* Hero section */}
          <div className="w-full">
            <div className="bg-foreground flex h-[550px] flex-col justify-center">
              <nav className="mb-4 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-white">Contáctanos</h1>
                <Breadcrumb className="mt-4">
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        className="text-lg text-white hover:text-white/80"
                        href="/"
                      >
                        Inicio
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <Slash />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem className="text-lg text-white">
                      Nosotros
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <Slash />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem className="text-primary text-lg font-bold">
                      Contacto
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </nav>
            </div>
          </div>

          {/* Contact form section */}
          <div className="relative flex w-full items-center justify-center py-24">
            <div
              className="absolute top-0 right-0 -z-10 h-[700px] w-[calc(75%+1px)] bg-[#1C1C1C] opacity-50"
              style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 10% 100%)" }}
            />

            <div
              className="absolute top-0 right-0 -z-10 h-[700px] w-3/4 bg-white"
              style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 10% 100%)" }}
            />
            <div
              className="bg-foreground w-1/4 py-12 text-white"
              style={{
                clipPath: "polygon(0 0, 95% 0%, 85% 100%, 0% 100%)",
              }}
            >
              <h3 className="pl-4 text-2xl font-bold">
                Medios para
                <br />
                contáctarnos
              </h3>
              <div className="flex flex-col gap-4 px-12 pt-8">
                <p className="before:bg-primary relative before:absolute before:-bottom-1 before:-left-10 before:h-[2px] before:w-[100px] before:content-['']">
                  {CONTACT_DATA.email}
                </p>
                <p className="before:bg-primary relative whitespace-pre-line before:absolute before:-bottom-1 before:-left-10 before:h-[2px] before:w-[100px] before:content-['']">
                  {CONTACT_DATA.phone}
                </p>
              </div>
            </div>
            <div className="mx-auto w-1/2">
              <h3 className="sr-only">Formulario de contacto</h3>
              <ContactForm />
            </div>
          </div>
        </main>
      )}
    </>
  );
}

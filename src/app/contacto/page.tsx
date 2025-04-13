import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Footer from "@/components/footer";
import { Slash } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
export default function Contacto() {
  return (
    <main className="min-h-screen w-full">
      <div className="w-full">
        <div className="flex flex-col justify-center bg-foreground h-[340px]">
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
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary font-bold text-xl">
                    Contacto
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </nav>
        </div>
      </div>
      <div className="flex items-center justify-center w-full py-24">
        <div
          className="bg-foreground text-white py-12 w-1/4"
          style={{
            clipPath: "polygon(0 0, 70% 0%, 60% 100%, 0% 100%)",
          }}
        >
          <h3 className="text-2xl font-bold pl-4">
            Medios para
            <br />
            contáctarnos
          </h3>
          <div className="px-12 pt-8 flex flex-col gap-4">
            <p className="relative before:content-[''] before:-left-10 before:absolute before:-bottom-1 before:w-[100px] before:h-[2px] before:bg-primary">
              esteko.ingenieria@gmail.com
            </p>
            <p className="relative before:content-[''] before:-left-10 before:absolute before:-bottom-1 before:w-[100px] before:h-[2px] before:bg-primary">
              3854886714 / 3855892806
            </p>
          </div>
        </div>
        <div className="w-1/2 mx-auto">
          <h3 className="sr-only">Formulario de contacto</h3>
          <form className="flex flex-col gap-4">
            <Input className="bg-[#eaeaea]" type="email" placeholder="Email" />
            <Textarea
              className="bg-[#eaeaea]"
              rows={10}
              placeholder="Tu mensaje"
            />
            <Button
              className="w-1/2 self-center text-lg font-bold"
              type="submit"
            >
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}

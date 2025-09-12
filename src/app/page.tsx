import { Button } from "@/components/ui/button";
import Link from "next/link";
import AboutUsSection from "@/components/about-us-section";
import ServicesSection from "@/components/services-section";
import ContactSection from "@/components/contact-section";
import { ChevronsRight } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full">
      <h1 className="sr-only">Esteko Ingeniería</h1>
      <div className="flex flex-col items-center justify-center">
        {/* Hero */}
        <div className="relative flex h-screen w-screen flex-col items-center justify-start px-4 md:block md:px-0">
          <div className="absolute inset-0 -z-10">
            <video
              autoPlay
              muted
              loop
              controls={false}
              className="h-full w-full object-cover brightness-20"
            >
              <source src="/landing-hero.webm" type="video/webm" />
            </video>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center xl:w-1/2 xl:px-12">
            <p className="mt-24 w-full text-center text-3xl font-semibold text-white xl:w-3/4 xl:text-start xl:text-5xl xl:leading-tight">
              Soluciones <span className="text-primary">innovadoras</span>,{" "}
              <span className="text-primary">precisas</span> y{" "}
              <span className="text-primary">eficientes</span> para potenciar
              tus proyectos.
            </p>
            <div className="flex w-full flex-col items-center justify-start gap-4 space-y-4 py-12 xl:w-3/4 xl:items-start">
              <Button
                className="min-w-1/2 px-12 text-lg font-bold xl:w-1/2"
                asChild
              >
                <Link href="/contacto">
                  Trabajemos Juntos
                  <ChevronsRight className="inline-block" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                className="border-primary min-w-1/2 border px-12 text-lg font-bold text-white"
                asChild
              >
                <Link href="/#services">Investiga</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <AboutUsSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}

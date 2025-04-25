import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import AboutUs from "@/components/about-us";
import ServicesSection from "@/components/services-section";

export default function Home() {
  return (
    <main className="w-full">
      <h1 className="sr-only">Esteko Ingeniería</h1>
      <div className="flex flex-col items-center justify-center">
        {/* Hero */}
        <div className="relative w-screen h-screen">
          <div className="inset-0 -z-10 absolute">
            <Image
              src="/hero-full.jpg"
              alt="Esteko Ingeniería"
              width={4096}
              height={2731}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute inset-0 -z-10 bg-black/60 w-[60%] h-full"
            style={{
              clipPath: "polygon(0 0, 100% 0%, 80% 100%, 0% 100%)",
            }}
          />
          <div
            className="absolute inset-0 -z-10 bg-black/60 w-[80%] h-full"
            style={{
              clipPath: "polygon(0 0, 100% 0%, 85% 100%, 0% 100%)",
            }}
          />
          <div className="w-1/2 px-12">
            <Image
              src="/hero.png"
              alt="Esteko Ingeniería"
              width={600}
              height={450}
              className="w-3/4 h-3/4 mx-auto py-24"
            />
            <p className="text-white text-center text-2xl">
              Soluciones{" "}
              <span className="text-primary font-bold">innovadoras</span>,{" "}
              <span className="text-primary font-bold">precisas</span> y{" "}
              <span className="text-primary font-bold">modernas</span> para
              potenciar tus proyectos de ingeniería.
            </p>
            <div className="flex flex-col gap-4 items-center py-12">
              <Button className="text-lg font-bold px-12" asChild>
                <Link href="/contacto">Trabajemos Juntos</Link>
              </Button>
              <Button
                variant="ghost"
                className="text-lg font-bold px-12 text-white border border-primary"
                asChild
              >
                <Link href="/#services">Investiga</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <AboutUs />
      <ServicesSection />
    </main>
  );
}

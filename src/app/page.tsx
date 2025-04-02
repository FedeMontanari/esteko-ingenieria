import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const ENV = process.env.NODE_ENV;

export default function Home() {
  if (ENV !== "production") {
    return (
      <MaxWidthWrapper>
        <h1 className="sr-only">Esteko Ingeniería</h1>
        <div className="flex flex-col items-center justify-center">
          <div className="relative w-screen h-full">
            <div className="absolute inset-0 -z-10">
              <Image
                src="/hero-full.jpg"
                alt="Esteko Ingeniería"
                width={4096}
                height={2731}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 p-12 bg-black/80">
              <Image
                src="/hero.png"
                alt="Esteko Ingeniería"
                width={601}
                height={453}
                className="w-full h-full p-12"
              />
              <p className="text-white text-center text-2xl font-bold">
                Soluciones <span className="text-primary">innovadoras</span>,{" "}
                <span className="text-primary">precisas</span> y{" "}
                <span className="text-primary">modernas</span> para potenciar
                tus proyectos de ingeniería.
              </p>
              <div className="flex flex-col gap-4 items-center pt-12">
                <Button className="text-lg font-bold px-12" asChild>
                  <Link href="/contacto">Trabajemos Juntos</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="text-lg font-bold px-12 text-white border border-primary"
                  asChild
                >
                  <Link href="/servicios">Investiga</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    );
  }
  return null;
}

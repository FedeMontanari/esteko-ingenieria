import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function ContactSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[500px] mt-24 relative">
      <div className="inset-0 -z-10 absolute">
        <Image
          src="/hero-full.jpg"
          alt="Esteko Ingeniería"
          width={1920}
          height={500}
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="w-[640px] flex flex-col">
        <h4 className="text-white text-2xl font-bold font-cooper pb-4">
          Contáctate con nosotros
        </h4>
        <p className="text-4xl font-bold font-cooper text-white">
          ¿Listo para transformar ideas en proyectos de alto impacto?
        </p>
        <Button
          asChild
          variant="default"
          className="mt-8 self-center w-1/2 text-lg font-cooper font-semibold"
        >
          <Link href="/contacto">Contáctanos</Link>
        </Button>
      </div>
    </div>
  );
}

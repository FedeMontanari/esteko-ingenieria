import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function ContactSection() {
  return (
    <div className="relative mt-24 flex h-[60vh] w-full flex-col items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-full-alt.jpg"
          alt="Esteko Ingeniería"
          width={1920}
          height={500}
          className="h-full w-full object-cover brightness-50"
        />
      </div>
      <div className="flex w-[640px] flex-col">
        <h4 className="font-cooper pb-4 text-2xl font-bold text-white">
          Contáctate con nosotros
        </h4>
        <p className="font-cooper text-4xl font-bold text-white">
          ¿Listo para transformar ideas en proyectos de alto impacto?
        </p>
        <Button
          asChild
          variant="default"
          className="font-cooper mt-8 w-1/2 self-center text-lg font-semibold"
        >
          <Link href="/contacto">Contáctanos</Link>
        </Button>
      </div>
    </div>
  );
}

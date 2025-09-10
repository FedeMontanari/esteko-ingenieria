import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { ChevronsRight } from "lucide-react";

export default function ContactSection() {
  return (
    <div className="relative flex h-[100vh] w-full flex-col items-center justify-center sm:mt-24 xl:h-[60vh]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-full-alt.jpg"
          alt="Esteko Ingeniería"
          width={1920}
          height={500}
          className="h-full w-full object-cover brightness-50"
        />
      </div>
      <div className="flex flex-col px-4 xl:w-[640px] xl:px-0">
        <h4 className="font-cooper pb-4 text-2xl font-bold text-white">
          Contáctate con nosotros
        </h4>
        <p className="font-cooper text-4xl font-bold text-white">
          ¿Listo para llevar tu proyecto a otro nivel con tecnología aplicada?
        </p>
        <Button
          asChild
          variant="default"
          className="font-cooper mt-8 w-1/2 self-center text-lg font-semibold"
        >
          <Link href="/contacto">
            Contáctanos <ChevronsRight className="inline" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { SiLinkedin, SiInstagram } from "@icons-pack/react-simple-icons";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="grid grid-cols-2 gap-4 w-full mx-auto items-center justify-center py-8">
        <div className="flex flex-col items-center justify-center gap-4 border-r border-white">
          <div className="flex flex-row items-center justify-center space-x-12">
            <Image
              src="/logo-primary.svg"
              alt="Esteko Ingeniería"
              width={120}
              height={120}
            />
            <div className="space-y-2 text-center">
              <p>esteko.ingenieria@gmail.com</p>
              <p>3854886714 / 3855892806</p>
              <p>Neuquén Capital, Argentina.</p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <span>Seguinos en</span>
            <Link href="https://www.linkedin.com/company/esteko-ingenieria/">
              <SiLinkedin />
            </Link>
            <Link href="https://www.instagram.com/esteko.ingenieria/">
              <SiInstagram />
            </Link>
          </div>
        </div>

        <div className="flex items-start justify-evenly gap-4">
          <div>
            <Link className="text-3xl" href="/">
              Inicio
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-3xl">Servicios</p>
            <Link className="text-sm" href="/">
              Consultoría B.I.M
            </Link>
            <Link className="text-sm" href="/">
              Cálculo estructural
            </Link>
            <Link className="text-sm" href="/">
              Dirección y asesoramiento
            </Link>
            <Link className="text-sm" href="/">
              Fotogrametría con drones
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-3xl">Nosotros</p>
            <Link className="text-sm" href="/contacto">
              Contactanos
            </Link>
          </div>
        </div>

        <div className="col-span-2 border-t border-white pt-4">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Esteko Ingeniería. Todos los
            derechos reservados.
          </p>
          <p className="text-center text-sm text-muted-foreground">
            Diseño -{" "}
            <Link
              href="https://www.linkedin.com/in/juan-pablo-garcia-garcia-b20000200/"
              className="underline"
            >
              Nicolás Silva
            </Link>
            Desarrollo -{" "}
            <Link
              href="https://www.linkedin.com/in/juan-pablo-garcia-garcia-b20000200/"
              className="underline"
            >
              Federico Montanari
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

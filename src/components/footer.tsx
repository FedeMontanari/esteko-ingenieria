import Link from "next/link";
import Image from "next/image";
import { SiLinkedin, SiInstagram } from "@icons-pack/react-simple-icons";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/lib/constants/services";
import { CONTACT_DATA } from "@/lib/constants/contact";
import { Separator } from "./ui/separator";

export default function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "bg-foreground text-white absolute bottom-0 left-0 right-0 w-full z-10",
        className
      )}
    >
      <div className="grid grid-cols-2 gap-4 w-full mx-auto items-center justify-center py-8 relative">
        {/* <div className="absolute bg-[#7C7C7C] w-[6px] left-1/2 -translate-x-1/2 h-[70%] top-0" /> */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-row items-center justify-center space-x-12">
            <Image
              src="/logo-primary.svg"
              alt="Esteko Ingeniería"
              width={120}
              height={120}
            />
            <div className="space-y-2">
              <p>{CONTACT_DATA.email}</p>
              <p>{CONTACT_DATA.phone}</p>
              <p>{CONTACT_DATA.address}</p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <span>Seguinos en</span>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={CONTACT_DATA.linkedin}
            >
              <SiLinkedin />
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={CONTACT_DATA.instagram}
            >
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
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                className="text-sm"
                href={service.href}
                scroll={false}
              >
                {service.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-3xl">Nosotros</p>
            <Link className="text-sm" href="/contacto">
              Contactanos
            </Link>
          </div>
        </div>

        <div className="absolute bg-[#7C7C7C] w-full h-[1px] top-[72%]" />
        <div className="col-span-2 pt-4">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Esteko Ingeniería. Todos los
            derechos reservados.
          </p>
          <div className="text-center text-sm text-muted-foreground h-5 flex flex-row items-center justify-center space-x-2">
            <p>
              Diseño -{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={CONTACT_DATA.designer}
                className="underline"
              >
                Nicolás Silva
              </Link>
            </p>
            <Separator orientation="vertical" className="h-full inline" />
            <p>
              Desarrollo -{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={CONTACT_DATA.developer}
                className="underline"
              >
                Federico Montanari
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

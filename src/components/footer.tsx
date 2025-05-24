"use client";

import Link from "next/link";
import Image from "next/image";
import { SiLinkedin, SiInstagram } from "@icons-pack/react-simple-icons";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/lib/constants/services";
import { CONTACT_DATA } from "@/lib/constants/contact";
import { Separator } from "./ui/separator";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Footer({ className }: { className?: string }) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 680px) and (max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 680px)");

  return (
    <>
      {isDesktop && (
        <footer
          className={cn(
            "bg-foreground absolute right-0 bottom-0 left-0 z-10 w-full text-white",
            className,
          )}
        >
          <div className="relative mx-auto grid w-full grid-cols-2 items-center justify-center gap-4 py-8">
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
                  <p className="whitespace-pre-line">{CONTACT_DATA.phone}</p>
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

            <div className="absolute top-[72%] h-[1px] w-full bg-[#7C7C7C]" />
            <div className="col-span-2 pt-4">
              <p className="text-center text-sm">
                &copy; {new Date().getFullYear()} Esteko Ingeniería. Todos los
                derechos reservados.
              </p>
              <div className="text-muted-foreground flex h-5 flex-row items-center justify-center space-x-2 text-center text-sm">
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
                <Separator orientation="vertical" className="inline h-full" />
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
      )}
      {isMobile && (
        <footer
          className={cn(
            "bg-foreground absolute right-0 bottom-0 left-0 z-10 w-full text-white",
            className,
          )}
        >
          <div className="relative flex flex-col items-start justify-center gap-4 px-4 py-8">
            <div className="mb-4 flex flex-col items-start justify-evenly gap-4">
              <div>
                <Link className="font-cooper text-2xl font-semibold" href="/">
                  Inicio
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-cooper text-2xl font-semibold">Servicios</p>
                {SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    className="font-cooper text-sm"
                    href={service.href}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-cooper text-2xl font-semibold">Nosotros</p>
                <Link className="font-cooper text-sm" href="/contacto">
                  Contactanos
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex flex-row items-center justify-center space-x-6">
                <Image
                  src="/logo-primary.svg"
                  alt="Esteko Ingeniería"
                  width={60}
                  height={60}
                />
                <div className="font-cooper space-y-2 text-sm">
                  <p>{CONTACT_DATA.email}</p>
                  <p className="whitespace-pre-line">{CONTACT_DATA.phone}</p>
                  <p>{CONTACT_DATA.address}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-row gap-4">
                <span className="font-cooper text-xl font-semibold">
                  Seguinos en
                </span>
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
            <Separator className="w-full" />

            <div className="flex flex-col items-center justify-center gap-4">
              <div className="text-muted-foreground flex flex-row flex-wrap items-center justify-center space-x-2 text-center text-sm">
                <p className="font-cooper">
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
                <p className="font-cooper">
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
      )}
      {isTablet && (
        <footer
          className={cn(
            "bg-foreground absolute right-0 bottom-0 left-0 z-10 w-full text-white",
            className,
          )}
        >
          <div className="relative mx-auto grid w-full grid-cols-2 items-center justify-center gap-4 py-8">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex flex-row items-center justify-center space-x-4">
                <Image
                  src="/logo-primary.svg"
                  alt="Esteko Ingeniería"
                  width={120}
                  height={120}
                />
                <div className="space-y-2">
                  <p>{CONTACT_DATA.email}</p>
                  <p className="whitespace-pre-line">{CONTACT_DATA.phone}</p>
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

            <div className="flex items-start justify-center gap-4 px-2">
              <div>
                <Link className="text-2xl" href="/">
                  Inicio
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-2xl">Servicios</p>
                {SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    className="text-sm"
                    href={service.href}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-2xl">Nosotros</p>
                <Link className="text-sm" href="/contacto">
                  Contactanos
                </Link>
              </div>
            </div>

            <div className="absolute top-[72%] h-[1px] w-full bg-[#7C7C7C]" />
            <div className="col-span-2 pt-4">
              <p className="text-center text-sm">
                &copy; {new Date().getFullYear()} Esteko Ingeniería. Todos los
                derechos reservados.
              </p>
              <div className="text-muted-foreground flex h-5 flex-row items-center justify-center space-x-2 text-center text-sm">
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
                <Separator orientation="vertical" className="inline h-full" />
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
      )}
    </>
  );
}

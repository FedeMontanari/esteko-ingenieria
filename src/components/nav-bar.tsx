"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { SERVICES } from "@/lib/constants/services";
import { Separator } from "./ui/separator";
import { useIsDesktop } from "@/hooks/use-media-query";

export default function NavBar() {
  const isDesktop = useIsDesktop();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 800) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 z-50 flex w-[100vw] items-center justify-between backdrop-blur-md transition-all duration-1000 ${
        isScrolled ? "bg-primary/80" : "bg-[#303030]/95"
      } ${isDesktop ? "h-22" : "h-16"}`}
    >
      <div>
        <h1 className="sr-only">Esteko Ingeniería</h1>
        <Button variant="link" asChild>
          <Link
            href="/"
            className="flex h-fit w-fit items-center justify-center"
          >
            <Image
              src="/logo.svg"
              alt="Esteko Ingeniería"
              width={isDesktop ? 200 : 150}
              height={isDesktop ? 80 : 60}
            />
          </Link>
        </Button>
      </div>
      {isDesktop ? (
        <div className="flex items-center gap-4 px-4">
          <Button
            variant="link"
            asChild
            className="text-lg font-bold text-white"
          >
            <Link href="/">Inicio</Link>
          </Button>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="link"
                className="flex items-center gap-2 text-lg font-bold text-white"
              >
                Menu
                {open ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className={`mt-5 flex h-[215px] w-screen items-start justify-evenly border-none backdrop-blur-md transition-colors duration-1000 ${
                isScrolled ? "bg-primary/80" : "bg-[#303030]/95"
              }`}
            >
              <div className="flex flex-col gap-2 text-white">
                <h3 className="text-2xl font-bold">Nosotros</h3>
                <Link
                  onClick={() => setOpen(false)}
                  className="text-sm"
                  href="/contacto"
                >
                  Contáctanos
                </Link>
              </div>
              <Separator orientation="vertical" />
              <div className="flex flex-col gap-2 text-white">
                <h3 className="text-2xl font-bold">Servicios</h3>
                {SERVICES.map((service) => (
                  <Link
                    className="text-sm"
                    key={service.id}
                    href={`/servicios/${service.id}`}
                    onClick={() => setOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ) : (
        <Popover open={open} onOpenChange={setOpen} modal={true}>
          <PopoverTrigger>
            {open ? (
              <X width={24} height={24} className="mr-4 h-8 w-8" />
            ) : (
              <Menu width={24} height={24} className="mr-4 h-8 w-8" />
            )}
          </PopoverTrigger>
          <PopoverContent className="mt-3 flex h-screen w-screen flex-col items-center justify-start border-none bg-[#7C7C7C]">
            <div className="flex flex-col gap-2 space-y-3">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="text-4xl font-bold"
              >
                Inicio
              </Link>
            </div>
            <Separator
              orientation="horizontal"
              className="my-8 w-full bg-black"
            />
            <div className="flex flex-col gap-2 space-y-3">
              <h3 className="text-4xl font-bold">Nosotros</h3>
              <Link
                onClick={() => setOpen(false)}
                className="text-2xl"
                href="/contacto"
              >
                Contáctanos
              </Link>
            </div>
            <Separator
              orientation="horizontal"
              className="my-8 w-full bg-black"
            />
            <div className="flex flex-col items-center justify-center gap-2 space-y-3">
              <h3 className="text-4xl font-bold">Servicios</h3>
              {SERVICES.map((service) => (
                <Link
                  className="text-2xl"
                  key={service.id}
                  href={`/servicios/${service.id}`}
                  onClick={() => setOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}

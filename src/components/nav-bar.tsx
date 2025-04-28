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
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import { SERVICES } from "@/lib/constants/services";
import { Separator } from "./ui/separator";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function NavBar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 600) {
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
      className={`flex items-center justify-between fixed top-0 z-50 backdrop-blur-md h-22 w-full transition-all duration-1000 ${
        isScrolled ? "bg-primary/50" : "bg-white/5"
      }`}
    >
      <div>
        <h1 className="sr-only">Esteko Ingeniería</h1>
        <Button variant="link" asChild>
          <Link
            href="/"
            className="flex items-center justify-center w-fit h-fit"
          >
            <Image
              src="/logo.svg"
              alt="Esteko Ingeniería"
              width={100}
              height={100}
              className="w-10 h-10"
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
                className="text-lg font-bold text-white flex items-center gap-2"
              >
                Menu
                {open ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-screen flex justify-evenly items-start h-[215px]">
              <div className="flex flex-col gap-2">
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
              <div className="flex flex-col gap-2">
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
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger>
            <Menu width={24} height={24} className="w-8 h-8 mr-4" />
          </PopoverTrigger>
          <PopoverContent className="w-screen flex flex-col justify-start items-start h-screen">
            <div className="flex flex-col gap-2 space-y-3">
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
            <Separator
              orientation="horizontal"
              className="w-full my-8 bg-black"
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
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}

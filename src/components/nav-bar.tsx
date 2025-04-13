"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SERVICES } from "@/lib/constants/services";
import { Separator } from "./ui/separator";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between sticky top-0 bg-white z-50 border-b">
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
      <div className="flex items-center gap-4 px-4">
        <Button variant="link" asChild className="text-lg font-bold text-black">
          <Link href="/">Inicio</Link>
        </Button>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="link"
              className="text-lg font-bold text-black flex items-center gap-2"
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
    </div>
  );
}

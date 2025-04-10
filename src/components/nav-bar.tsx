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

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between">
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
          <PopoverContent className="w-screen">
            <div className="flex flex-col gap-4">
              <Link href="/">Inicio</Link>
              <Link href="/">Inicio</Link>
              <Link href="/">Inicio</Link>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

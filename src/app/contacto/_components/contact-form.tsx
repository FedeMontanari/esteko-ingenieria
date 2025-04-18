"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4">
      <Input className="bg-[#eaeaea]" type="email" placeholder="Email" />
      <Textarea className="bg-[#eaeaea]" rows={10} placeholder="Tu mensaje" />
      <Button className="w-1/2 self-center text-lg font-bold" type="submit">
        Enviar Mensaje
      </Button>
    </form>
  );
}

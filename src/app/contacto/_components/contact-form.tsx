"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "../_actions/send-email";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";

// TODO: Add invalid schema custom error message
const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    startTransition(async () => {
      const emailResponse = await sendEmail(formData);
      if (emailResponse.success) {
        form.reset();
      } else {
        console.error("Error sending email:", emailResponse.error);
      }
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Nombre</FormLabel>
              <FormControl>
                <Input
                  className="bg-[#eaeaea]"
                  type="text"
                  placeholder="Nombre"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-muted-foreground hidden text-xs xl:block">
                Nombre que quieres que aparezca en el mensaje.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Email</FormLabel>
              <FormControl>
                <Input
                  className="bg-[#eaeaea]"
                  type="email"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-muted-foreground hidden text-xs xl:block">
                Email que quieres que aparezca en el mensaje.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Mensaje</FormLabel>
              <FormControl>
                <Textarea
                  className="bg-[#eaeaea]"
                  rows={10}
                  placeholder="Tu mensaje"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full text-lg font-bold xl:w-1/2" type="submit">
          {isPending ? "Enviando..." : "Enviar Mensaje"}
        </Button>
      </form>
    </Form>
  );
}

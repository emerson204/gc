"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export default function FormularioContacto() {
  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    nombre: z.string().min(2, {
      message: "El nombre es obligatorio",
    }),
    email: z.string().email({
      message: "El correo debe ser válido.",
    }),
    asunto: z.string().min(4, {
      message: "El asunto debe tener al menos 4 caracteres.",
    }),
    numero: z
      .string()
      .min(9, {
        message: "El número debe tener al menos 9 caracteres.",
      })
      .max(9, {
        message: "El numero debe tener solo 9 caracteres.",
      }),
    mensaje: z.string().min(10, {
      message: "El mensaje debe tener al menos 10 caracteres.",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      asunto: "",
      numero: "",
      mensaje: "",
    },
  });

  const onSubmit = async (values, e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(values),
    });

    setLoading(false);

    if (response.ok) {
      toast({
        title: "¡Tus datos han sido enviados exitosamente! ✅",
      });
      form.reset();
      return;
    } else {
      toast({
        title: "Error al enviar las datos ❌",
      });
    }
  };

  return (
    <div>
      <Form {...form}>
        {loading ? (
          <p className="flex justify-center items-center text-lg">
            Enviando tus datos...
          </p>
        ) : (
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-x-7 gap-y-4 sm:gap-y-5">
              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre: </FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email: </FormLabel>
                    <FormControl>
                      <Input {...field} className=" bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="asunto"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Asunto: </FormLabel>
                    <FormControl>
                      <Input {...field} className=" bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="numero"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número: </FormLabel>
                    <FormControl>
                      <Input {...field} className=" bg-white" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="mensaje"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensaje: </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      rows={6.5}
                      className="resize-none bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="bg-azulPrimary hover:bg-azulHover px-12 py-6 ml-auto  flex items-center"
              type="submit"
            >
              Submit
            </Button>
          </form>
        )}
      </Form>
    </div>
  );
}

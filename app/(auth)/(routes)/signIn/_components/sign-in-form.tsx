"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signIn } from "../actions";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";

export default function SignInForm() {
  const [error, setError] = useState<string | null>(null);
  const signInSchema = z.object({
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .max(20, { message: "Password must be at most 20 characters" }),
  });

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    const result = await signIn(data);
    if (result && result.message) {
      setError(result.message);
    }
  };

  return (
    <Form {...form}>
      <div className="">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full flex flex-col"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel> </FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel />
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-black  ">
            Sign In
          </Button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </Form>
  );
}

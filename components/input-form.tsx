"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import DetailedPlotForm from "./detailed-input-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useEffect, useState } from "react";

const formSchema = z.object({
  plotType: z.string(),
});

function SampleForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plotType: "Bar",
    },
  });
  const [plotType, setPlotType] = useState("Bar");

  useEffect(() => {
    setPlotType(form.watch("plotType"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch("plotType")]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
  }

  return (
    <div className="w-1/2 bg-stone-900 p-5 m-5 s text-black flex flex-col shadow-sm shadow-black">
      <div className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="plotType"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Plot Type</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select Your Plot" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Bar">Bar Plot</SelectItem>
                      <SelectItem value="Hex">Hex Plot</SelectItem>
                      <SelectItem value="Heat">Heat Plot</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DetailedPlotForm plotType={plotType} />
      </div>
      <Button type="submit" variant={"default"} className="">
        Submit
      </Button>
    </div>
  );
}

export default SampleForm;

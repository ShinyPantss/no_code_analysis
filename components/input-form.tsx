"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";


import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";


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
      plotType: "Simple Plot",
    },
  });
  const [plotType, setPlotType] = useState("Bar Plot");

  useEffect(() => {
    setPlotType(form.watch("plotType"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch("plotType")]);

  function onSubmit(values: z.infer<typeof formSchema>) {
  }

  return (
    <div className=" bg-stone-900 flex relative z-50 bg-transparent rounded-3xl">
      <div className="w-full md:w-1/2 bg-stone-900 p-5  text-black flex flex-col shadow-sm shadow-black h-full  mt-28">
        <div className="w-full ">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 p-5 text-black"
            >
              <FormField
                control={form.control}
                name="plotType"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="text-white">Plot Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Your Plot" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Bar Plot">Bar Plot</SelectItem>
                        <SelectItem value="Scatter Plot">
                          Scatter Plot
                        </SelectItem>
                        <SelectItem value="Simple Plot">Simple Plot</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <DetailedPlotForm plotType={plotType} />
        </div>
       
      </div>
    </div>
  );
}

export default SampleForm;

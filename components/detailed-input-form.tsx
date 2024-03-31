"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
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
import { supabase } from "@/lib/initSupabase";

const formSchema = z.object({
  plotType: z.string(),
  plotName: z.string(),
  xLabelName: z.string(),
  yLabelName: z.string(),
  lineColor: z.string().optional(),
});
const DetailedPlotForm = ({ plotType }: { plotType: string }) => {
  const plot = supabase.from("plot-infos").select("");
  console.log(plot);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plotType: plotType,
      plotName: "",
      xLabelName: "",
      yLabelName: "",
      lineColor: "red",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="w-1/2  bg-stone-900  p-5 m-5 s text-black flex  shadow-black">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="plotType"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>X label</FormLabel>
                <FormControl>
                  <Input placeholder="Please Enter X label" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default DetailedPlotForm;

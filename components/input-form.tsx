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
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const formSchema = z.object({
  plotType: z.string(),
});

function SampleForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plotType: "barPlot",
    },
  });
  const [plotType, setPlotType] = useState("barPlot");
  const dispatch = useDispatch();
  useEffect(() => {
    setPlotType(form.watch("plotType"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch("plotType")]);

  return (
    <div className=" bg-stone-900 flex relative z-50 bg-transparent rounded-3xl w-full">
      <div className="w-full border  border-slate-200 bg-stone-900 p-5  text-black flex flex-col shadow-sm shadow-black h-full  border-3 border-cyan-800 rounded-lg">
        <div className="w-full ">
          <Form {...form}>
            <form className="space-y-8 p-5 text-black border-blue-300">
              <FormField
                control={form.control}
                name="plotType"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="text-white font-extrabold text-lg">Plot Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Your Plot" />
                      </SelectTrigger>
                      <SelectContent className="bg-cyan-500">
                        <SelectItem value="barPlot" className="text-black text-md">Bar Plot</SelectItem>
                        <SelectItem value="scatterPlot" className="text-black text-md">
                          Scatter Plot
                        </SelectItem>
                        <SelectItem value="simplePlot" className="text-black text-md">Simple Plot</SelectItem>
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

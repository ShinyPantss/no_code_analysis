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
    <div className=" bg-stone-900 flex w-full">
      <div className="w-full bg-stone-900 p-5  text-black flex flex-col shadow-sm shadow-black h-full  ">
        <div className="w-full ">
          <Form {...form}>
            <form className="space-y-8 p-5 text-black">
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
                        <SelectItem value="barPlot">Bar Plot</SelectItem>
                        <SelectItem value="scatterPlot">
                          Scatter Plot
                        </SelectItem>
                        <SelectItem value="simplePlot">Simple Plot</SelectItem>
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

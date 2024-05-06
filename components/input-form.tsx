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
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useParams } from "next/navigation";

const formSchema = z.object({
  plotType: z.string(),
});

function SampleForm() {
  const { dataSetId } = useParams();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plotType: "barPlot",
    },
  });

  const [columnNames, setColumnNames] = useState([]);

  const fetchColumnNames = async (datasetId: string) => {
    try {
      const response = await fetch(`/api/dataset/${datasetId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch column names");
      }
      const data = await response.json();
      setColumnNames(data.columns);
    } catch (error) {
      console.error("Error fetching column names:", error);
    }
  };
  console.log(columnNames);
  useEffect(() => {
    fetchColumnNames(dataSetId as string); // Replace 'your-dataset-id' with actual ID
  }, [dataSetId]);

  // Use the watch function to subscribe to changes in plotType
  const plotType = form.watch("plotType");

  return (
    <div className="bg-stone-900 flex relative z-50 bg-transparent rounded-3xl w-full">
      <div className="w-full border border-slate-200 bg-stone-900 p-5 text-black flex flex-col shadow-sm shadow-black h-full">
        <div className="w-full">
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
          <DetailedPlotForm plotType={plotType} dataColumns={columnNames} />
        </div>
      </div>
    </div>
  );
}

export default SampleForm;

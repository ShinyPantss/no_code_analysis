"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/initSupabase";
import { Database } from "@/database.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";

const DetailedPlotForm = ({ plotType }: { plotType: string }) => {
  const [dataInfos, setDataInfos] = useState<plotAttributes>();

  const [clearedData, setClearedData] = useState<string[] | null>([]);

  useEffect(() => {
    const fetchPlotInfos = async () => {
      const data = await fetch("/api/dataset", {
        method: "POST",
        body: JSON.stringify({ plotType }),
      });
      setDataInfos(await data.json());
    };
    fetchPlotInfos();
  }, [plotType]);

  
  console.log(dataInfos)
  useEffect(() => {
    if (dataInfos) {
      const cleared = Object.entries(dataInfos).filter(
        (data) => data[1] === true
      );
      setClearedData(cleared.map((data) => data[0]));

      const { samplePlot } = dataInfos;
    }
  }, [dataInfos]);

  const defaultValues = clearedData?.reduce((acc, curr) => {
    acc[curr] = "hi";
    return acc;
  }, {} as { [key: string]: string | boolean | number });
  console.log(defaultValues);

  const formSchema = z.object(
    (clearedData || []).reduce((acc, curr) => {
      acc[curr] = z.string();
      return acc;
    }, {} as { [key: string]: z.ZodString | z.ZodBoolean | z.ZodNumber })
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...defaultValues },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full h-full  bg-stone-900  p-5   text-black   shadow-black">
      <Form {...form}>
        <div className=" text-black w-full grid grid-cols-2 md:grid-cols-4 gap-4">
          {dataInfos
            ? clearedData &&
              Object.entries(clearedData).map((data) => {
                return data[1] ? (
                  <FormField
                    key={data[1]}
                    control={form.control}
                    name={data[1]}
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel className="text-white">{data[1]}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={`Please Enter ${data[1]}`}
                            {...field}
                            value={field.value} // Convert the value to a string
                            className="outline-8"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                ) : null;
              })
            : null}
        </div>
        <div className="w-full flex justify-end mt-2">
          <Button type="submit" variant={"emerald"} className="">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default DetailedPlotForm;

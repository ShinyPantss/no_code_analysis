"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import z from "zod";
import { formSchema } from "@/lib/generateFormSchema";
import { useSelector, useDispatch } from "react-redux";
import { setImgUrl } from "@/store/imgUrl/imgSlice";
import { RootState } from "@/store/store";

const DetailedPlotForm = ({ plotType }: { plotType: string }) => {
  const [plotSettings, setPlotSettings] = useState<
    z.infer<typeof formSchema>[] | undefined
  >();
  const [plotImg, setPlotImg] = useState<string | undefined>();

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPlotInfos = async () => {
      try {
        const response = await fetch("/api/dataset", {
          method: "POST",
          body: JSON.stringify({ plotType }),
        });
        if (!response.ok) {
          throw new Error("Failed to fetch plot settings");
        }
        const data = await response.json();
        setPlotSettings(data);
      } catch (error) {
        console.error("Error fetching plot settings:", error);
      }
    };
    fetchPlotInfos();
  }, [plotType]);

  useEffect(() => {
    if (plotSettings ) {
      console.log("calistims")
      plotSettings.forEach((plotSetting) => {
        if (plotSetting.imageUrl) {
          setPlotImg(plotSetting.imageUrl);
        }
        
        console.log(plotSetting.imageUrl);
      });
      
    }
    console.log("calistim2")
    
    dispatch(setImgUrl(plotImg || ""));
  }, [plotSettings, plotImg, dispatch]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      grid: false,
    },
  });
  const { errors } = form.formState;

  const allErrors = Object.values(errors)
    .map((error) => error?.message)
    .filter(Boolean);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    form.reset();
    const formData = {
      plotType: plotType,
      data: data,
    };

    const response = await fetch("/api/dataset/postData", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    const json: string = await response.json();
    dispatch(setImgUrl(json));

    return json;
  };

  return (
    <div className="w-full  bg-stone-900 p-5 text-black shadow-black">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="text-black w-full grid grid-cols-2 md:grid-cols-4 items-baseline gap-4">
            {plotSettings &&
              plotSettings.map((plotSetting, index) =>
                Object.entries(plotSetting).map(([key, value]) =>
                  key == "grid" ? (
                    <FormField
                      key={`${index}-${key}`}
                      control={form.control}
                      name={key}
                      render={({ field }) => (
                        <FormItem className=" p-4 border">
                          <FormLabel className="text-white">{key}</FormLabel>
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={(isChecked) =>
                                field.onChange(isChecked)
                              }
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  ) : (
                    <FormField
                      key={`${index}-${key}`}
                      control={form.control}
                      name={
                        key as
                          | "title"
                          | "Width"
                          | "xLabel"
                          | "yLabel"
                          | "grid"
                          | "color"
                          | "markerSize"
                          | "imageUrl"
                          | "errors"
                      }
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">{key}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={`Please Enter ${key}`}
                              {...field}
                              value={field.value?.toString() || ""}
                              className="outline-8"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  )
                )
              )}
          </div>
          <div className="w-full flex justify-end mt-2">
            <Button type="submit" variant="emerald" className="">
              Submit
            </Button>
          </div>
          <div className="text-rose-600">
            {allErrors.map((error) => (
              <p key={error}> *{error} Please </p>
            ))}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DetailedPlotForm;

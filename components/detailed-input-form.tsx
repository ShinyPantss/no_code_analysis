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
import { useDispatch } from "react-redux";
import { setImgUrl } from "@/store/imgUrl/imgSlice";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { cn } from "@/lib/utils";

const DetailedPlotForm = ({
  plotType,
  dataColumns,
}: {
  plotType: string;
  dataColumns: string[];
}) => {
  const [plotSettings, setPlotSettings] = useState<
    z.infer<typeof formSchema>[] | undefined
  >();
  const [plotImg, setPlotImg] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
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
    if (plotSettings) {
      plotSettings.forEach((plotSetting) => {
        if (plotSetting.imageUrl) {
          setPlotImg(plotSetting.imageUrl);
        }
      });
    }

    dispatch(setImgUrl(plotImg || ""));
  }, [plotSettings, plotImg, dispatch]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      grid: false,
      xColumn: "",
      yColumn: "",
    },
  });
  const { errors, isSubmitting } = form.formState;
  console.log(isSubmitting);

  const allErrors = Object.values(errors)
    .map((error) => error?.message)
    .filter(Boolean);
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);

    const formData = {
      plotType: plotType,
      data: data,
    };
    try {
      const response = await fetch("/api/dataset/postData", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to submit plot data");
      }

      const json = await response.json();
      dispatch(setImgUrl(json));

      form.reset();
      return json;
    } catch (error) {
      console.error("Error submitting form data:", error);
      return null;
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    }
  };

  return (
    <div className="w-full  bg-stone-800 p-5 text-black shadow-black blur-10 rounded-md border-4 border-white-500">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {plotSettings && (
            <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-10 mb-10">
              <FormField
                control={form.control}
                name="xColumn"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-white">X Axis Column</FormLabel>
                    <Select
                      {...field}
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger className="">
                        <SelectValue placeholder="Select Your X Column" />
                      </SelectTrigger>
                      <SelectContent>
                        {dataColumns.map((column) => (
                          <SelectItem key={column} value={column}>
                            {column}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="yColumn"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-white">Y Axis Column</FormLabel>
                    <Select
                      {...field}
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Your Y Column" />
                      </SelectTrigger>
                      <SelectContent>
                        {dataColumns.map((column) => (
                          <SelectItem
                            key={column}
                            value={column}
                            onSelect={() => field.onChange(column)}
                          >
                            {column}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>
          )}
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
                        <FormItem className=" p-3 border-4">
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
                              className="outline-8 font-medium"
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
            <Button
              type="submit"
              variant="emerald"
              className={cn(
                loading &&
                  "animate-pulse bg-rose-500 transition-colors duration-1000 ease-in-out"
              )}
            >
              Submit
            </Button>
          </div>

          <div className="text-rose-600">
            {allErrors.map((error) => (
              <p key={error}> *{error} Please fill in the empty fields </p>
            ))}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DetailedPlotForm;

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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Item } from "@radix-ui/react-select";
import FetchButton from "./fetch-btn";

const DetailedPlotForm = ({ plotType }: { plotType: string }) => {
  const [dataInfos, setDataInfos] =
    useState<Database["public"]["Tables"]["plot_infos"]["Row"]>();
  const [clearedData, setClearedData] = useState([]);

  console.log("ben de calistim");
  useEffect(() => {
    const fetchPlotInfos = async () => {
      const { data } = await supabase
        .from("plot_infos")
        .select("*")
        .eq("plotType", plotType);
      if (data) {
        setDataInfos(data[0]);
      }
    };

    fetchPlotInfos();
  }, [plotType]);
  if (dataInfos) {
    const x = Object.entries(dataInfos);
    x.forEach((dataInfos, index) => {
      if (dataInfos[0] === "id" || dataInfos[0] == "created_at") {
        x.splice(index, 1);
      }
    });
    console.log(x);
    const { samplePlot } = dataInfos;
  }

  const formSchema = z.object({});

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-1/2  bg-stone-900  p-5 m-5 s text-black flex  shadow-black">
      <Form {...form}>
        <div className="space-y-8 flex w-1/6">
          {dataInfos
            ? Object.entries(dataInfos).map((data) => {
                return data[1] ? (
                  <FormField
                    key={data[0]}
                    control={form.control}
                    name={data[0]}
                    render={({ field }) => (
                      <FormItem className="">
                        <FormLabel>{data[0]}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={`Please Enter ${data[0]}`}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                ) : null;
              })
            : null}
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
        </div>
        
      </Form>
  
    </div>
  );
};

export default DetailedPlotForm;

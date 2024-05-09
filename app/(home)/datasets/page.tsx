import React from "react";
import Link from "next/link";
import Card from "@/components/card";
import { supabase } from "@/lib/initSupabase";
import { NextResponse } from "next/server";
const fetchDatasets = async () => {
  const { data, error } = await supabase.from("DataSets").select("*");
  if (error) {
    throw error;
  }

  return data;
};

const DataSets = async () => {
  const data = await fetchDatasets();
  
  return (
    <div className="flex items-center justify-center px-4">
      <div className="grid lg:grid-cols-4  md:grid-cols-3 grid-cols-2   justify-center items-center   gap-10 mt-12">
        {data &&
          Object.values(data).map((key) => {
            if (!key.data_name || !key.data_api) {
              return;
            }
            return (
              <div key={key.id} className="">
                <Card dataName={key.data_name} id={key.id} api={key.data_api} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DataSets;

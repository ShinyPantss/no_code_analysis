"use client"
import SampleForm from "@/components/input-form";
import PlotImage from "@/components/plot-img";
import React from "react";

type Props = {};

const DataInterface = (props: Props) => {
  return (
    <div className=" w-full bg-stone-900 grid grid-cols-2  gap-4 py-10">
      <SampleForm />
      <PlotImage />
    </div>
  );
};

export default DataInterface;

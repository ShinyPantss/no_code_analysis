"use client"
import SampleForm from "@/components/input-form";
import PlotImage from "@/components/plot-img";
import { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

const DataInterface = (props: Props) => {
  const columnNames = useSelector(
    (state: RootState) => state.columnNames.columnNames
  );
  console.log(columnNames);
  return (
    <div className=" w-full bg-stone-900 grid grid-cols-2  gap-4 py-10">
      <SampleForm />
      <PlotImage />
    </div>
  );
};

export default DataInterface;

import React from "react";
import FetchButton from "@/components/fetch-btn";
import SampleForm from "@/components/input-form";
import Link from "next/link";

type Props = {};

const DataSets = (props: Props) => {
  return (
    <>
      <Link href="/datasets/1">go to dataset</Link>
    </>
  );
};

export default DataSets;

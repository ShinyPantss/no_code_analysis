import React from "react";
import Link from "next/link";
import Card from "@/components/card";
import { supabase } from "@/lib/initSupabase";
import { NextResponse } from "next/server";

type Props = {
  data: {
    name: string;
    imgUrl: string;
  };
};



const DataSets = (props: Props) => {
  return (

    <div className="flex items-center justify-center px-4">
      <div className="grid lg:grid-cols-4  md:grid-cols-3 grid-cols-2   justify-center items-center   gap-10 mt-12">
        {/** TODO: Will be applied generic card  */}

        {/* {props.data.name &&
          Object.values(props).map((key) => {
            return (
              <div key={props.data.name} className="">
                <Card  />
              </div>
            );
          })} */}

          <Card/>
          <Card/>
          <Card/>
          <Card/>
      </div>
    </div>

  );
};

export default DataSets;

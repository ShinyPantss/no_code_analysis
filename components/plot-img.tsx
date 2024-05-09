"use client";
import { RootState } from "@/store/store";
import { LoaderIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const PlotImage = () => {
  const [key, setKey] = useState<number>(0);

  const plotType = useSelector((state: RootState) => state.imgUrl.plotType);

  const imgUrl = useSelector((state: RootState) => state.imgUrl.imgUrl);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [plotType]);

  return (

    <div className=" flex items-center justify-center border z-50 bg-stone-900">
      {imgUrl ? (
        <Image
          key={key}
          src={imgUrl || ""}
          width={640}
          height={480}
          alt="plot img"
        />
      ) : (
        <div className="flex flex-col w-full h-full align-center justify-center items-center gap-4">
      
          <p className="text-3xl text-white">Loading Plot Image </p>
          <LoaderIcon className="animate-spin text-white " />

        </div>
      )}
      ;
    </div>
  );
};

export default PlotImage;


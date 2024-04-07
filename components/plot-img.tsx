"use client";
import { RootState } from "@/store/store";
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
    <div>
      <Image
        key={key}
        src={imgUrl || ""}
        width={640}
        height={480}
        alt="plot img"
      />
      ;
    </div>
  );
};

export default PlotImage;

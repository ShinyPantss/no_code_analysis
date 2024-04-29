"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Card = {
  dataName: string;
  id: number;
  api: string;
};

const Card = ({ dataName, id, api }: Card) => {
  const dataSetInformations = {
    id,
    dataName,
    api,
  };
  const sendApiToServer = async () => {
    const response = await fetch("/api/dataset/datasetAPI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataSetInformations),
    });
    
  };

  return (
    <Link
      className="bg-stone-900  text-white text-2xl border-4 border-cyan-500 rounded-xl overflow-hidden shadow-lg-group relative max-sm:h-28 max-sm:w-36 md:h-80 md:w-72 flex justify-center items-center z-30  "
      href={`datasets/${id}`}
      onClick={sendApiToServer}
    >
      <Image
        src="/DataSet-Type.jpg"
        alt=""
        width={400}
        height={800}
        className="h-full w-full absolute opacity-70  hover:opacity-90 transition-all object-"
      />
      <h3 className="font-bold  mb-2 max-sm:text-xl">{dataName}</h3>
    </Link>
  );
};

export default Card;

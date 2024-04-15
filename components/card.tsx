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
      className="bg-stone-900  text-white text-2xl border border-white rounded-xl overflow-hidden shadow-lg relative max-sm:h-28 max-sm:w-36 md:h-52 md:w-60 flex justify-center items-center z-30 "
      href={`datasets`}
      onClick={sendApiToServer}
    >
      <Image
        src="/DataSet-Type.jpg"
        alt=""
        width={300}
        height={200}
        className="h-full w-full absolute opacity-70  hover:opacity-90 transition-all object-"
      />
      <p className="relative  mb-4 max-sm:text-xl">{dataName}</p>
    </Link>
  );
};

export default Card;

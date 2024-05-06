"use client";
import { setColumnNames } from "@/store/columnNamesSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

type Card = {
  dataName: string;
  id: number;
  api: string;
};

const Card = ({ dataName, id, api }: Card) => {
  const dispatch = useDispatch();

  const dataSetInformations = {
    id,
    dataName,
    api,
  };
  const sendApiToServer = async (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const response = await fetch("/api/dataset/datasetAPI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataSetInformations),
    });
    const json = await response.json();
    dispatch(setColumnNames(json.columnNames));
    window.location.href = `datasets/${id}`;
  };

  return (
    <Link
      className="bg-stone-900  text-white text-2xl max-sm:text-xl border border-white rounded-xl overflow-hidden shadow-lg relative max-sm:h-28 max-sm:w-36 md:h-52 md:w-60 flex justify-center items-center z-30 "
      href={`datasets/${id}`}
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

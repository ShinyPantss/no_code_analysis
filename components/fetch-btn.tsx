"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";

type Props = {};

function FetchButton({}: Props) {
  const [img_url, set_imgurl] = useState("");
  const denemeFetch = async () => {
    const res = await fetch("http://127.0.0.1:5000/", {});
    const data = await res.text();
    set_imgurl(data);
  };
  return (
    <>
      <Image
        src={
          img_url === "" ? "https://dummyimage.com/300.png/09f/fff" : img_url
        }
        alt={""}
        width={300}
        height={300}
      />
      <Button
        onClick={denemeFetch}
        variant={"outline"}
        className="bg-black text-white"
      >
        Bas Banaaaa
      </Button>
    </>
  );
}

export default FetchButton;

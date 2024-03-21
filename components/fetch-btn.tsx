"use client";

import Image from "next/image";
import React, { useState } from "react";

type Props = {};

function FetchButton({}: Props) {
  const [img_url, set_imgurl] = useState("");
  const denemeFetch = async () => {
    console.log("hello");
    try {
      const res = await fetch("http://127.0.0.1:5000");
      const data = await res.text();
      set_imgurl(data);
    } catch (error) {
      console.error("Hata:", error);
    }
  };
  return (
    <>
      <button
        onClick={denemeFetch}
        className="text-3xl bg-black text-white 
       p-5  w-full "
      >
        Bas bana
      </button>
      <Image src={img_url} alt="resim" width={500} height={500} />
    </>
  );
}

export default FetchButton;

import React from "react";
import UploadDataButton from "@/components/uploadData-btn";
import { MyDropzone } from "@/components/uploadData-deneme";
import { handleClick } from "@/actions/uploadData-func";

const UploadData = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-transparent gap-7 z-[-30] mt-[-80px]">
      <p className="text-3xl text-slate-100 font-bold">
        Analyze Your Data{" "}
        <span className="text-5xl text-transparent bg-clip-text bg-gradient-to-l from-purple-500 to-cyan-500">
          SIMPLY
        </span>
      </p>
      <UploadDataButton />
    </div>
  );
};

export default UploadData;

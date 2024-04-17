import { Button } from "@/components/ui/button";
import React from "react";
import { MdOutlineUploadFile } from "react-icons/md";

const UploadData = () => {


  return (
    <div className="h-full w-full  flex flex-col justify-center items-center bg-transparent gap-7 z-[-30] mt-[-80px]">
      <p className="text-3xl text-slate-100 font-bold">
        Analyze Your Data{" "}
        <span className="text-5xl text-transparent bg-clip-text bg-gradient-to-l from-purple-500 to-cyan-500">
          SIMPLY
        </span>
      </p>
      <Button className="bg-transparent border-4 shadow-lg border-stone-200 hover:bg-cyan-500 hover:text-white rounded-xl hover:border-stone-200 transition-all  duration-150 text-6xl text-slate-100 p-20 z-10">
        Upload Your Data
        <MdOutlineUploadFile />
      </Button>
    </div>
  );
};

export default UploadData;

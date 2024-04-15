import { Button } from "@/components/ui/button";
import React from "react";
import { MdOutlineUploadFile } from "react-icons/md";

const UploadData = () => {
  return (
    <div className="h-full w-full bg-transparent flex flex-col justify-center items-center bg-black gap-7">
      <p className="text-4xl text-slate-100 font-bold">
        Analyze Your Data{" "}
        <span className="text-6xl text-transparent bg-clip-text bg-gradient-to-l from-purple-500 to-cyan-500">
          SIMPLY
        </span>
      </p>
      <Button className="bg-transparent border-4 shadow-lg border-stone-200 hover:bg-cyan-500 hover:text-black rounded-xl hover:border-stone-200 transition-all  duration-150 text-6xl text-slate-100 p-40">
        Upload Your Data
        <MdOutlineUploadFile/>
      </Button>
    </div>
  );
};

export default UploadData;

"use client";
import React, { MouseEventHandler, useCallback, useState } from "react";
import { Button } from "./ui/button";
import { useDropzone } from "react-dropzone";
import { supabase } from "@/lib/initSupabase";
const UploadDataButton = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedFile(acceptedFiles[0]);
  }, []);

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedFile) {
      return;
    }
    const data = new FormData();
    data.append("file", selectedFile);
    if (selectedFile) {
      const response = fetch("/api/uploadData", {
        method: "POST",
        body: data,
      });
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <form
      className="w-1/2 flex flex-col justify-center items-center bg-transparent gap-7 z-50 mt-[-80x]"
      onSubmit={handleClick}
    >
      <div className="flex text-5xl">
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          {selectedFile ? (
            <p className="text-white">Selected file: {selectedFile.name}</p>
          ) : (
            <p className="text-white">
              {" "}
              Drag and drop files here, or click to select files
            </p>
          )}
        </div>
      </div>

      <Button
        className="bg-transparent border-4 shadow-lg border-stone-200 hover:bg-cyan-500 hover:text-white rounded-xl hover:border-stone-200 transition-all duration-150 text-6xl text-slate-100 p-20 z-10"
        disabled={!selectedFile}
      >
        Upload And Analyze
      </Button>
    </form>
  );
};



export default UploadDataButton;



"use client";
import React, { MouseEventHandler, useCallback, useState } from "react";
import { Button } from "./ui/button";
import { useDropzone } from "react-dropzone";
import { GrDocumentUpload } from "react-icons/gr";
import { SiReactos } from "react-icons/si";
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
    // if (selectedFile) {
    //   const { data, error } = await supabase.storage
    //     .from("fileBucket")
    //     .upload(`/${selectedFile.name}`, selectedFile);

    //   if (error) {
    //     console.error("Error uploading file:", error.message);
    //   } else {
    //     console.log("File uploaded successfully:", data);
    //     setSelectedFile(null); // Clear selected file after upload
    //   }
    // }
  };

  // const handleClick: MouseEventHandler<HTMLButtonElement> = async (
  //   e: React.SyntheticEvent
  // ) => {
  //   e.preventDefault();
  //   if (selectedFile) {
  //     const formData = new FormData();

  //     try {
  //       const response = await fetch("/api/uploadData", {
  //         method: "POST",
  //         body: formData,
  //       });
  //       // Handle response from the server
  //     } catch (error) {
  //       console.error("Error uploading file:", error);
  //     }
  //   }
  // };
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <form
      className="w-1/2 flex flex-col justify-center items-center bg-transparent gap-7 z-50 mt-[-80x]"
      onSubmit={handleClick}
    >
      <div className="flex text-5xl border-dashed bg-transparent border-4 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md hover:text-white rounded-2xl hover:border-stone-200 transition-all duration-150 text-6xl text-slate-100 p-10 z-10 ">
        <div {...getRootProps()} className="dropzone">
          <input
            {...getInputProps()}
            onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
          />
          {selectedFile ? (
            <p className="text-white-500">Selected file: <span className="text-green-500">{selectedFile.name}</span></p>
          ) : (
            <p className="text-white text-3xl flex flex-col items-center justify-center">
              {" "}
              Drag and drop files here or
              <br />
              <span className="text-4xl text-cyan-500 ml-2">Select a file </span><GrDocumentUpload className="text-5xl ml-2 mt-2 text-white"/>
            </p>
          )}
        </div>
      </div>
      
      <div className="flex space-x-4">
      {selectedFile && (
        <Button
          className="bg-transparent border-4 shadow-lg border-stone-200 hover:bg-cyan-500 hover:text-white rounded-xl backdrop-blur-md hover:border-stone-200 hover:scale-110 transition-all duration-150 text-6xl text-slate-100 p-20 z-10"
          disabled={!selectedFile}
        >
          <span className="pr-2 text-4xl">Analyze</span> <SiReactos />
        </Button>
        
      )}
      
        <Button
          className="bg-transparent border-4 shadow-lg border-stone-200 hover:bg-cyan-500 hover:text-white rounded-xl backdrop-blur-md hover:border-stone-200 hover:scale-110 transition-all duration-150 text-6xl text-slate-100 p-20 z-10" 
               
        >
          <span className="pr-2 text-4xl">Upload Data</span> <GrDocumentUpload className="text-5xl ml-2 mt-2 text-white"/>
        </Button>

      </div>

    </form>
  );
};

export default UploadDataButton;

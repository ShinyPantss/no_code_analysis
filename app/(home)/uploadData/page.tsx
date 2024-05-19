import React from "react";
import UploadDataButton from "@/components/uploadData-btn";
import { handleClick } from "@/actions/uploadData-func";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const UploadData = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    console.log(user);
  } else {
    redirect("/signIn");
  }
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

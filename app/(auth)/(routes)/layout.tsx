import { MoveLeft } from 'lucide-react';
import Link from "next/link";
import React from "react";

const AuthLayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full">
      <Link href={"/"} className="bg-black text-white rounded-xl sm:p-2 p-2 md:text-lg text-sm m-4 md:p-4  hover:text-black hover:bg-white flex  items-center gap-2 max-w-max">
        {" "}
        <MoveLeft className="md:w-8 md:h-8 w-4 h-4 text-white  hover:text-black" />
        
        Back to Home
      </Link>
      {children}
    </div>
  );
};

export default AuthLayoutPage;

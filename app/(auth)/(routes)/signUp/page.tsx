import React from "react";
import SignUpForm from "./_components/sign-up-form";
import { Separator } from "@/components/ui/separator";

import SignInForm from "../signIn/_components/sign-in-form";
import SignInGithub from "../signIn/_components/sign-in-github";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="lg:w-1/3 md:w-1/2  sm:w-2/3 p-4 w-full  mx-auto flex flex-col justify-center  h-full  gap-2">
      <SignInGithub />
      <Separator className="bg-slate-200" />
      <SignUpForm />

      <Label className="text-white flex gap-2 ">
        If you have account?
        <Link href="/signIn" className="text-blue-500">
          Sign In
        </Link>
      </Label>
    </div>
  );
};

export default SignUpPage;

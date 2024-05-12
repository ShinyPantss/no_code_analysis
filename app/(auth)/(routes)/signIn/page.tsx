import { Label } from "@/components/ui/label";
import SignInForm from "./_components/sign-in-form";
import SignInGithub from "./_components/sign-in-github";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  return (
    <div className="lg:w-1/3 md:w-1/2  sm:w-2/3 p-4 w-full  mx-auto flex flex-col justify-center  h-full  gap-2">
      <SignInGithub />
      <Separator className="bg-slate-200" />
      <SignInForm />

      <Label className="text-white ">
        Don&apos;t have an account?{" "}
        <Link href="/signUp" className="text-blue-500">
          Sign up
        </Link>
      </Label>
    </div>
  );
}

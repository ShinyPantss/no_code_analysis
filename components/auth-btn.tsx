import { createClient } from "@/utils/supabase/server";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user);
  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/");
  };

  return user ? (
    <div className="flex items-center gap-4 text-white border rounded-lg text-l">
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <div className="flex border  align-baseline bg-transparent rounded-xl overflow-hidden text-gray-200 hover:bg-gray-100 hover:text-black  hover:border-black ">
      <Link
        href="/login"
        className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover text-xl   items-center"
      >
        <LogIn width={22} height={22} className=" mr-2" />
        Sign In
      </Link>
    </div>
  );
}

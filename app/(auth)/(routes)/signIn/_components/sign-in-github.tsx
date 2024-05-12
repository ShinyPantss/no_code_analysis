import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { Button } from "@/components/ui/button";

export default function SignInGithub() {
  const SignInGithub = async () => {
    "use server";

    // 1. Create a Supabase client
    const supabase = createClient();
    const origin = headers().get("origin");
    // 2. Sign in with GitHub
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${origin}/api/auth/callback`,
      },
    });

    if (error) {
      console.log(error);
    } else {
      return redirect(data.url);
    }
    // 3. Redirect to landing page
  };

  return (
    <form
      action={SignInGithub}
      className="w-full  flex items-center justify-center "
    >
      <Button className="hover:bg-stone-800 p-8 rounded-xl text-lg bg-black text-white w-full gap-2">
        <Image
          src="/github-mark-white.png"
          width={24}
          height={24}
          alt="github"
          className=""
        />
        Continue with GitHub
      </Button>
    </form>
  );
}

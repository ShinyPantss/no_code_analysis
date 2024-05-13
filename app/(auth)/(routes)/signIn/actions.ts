"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

type SignInSchema = {
  email: string;
  password: string;
};

export async function signIn(formData: SignInSchema) {
  console.log(formData);
  const { email, password } = formData;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    if (error.status === 400 || error.status === 401) {
      return { message: "Invalid email or password" };
    }
    return { message: "An error occurred during sign in" };
  } else {
    revalidatePath("/", "layout");
    redirect("/");
  }
}

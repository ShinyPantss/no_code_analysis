"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

type signInSchema = {
  email: string;
  password: string;
};

export async function signIn(formData: signInSchema) {
  console.log(formData);
  const data = {
    email: formData.email,
    password: formData.password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    console.log(error);
  } else {
    revalidatePath("/", "layout");
    redirect("/");
  }
}

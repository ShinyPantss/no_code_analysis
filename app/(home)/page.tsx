import React from "react";
import Hero from "@/components/main/Hero";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";
import Footer from "@/components/main/footer";

export default async function Home() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user, "asdasd");
  return (
    <main className="h-full w-full ">
      <div className="flex flex-col h-[850px] gap-20">
        <Hero />
        <Footer />
      </div>
    </main>
  );
}

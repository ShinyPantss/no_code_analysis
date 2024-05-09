import { supabase } from "@/utils/supabase/server";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const pata = await req.formData();

    const file: File | null = pata.get("file") as unknown as File;
    console.log(file, "asdasd");

    if (!file) {
      return NextResponse.json({ success: false });
    }

    const { data, error } = await supabase.storage
      .from("fileBucket")
      .upload(`${file.name}`, file);
    

    return NextResponse.json("selam");
  } catch (error) {
    return NextResponse.json("sa");
  }
}

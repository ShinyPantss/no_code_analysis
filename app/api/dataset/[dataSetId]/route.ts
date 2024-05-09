import { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/lib/initSupabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/")[3];
    const columNames = await supabase.from("DataSets").select("*").eq("id", id);

    return NextResponse.json({
      columns: columNames.data?.[0].dataColumnNames || [],
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch column names" });
  }
}

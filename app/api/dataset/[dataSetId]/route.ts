import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/")[3];
    const supabase = createClient();
    const columNames = await supabase.from("DataSets").select("*").eq("id", id);

    return NextResponse.json({
      columns: columNames.data?.[0].dataColumnNames || [],
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch column names" });
  }
}

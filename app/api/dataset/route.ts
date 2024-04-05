import { supabase } from "@/lib/initSupabase";
import { NextResponse } from "next/server";
export async function GET(req: Request, res: Response) {}

export async function POST(req: Request, res: Response) {
  const { plotType } = await req.json();
  const { data } = await supabase
    .from("plot_infos")
    .select("*")
    .eq("plotType", plotType);
  if (data) {
    return NextResponse.json(data[0]);
  }
}

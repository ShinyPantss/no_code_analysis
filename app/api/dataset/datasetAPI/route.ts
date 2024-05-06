import { NextRequest, NextResponse } from "next/server";

import { supabase } from "@/lib/initSupabase";
import { NextApiRequest } from "next";
export async function POST(req: Request, res: Response) {
  const data = await req.json();

  const response = await fetch("http://127.0.0.1:5000/datasetInfos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const json = await response.json();
  console.log(json);
  return NextResponse.json(json);
}

export async function GET(req: Request, res: Response) {
  const { searchParams } = new URL(req.url)

  const id = searchParams.get('dataSetId')
  console.log(id,"asdasd")


  return NextResponse.json({ id: id });
  // const data = await supabase.from("DataSets").select("*").eq("id");
}

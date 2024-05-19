import { NextRequest, NextResponse } from "next/server";

import { supabase } from "@/utils/supabase/server";
import { NextApiRequest } from "next";
export async function POST(req: Request, res: Response) {
  const data = await req.json();

  const response = await fetch("http://127.0.0.1:5000/dataSetInfos", {
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



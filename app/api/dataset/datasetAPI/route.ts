import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const data = await req.json();

  const response = await fetch("http://127.0.0.1:5000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = await response.json();

  return NextResponse.json(json);
}

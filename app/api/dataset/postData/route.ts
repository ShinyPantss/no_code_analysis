import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const data = await req.json();
  console.log("calsitim");

  const postData = async () => {
    const response = await fetch("http://127.0.0.1:5000", {
      method: "POST",
      body: JSON.stringify(data),
    });
    console.log("ici calisti");
    return response;
  };
  const response = await postData();

  return NextResponse.json(response);
}

import { supabase } from "@/lib/initSupabase";
import { NextResponse } from "next/server";
import type { Database, Tables } from "@/database.type";
export async function GET(req: Request, res: Response) {}

export async function POST(req: Request, res: Response) {
  const { plotType } = await req.json();

  function getTableType<TTableName extends keyof Database["public"]["Tables"]>(
    tableName: TTableName
  ): Database["public"]["Tables"][TTableName]["Row"] {
    return null!;
  }
  const simplePlotType = getTableType(plotType);
  type SimplePlotType = typeof simplePlotType;
  async function fetchFromDatabase<
    TTableName extends keyof Database["public"]["Tables"]
  >(
    tableName: TTableName
  ): Promise<Omit<Tables<TTableName>, "id" | "created_at">[]> {
    const { data, error }: { data: SimplePlotType; error: any } = await supabase
      .from(tableName)
      .select("*");

    if (error) {
      throw new Error(error.message);
    }
    return data;

    // Example usage:
  }
  const k = await fetchFromDatabase(plotType);

  const clearedData = Object.entries(k[0]).filter(([key, value]) => {
    return key !== "id" && key !== "created_at";
  });

  const turnIntoObject = clearedData.map(([key, value]) => {
    return {
      [key]:value
    
    };
  });

  return NextResponse.json(turnIntoObject);
}

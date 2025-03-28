export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      barPlot: {
        Row: {
          created_at: string
          grid: boolean | null
          id: number
          imageUrl: string | null
          title: string | null
          Width: number | null
          xLabel: string | null
          yLabel: string | null
        }
        Insert: {
          created_at?: string
          grid?: boolean | null
          id?: number
          imageUrl?: string | null
          title?: string | null
          Width?: number | null
          xLabel?: string | null
          yLabel?: string | null
        }
        Update: {
          created_at?: string
          grid?: boolean | null
          id?: number
          imageUrl?: string | null
          title?: string | null
          Width?: number | null
          xLabel?: string | null
          yLabel?: string | null
        }
        Relationships: []
      }
      DataSets: {
        Row: {
          created_at: string
          data_api: string | null
          data_name: string | null
          dataColumnNames: string[] | null
          id: number
        }
        Insert: {
          created_at?: string
          data_api?: string | null
          data_name?: string | null
          dataColumnNames?: string[] | null
          id?: number
        }
        Update: {
          created_at?: string
          data_api?: string | null
          data_name?: string | null
          dataColumnNames?: string[] | null
          id?: number
        }
        Relationships: []
      }
      scatterPlot: {
        Row: {
          color: string | null
          created_at: string
          grid: boolean | null
          id: number
          imageUrl: string | null
          markerSize: number | null
          title: string | null
          xLabel: string | null
          yLabel: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string
          grid?: boolean | null
          id?: never
          imageUrl?: string | null
          markerSize?: number | null
          title?: string | null
          xLabel?: string | null
          yLabel?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string
          grid?: boolean | null
          id?: never
          imageUrl?: string | null
          markerSize?: number | null
          title?: string | null
          xLabel?: string | null
          yLabel?: string | null
        }
        Relationships: []
      }
      simplePlot: {
        Row: {
          created_at: string
          grid: boolean | null
          id: number
          imageUrl: string | null
          lineWidth: number | null
          markerSize: number | null
          title: string | null
          xLabel: string | null
          yLabel: string | null
        }
        Insert: {
          created_at?: string
          grid?: boolean | null
          id?: number
          imageUrl?: string | null
          lineWidth?: number | null
          markerSize?: number | null
          title?: string | null
          xLabel?: string | null
          yLabel?: string | null
        }
        Update: {
          created_at?: string
          grid?: boolean | null
          id?: number
          imageUrl?: string | null
          lineWidth?: number | null
          markerSize?: number | null
          title?: string | null
          xLabel?: string | null
          yLabel?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

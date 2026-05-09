export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      ai_consultations: {
        Row: {
          created_at: string
          hot: boolean
          id: string
          lead_id: string | null
          recommendation: string | null
          source: string
          transcript: Json
          user_agent: string | null
          verdict_summary: string | null
          verdict_title: string | null
        }
        Insert: {
          created_at?: string
          hot?: boolean
          id?: string
          lead_id?: string | null
          recommendation?: string | null
          source?: string
          transcript?: Json
          user_agent?: string | null
          verdict_summary?: string | null
          verdict_title?: string | null
        }
        Update: {
          created_at?: string
          hot?: boolean
          id?: string
          lead_id?: string | null
          recommendation?: string | null
          source?: string
          transcript?: Json
          user_agent?: string | null
          verdict_summary?: string | null
          verdict_title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_consultations_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "lead_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      bankruptcy_cases: {
        Row: {
          children_count: number
          created_at: string
          debt_amount: number | null
          has_business: boolean
          has_deposits: boolean
          has_real_estate: boolean
          has_vehicle: boolean
          id: string
          marital_status: string | null
          questionnaire_done: boolean
          updated_at: string
          user_id: string
        }
        Insert: {
          children_count?: number
          created_at?: string
          debt_amount?: number | null
          has_business?: boolean
          has_deposits?: boolean
          has_real_estate?: boolean
          has_vehicle?: boolean
          id?: string
          marital_status?: string | null
          questionnaire_done?: boolean
          updated_at?: string
          user_id: string
        }
        Update: {
          children_count?: number
          created_at?: string
          debt_amount?: number | null
          has_business?: boolean
          has_deposits?: boolean
          has_real_estate?: boolean
          has_vehicle?: boolean
          id?: string
          marital_status?: string | null
          questionnaire_done?: boolean
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      bankruptcy_documents: {
        Row: {
          case_id: string
          created_at: string
          doc_key: string
          doc_label: string
          file_name: string | null
          file_path: string | null
          id: string
          required: boolean
          uploaded_at: string | null
          user_id: string
        }
        Insert: {
          case_id: string
          created_at?: string
          doc_key: string
          doc_label: string
          file_name?: string | null
          file_path?: string | null
          id?: string
          required?: boolean
          uploaded_at?: string | null
          user_id: string
        }
        Update: {
          case_id?: string
          created_at?: string
          doc_key?: string
          doc_label?: string
          file_name?: string | null
          file_path?: string | null
          id?: string
          required?: boolean
          uploaded_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bankruptcy_documents_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "bankruptcy_cases"
            referencedColumns: ["id"]
          },
        ]
      }
      credit_cases: {
        Row: {
          analysis_ready: boolean
          analysis_text: string | null
          consent_uploaded_path: string | null
          created_at: string
          id: string
          paid: boolean
          paid_at: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          analysis_ready?: boolean
          analysis_text?: string | null
          consent_uploaded_path?: string | null
          created_at?: string
          id?: string
          paid?: boolean
          paid_at?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          analysis_ready?: boolean
          analysis_text?: string | null
          consent_uploaded_path?: string | null
          created_at?: string
          id?: string
          paid?: boolean
          paid_at?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      credit_reports: {
        Row: {
          bureau: string
          case_id: string
          created_at: string
          file_name: string
          file_path: string
          id: string
          user_id: string
          verification_notes: string | null
          verification_status: string
          verified: boolean
        }
        Insert: {
          bureau: string
          case_id: string
          created_at?: string
          file_name: string
          file_path: string
          id?: string
          user_id: string
          verification_notes?: string | null
          verification_status?: string
          verified?: boolean
        }
        Update: {
          bureau?: string
          case_id?: string
          created_at?: string
          file_name?: string
          file_path?: string
          id?: string
          user_id?: string
          verification_notes?: string | null
          verification_status?: string
          verified?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "credit_reports_case_id_fkey"
            columns: ["case_id"]
            isOneToOne: false
            referencedRelation: "credit_cases"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_requests: {
        Row: {
          created_at: string
          debt_amount: number | null
          email: string | null
          id: string
          message: string | null
          name: string
          phone: string
          preferred_time: string | null
          source: string
          status: string
          user_agent: string | null
        }
        Insert: {
          created_at?: string
          debt_amount?: number | null
          email?: string | null
          id?: string
          message?: string | null
          name: string
          phone: string
          preferred_time?: string | null
          source?: string
          status?: string
          user_agent?: string | null
        }
        Update: {
          created_at?: string
          debt_amount?: number | null
          email?: string | null
          id?: string
          message?: string | null
          name?: string
          phone?: string
          preferred_time?: string | null
          source?: string
          status?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          consent_at: string | null
          consent_given: boolean
          created_at: string
          email: string | null
          full_name: string
          id: string
          iin_snils: string | null
          phone: string | null
          updated_at: string
        }
        Insert: {
          consent_at?: string | null
          consent_given?: boolean
          created_at?: string
          email?: string | null
          full_name?: string
          id: string
          iin_snils?: string | null
          phone?: string | null
          updated_at?: string
        }
        Update: {
          consent_at?: string | null
          consent_given?: boolean
          created_at?: string
          email?: string | null
          full_name?: string
          id?: string
          iin_snils?: string | null
          phone?: string | null
          updated_at?: string
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

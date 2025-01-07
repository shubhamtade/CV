// src/utils/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fievjcylfyyuhyofzevu.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpZXZqY3lsZnl5dWh5b2Z6ZXZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxNDc2MTAsImV4cCI6MjA1MTcyMzYxMH0.S6m6O2h6__4nMl1NJmxVaNjA9IoakiwskXCNwtQGlxw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

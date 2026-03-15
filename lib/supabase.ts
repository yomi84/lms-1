import { createClient } from '@supabase/supabase-js';

// Menghubungkan ke URL dan Key Supabase dari Environment Variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Inisialisasi client Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

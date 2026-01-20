// lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
console.log('🔧 Supabase Configuration:', {
  url: supabaseUrl,
  key: supabaseKey ? '✅ Key exists' : '❌ Key missing',
  keyLength: supabaseKey?.length
});

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
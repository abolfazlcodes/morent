import { createClient } from "@supabase/supabase-js";

export const Baseurl = import.meta.env.VITE_BASE_URL;
const supabaseKey = import.meta.env.VITE_API_KEY;

const supabase = createClient(Baseurl, supabaseKey);

export default supabase;

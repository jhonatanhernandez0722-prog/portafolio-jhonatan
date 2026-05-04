import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://qxvlbpficjfzvcqcbybh.supabase.co";
const SUPABASE_KEY = "sb_publishable_mA4ndslCJ4IcGUOtpDBD_w_kTYsj3qE";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

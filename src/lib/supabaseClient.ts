import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "http://127.0.0.1:54321",
  "sb_publishable_ACJWlzQHlZjBrEguHvfOxg_3BJgxAaH",
);

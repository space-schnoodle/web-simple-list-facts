import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ftqbmwaeibpxesomgale.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0cWJtd2FlaWJweGVzb21nYWxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAzNDc5MDcsImV4cCI6MjEwNTkyMzkwN30.vhrcI09VB_Q9neXbx1oIXmFF3MZejuIypyshEtU3Jog";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://mnjmwepfsftivpxebprg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uam13ZXBmc2Z0aXZweGVicHJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc0MTkwMDQsImV4cCI6MjAzMjk5NTAwNH0.vroFZ-ki6DUWOmNwmF9wgB86IT4QKMngHJCA6I3EORY')
// imports Supabase and links api to file

export {supabase}
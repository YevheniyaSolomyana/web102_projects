import { createClient } from '@supabase/supabase-js'

const URL = 'https://lvgflwvqtuaqzurhvkuu.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2Z2Zsd3ZxdHVhcXp1cmh2a3V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwNTc3MjcsImV4cCI6MTk5NjYzMzcyN30.n-wLZIrryZxSFPbbYOXMn-wbhEQGV063iGk_FaIeoGA';

export const supabase = createClient(URL, API_KEY);
import { createClient } from '@supabase/supabase-js'

const URL = 'https://svvrcjprpghvumuksuke.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN2dnJjanBycGdodnVtdWtzdWtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5NDcyNTAsImV4cCI6MTk5NzUyMzI1MH0.1aCPG3jrQH4ERpEM2AHF7Kj6ASCpMOG5aerwe9-I9YE';

export const supabase = createClient(URL, API_KEY);
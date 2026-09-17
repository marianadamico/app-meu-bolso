import { supabase } from "./supabase";

export const signup=(email, password)=>
    supabase.auth.signUp({emil, password});
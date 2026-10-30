import { supabase } from './supabase';

export function listCategories(){
    return supabase.from('categorias').select('*').order('nome');
}
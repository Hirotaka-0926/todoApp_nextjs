import { supabase } from "./supabase.tx";

export const getAllTodos = async () => {
  const todos = await supabase.from("todo").select("*");
  return todos;
};

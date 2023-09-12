import supabase from "./supabase";

export async function getCars() {
  const { data, error } = await supabase.from("cars").select("*");

  if (error) throw new Error(error.message);

  return data;
}

export async function getCarData(id: string) {
  const { data, error } = await supabase
    .from("cars")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
}

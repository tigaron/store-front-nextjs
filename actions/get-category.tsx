import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (id: string): Promise<Category | null> => {
  const res = await fetch(`${URL}/${id}`, { cache: "no-cache" });

  if (!res.ok) return null;

  return res.json();
};

export default getCategories;

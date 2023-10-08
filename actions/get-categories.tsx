import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL, { cache: "no-cache" });

  if (!res.ok) return [];

  return res.json();
};

export default getCategories;

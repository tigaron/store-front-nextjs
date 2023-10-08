import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
  const res = await fetch(URL, { cache: "no-cache" });

  if (!res.ok) return [];

  return res.json();
};

export default getSizes;

import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboards = async (id: string): Promise<Billboard | null> => {
  const res = await fetch(`${URL}/${id}`, { cache: "no-cache" });

  if (!res.ok) return null;

  return res.json();
};

export default getBillboards;

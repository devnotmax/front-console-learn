import { getAuthToken } from "@/contexts/authContext";

export const getVideos = async (id: string) => {
  const token = getAuthToken();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/video/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

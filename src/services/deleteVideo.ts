import { getAuthToken } from "@/contexts/authContext";

export const deleteVideo = async (videoId: string) => {
  const token = getAuthToken();
  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  const response = await fetch(`${apiURL}/video/${videoId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Error deleting video");
  }
};

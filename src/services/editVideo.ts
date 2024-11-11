import { getAuthToken } from "@/contexts/authContext";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface EditVideoData {
  title?: string;
  description?: string;
  file?: File | null;
}

/**
 * Edits an existing video by updating its details.
 * @param videoId - The ID of the video to edit.
 * @param data - The video details to update, including title, description, and file.
 * @returns The response from the API.
 */
export const editVideo = async (
  videoId: string,
  data: EditVideoData
): Promise<Response> => {
  const formData = createFormData(data);
  const token = getAuthToken();

  return await fetchWithAuth(
    `${API_URL}/video/${videoId}`,
    "PATCH",
    formData,
    token
  );
};

/**
 * Creates a FormData object for video editing.
 * @param data - The video data including title, description, and optional file.
 * @returns The FormData object.
 */
const createFormData = (data: EditVideoData): FormData => {
  const formData = new FormData();

  if (data.title) formData.append("title", data.title);
  if (data.description) formData.append("description", data.description);
  if (data.file) formData.append("video", data.file);

  return formData;
};

/**
 * Sends a fetch request with authentication.
 * @param url - The endpoint URL.
 * @param method - The HTTP method (e.g., PATCH).
 * @param body - The request body.
 * @param token - The user's auth token.
 * @returns The response from the fetch request.
 */
const fetchWithAuth = async (
  url: string,
  method: string,
  body: FormData,
  token: string
): Promise<Response> => {
  return await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body,
  });
};

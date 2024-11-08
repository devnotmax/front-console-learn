import { getAuthToken } from "@/contexts/authContext";

const API_URL = "https://radiant-gentleness-production.up.railway.app";

/**
 * Uploads a video to a specified course.
 * @param courseId - The ID of the course to upload the video to.
 * @param file - The video file to be uploaded.
 * @param title - The title of the video.
 * @param description - The description of the video.
 * @returns The response from the API.
 */
export const uploadVideo = async (
  courseId: string,
  file: File,
  title: string,
  description: string
): Promise<Response> => {
  const formData = createFormData({ title, description, file });
  const token = getAuthToken();

  return await fetchWithAuth(
    `${API_URL}/api/video/${courseId}`,
    "POST",
    formData,
    token
  );
};

/**
 * Creates a FormData object for video upload.
 * @param params - The parameters including title, description, and file.
 * @returns The FormData object.
 */
const createFormData = ({
  title,
  description,
  file,
}: {
  title: string;
  description: string;
  file: File;
}): FormData => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("video", file);
  return formData;
};

/**
 * Fetches data from the API with authentication.
 * @param url - The endpoint URL.
 * @param method - The HTTP method (e.g., POST).
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

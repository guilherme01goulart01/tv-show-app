import { apiClient } from "./apiClient";

const SHOW_API_URL =
  "https://agile-releases.s3.us-east-1.amazonaws.com/tests/tv-shows/SHOW123.json";

export const fetchShowDetails = async () => {
  const response = await apiClient.get(SHOW_API_URL);
  return response.data;
};

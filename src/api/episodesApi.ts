import type { Episodes } from "../types/Episodes";
import { apiClient } from "./apiClient";

const EPISODES_API_URL =
  "https://agile-releases.s3.us-east-1.amazonaws.com/tests/episodes/SHOW123.json";

// Função desacoplada para buscar os episódios
export const fetchEpisodes = async () => {
  const response = await apiClient.get(EPISODES_API_URL);
  return response.data.filter((ep: Episodes) => ep !== null); // Remove valores nulos
};

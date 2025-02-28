import { useEffect, useState, useCallback } from "react";
import { fetchEpisodes } from "../../api/episodesApi";
import { Episodes } from "../../types/Episodes";

export const useEpisodes = () => {
  const [episodes, setEpisodes] = useState<Episodes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadEpisodes = useCallback(async () => {
    try {
      setLoading(true);
      setEpisodes(await fetchEpisodes());
    } catch (err) {
      console.log(err);
      setError("Erro ao carregar episódios.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadEpisodes();
  }, [loadEpisodes]);

  return { episodes, loading, error };
};

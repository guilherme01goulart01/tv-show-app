import { TvShows } from "../../types/TvShows";
import { fetchShowDetails } from "./../../api/showApi";
import { useEffect, useState, useCallback } from "react";

export const useShow = () => {
  const [show, setShow] = useState<TvShows>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadShow = useCallback(async () => {
    try {
      setLoading(true);
      setShow(await fetchShowDetails());
    } catch (err) {
      console.log(err);
      setError("Erro ao carregar detalhes do show.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadShow();
  }, [loadShow]);

  return { show, loading, error };
};

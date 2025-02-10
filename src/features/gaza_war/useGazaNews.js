import { useQuery } from "@tanstack/react-query";
import { getNews } from "../../services/apiNews";

export const useGazaNews = () => {
  const {
    data: articles,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["gazaNews"],
    queryFn: () => getNews({ query: "gaza" }),
  });

  return { isLoading, articles, error };
};

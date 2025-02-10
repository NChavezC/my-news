import { useQuery } from "@tanstack/react-query";
import { getNews } from "../../services/apiNews";

export const useSANews = () => {
  const {
    data: articles,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["saNews"],
    queryFn: () => getNews({ query: "south america" }),
  });

  return { isLoading, articles, error };
};

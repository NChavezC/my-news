import { useQuery } from "@tanstack/react-query";
import { getNews } from "../../services/apiNews";

export const useEuropeNews = () => {
  const {
    data: articles,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["europeNews"],
    queryFn: () => getNews({ query: "europe" }),
  });

  return { isLoading, articles, error };
};

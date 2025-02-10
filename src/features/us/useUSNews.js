import { useQuery } from "@tanstack/react-query";
import { getNews } from "../../services/apiNews";

export const useUSNews = () => {
  const {
    data: articles,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["usNews"],
    queryFn: () => getNews({ query: "us" }),
  });

  return { isLoading, articles, error };
};

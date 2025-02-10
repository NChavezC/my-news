import NewsItem from "../../ui/NewsItem";
import Spinner from "../../ui/Spinner";
import { useUSNews } from "./useUSNews";

function US() {
  const { isLoading, articles } = useUSNews();

  if (isLoading) return <Spinner />;

  return (
    <ul>
      {articles?.length > 0 ? (
        articles.map((article, index) => (
          <NewsItem key={index} article={article} />
        ))
      ) : (
        <p>No articles available.</p>
      )}
    </ul>
  );
}

export default US;

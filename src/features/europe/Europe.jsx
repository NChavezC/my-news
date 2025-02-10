import NewsItem from "../../ui/NewsItem";
import { useEuropeNews } from "./useEuropeNews";
import Spinner from "../../ui/Spinner"

function Europe() {
  const { isLoading, articles } = useEuropeNews();

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

export default Europe;

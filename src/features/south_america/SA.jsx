import NewsItem from "../../ui/NewsItem";
import Spinner from "../../ui/Spinner";
import { useSANews } from "./useSANews";

function SA() {
  const { isLoading, articles } = useSANews();

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

export default SA;

import { Link } from "react-router-dom";
import MenuLink from "./MenuLink";
import Button from "./Button";

function NewsItem({ article = {} }) {
  const { title, author, description, publishedAt, source, url, urlToImage } =
    article;

  return (
    <li className="border border-stone-800 rounded-lg m-4 p-4">
      {/* News Title and Metadata */}
      <div className="flex flex-col m-4">
        <h3 className="text-2xl text-stone-900 dark:bg-gray-900 dark:text-white">{title}</h3>
        <p>
          <strong>By:</strong> {author || "Unknown Author"}
        </p>
        <p>
          <strong>Published:</strong> {new Date(publishedAt).toLocaleString()}
        </p>
        <p>
          <strong>Source:</strong> {source?.name || "Unknown Source"}
        </p>
      </div>

      {/* Image and Description */}
      <div className="flex justify-center flex-col m-4">
        {urlToImage ? (
          <img src={urlToImage} alt={title} className="w-[75%] rounded-lg border border-stone-900 m-4" />
        ) : (
          <p>No Image Available</p>
        )}
        <p>{description || "No description available."}</p>
        <Button to={url}>
          Go to article
        </Button>
      </div>
    </li>
  );
}

export default NewsItem;

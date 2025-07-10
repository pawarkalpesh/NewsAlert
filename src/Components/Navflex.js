import { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

const Navflex = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = "ee020f71a148fbe3be62141fe93275a2"; // Your actual API key
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${apiKey}`;

    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles);
        } else {
          console.error("API response missing articles:", data);
          setArticles([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("API fetch error:", err);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="container my-3">
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {loading ? (
        <p className="text-center mt-5">Loading news...</p>
      ) : articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItems
            key={index}
            title={news.title}
            description={news.description}
            src={news.image}
            url={news.url}
          />
        ))
      ) : (
        <p className="text-center text-muted">No news found.</p>
      )}
    </div>
  );
};

export default Navflex;

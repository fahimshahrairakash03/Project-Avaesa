import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  console.log(news);
  return (
    <div className="bg-base-200 py-10">
      <h1 className="py-10 text-5xl font-bold bg-base-200 text-center">
        Covered News
      </h1>
      <div className="grid grid-cols-2 gap-6 px-5">
        {news.map((n) => (
          <NewsCard key={n._id} n={n}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default News;

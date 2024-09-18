import React, { useEffect, useState } from 'react';
import './News.css';

const News = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=714ef9b8a6ef47d19b4bda6f4f0d100f"
    );
    const data = await response.json();
    setMyNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="news-cards">
      {mynews.length > 0 ? (
        mynews.map((article, index) => (
          <div className="card" key={index}>
            <img
              src={article.urlToImage || 'https://via.placeholder.com/350'}
              className="card-img-top"
              alt="News"
            />
            <div className="card-body">
              <h5 className="card-title">{article.author || 'Unknown Author'}</h5>
              <p className="card-text">{article.title}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        ))
      ) : (
        <p>No news articles found.</p>
      )}
    </div>
  );
};

export default News;

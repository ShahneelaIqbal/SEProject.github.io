import React, { useState, useEffect } from 'react';
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async (searchQuery) => {
    if (!searchQuery) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=714ef9b8a6ef47d19b4bda6f4f0d100f`
      );
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    fetchNews(query);
  }, [query]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for news..."
        className="search-input"
        value={query}
        onChange={handleChange}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="news-results">
          {news.length ? (
            news.map((article, index) => (
              <div className="card" key={index}>
                <img
                  src={article.urlToImage || 'https://via.placeholder.com/350'}
                  className="card-img-top"
                  alt={article.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;

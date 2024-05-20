import React, { useEffect, useState } from 'react';

const API_KEY = "c71b7dc352924c2d818fd175aa9d9baf";
const url = "https://newsapi.org/v2/everything?q=technology&apiKey=";

const NewsApp = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const res = await fetch(`${url}${API_KEY}`);
    const data = await res.json();
    setArticles(data.articles);
  };

  return (
    <div>
        <div name='news' className='flex justify-center'>
        <div className='flex justify-center items-center my-10 w-[400px] h-[60px] rounded-full bg-black'>
            <h1 className='font-bold text-4xl tracking-wide text-white'>TECH NEWS</h1>
          </div>
        </div>
       
        <div className="container mx-auto p-4">
             {/* <h1 className="text-3xl font-bold mb-4">Technology News</h1> */}
      
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
    </div>
    
  );
};

const NewsCard = ({ article }) => {
  if (!article.urlToImage) return null;

  const date = new Date(article.publishedAt).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta",
  });

  return (
    <div className="bg-[#DABDFF] rounded-3xl m-5 shadow-lg border-2 border-purple-500 overflow-hidden">
      <img className="w-full h-48 shadow-lg object-cover " src={article.urlToImage} alt={article.title} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
        <p className="text-gray-600 mb-4">{article.description}</p>
        <div className="text-gray-500 text-sm">
          <span>{article.source.name}</span>
          <span> · </span>
          <span>{date}</span>
        </div>
        <button
          className="mt-4 bg-purple-800 rounded-full text-white px-4 py-2 "
          onClick={() => window.open(article.url, "_blank")}
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default NewsApp;

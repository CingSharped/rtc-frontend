import React from 'react'
import { useState } from 'react'
import './style.css'

const News = ({ newsItems }) => {
  const [current, setCurrent] = useState(0);
  const length = newsItems.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(newsItems) || newsItems.length <= 0) {
    return null;
  }

  return (
    <div className="news">
      {newsItems.map((item, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <div>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
        <span className="left-arrow" onClick={prevSlide}>&lt;</span>
      <span className="right-arrow" onClick={nextSlide}>&gt;</span>
    </div>
  );
};

export default News
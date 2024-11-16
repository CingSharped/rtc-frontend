import React from 'react';
import './style.css'

const Watchlist = () => {
  const watchlistItems = [
    // Array of watchlist items
    { name: "Item 1" },
    { name: "Item 2" },
    // Add more items here
  ];

  return (
    <div className="watchlist frame">
      <h2>Watchlist</h2>
      <div className='list'>
        {watchlistItems.map((item, index) => (
          <div key={index}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
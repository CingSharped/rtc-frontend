import React from 'react';
import './style.css'


const DeckList = () => {
  const decks = [
    // Array of deals items
    { name: "Deal 1" },
    { name: "Deal 2" },
    // Add more deals here
  ];

  return (
    <div className="decklist">
      <h2>Decks</h2>
      <div className='decks'>
        {decks.map((item, index) => (
          <div key={index}>
            {item.name}
          </div>
        ))}
        <button>+</button>
      </div>
    </div>
  );
};

export default DeckList;
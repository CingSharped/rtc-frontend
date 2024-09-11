import { useState } from "react";

const DeckListing = ({
  deck_name,
  deck_description,
  is_public,
  created_by,
  main_deck,
}) => {
  // Hook for managing the visibility of the main deck
  const [showMain, setShowMain] = useState(main_deck);

  // Toggle the main deck visibility
  const toggleMainDeck = () => {
    setShowMain((prevState) => !prevState);
  };

  return (
    <div>
      <h3>{`${deck_name} by ${created_by}`}</h3>
      <p>{deck_description}</p>
      {is_public && <span>Public Deck</span>}
      <button onClick={toggleMainDeck}>
        {showMain ? "Hide Main Deck" : "Show Main Deck"}
      </button>
      {showMain && (
        <div>
          <p>Main Deck content...</p>
          {/* Additional main deck details can be rendered here */}
        </div>
      )}
    </div>
  );
};

export default DeckListing;

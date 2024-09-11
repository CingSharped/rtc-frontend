import { useState, useEffect } from "react";
import axios from "axios";
import DeckListing from "../DeckListing"; // Import DeckListing component

const DeckList = () => {
  const [username, setUsername] = useState(""); // State for username
  const [decks, setDecks] = useState([]); // State for storing decks

  // Function to fetch the decks using the username
  const fetchDecks = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/decks/${username}`
      );
      setDecks(response.data); // Store the fetched decks in state
    } catch (error) {
      console.error("Error fetching decks:", error);
    }
  };

  // useEffect to fetch the decks when the component mounts or username changes
  useEffect(() => {
    if (username) {
      // Only fetch if username is not empty
      fetchDecks();
    }
  }, [username]); // Depend on the username state

  // Example of setting a username (could be dynamic based on user input or other logic)
  useEffect(() => {
    setUsername("chris"); // Set the username dynamically, replace with actual logic
  }, []);

  return (
    <div className="decklist">
      <h2>Decks</h2>
      <div className="decks">
        {decks.map((deck, index) => (
          <DeckListing
            key={index}
            {...deck} 
          />
        ))}
        <button>+</button>
      </div>
    </div>
  );
};

export default DeckList;

// import { useState, useEffect } from "react";
// import axios from "axios";

// const DeckList = () => {
//   const [username, setUsername] = useState(""); // State for username
//   const [decks, setDecks] = useState([]); // State for storing decks

//   // Function to fetch the decks using the username
//   const fetchDecks = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:3000/decks/${username}`
//       );
//       setDecks(response.data); // Store the fetched decks in state
//     } catch (error) {
//       console.error("Error fetching decks:", error);
//     }
//   };

//   // useEffect to fetch the decks when the component mounts or username changes
//   useEffect(() => {
//     if (username) {
//       // Only fetch if username is not empty
//       fetchDecks();
//     }
//   }, [username]); // Depend on the username state

//   // Example of setting a username (could be dynamic based on user input or other logic)
//   useEffect(() => {
//     setUsername("chris "); // Set the username dynamically, replace with actual logic
//   }, []);

//   return (
//     <div className="decklist">
//       <h2>Decks</h2>
//       <div className="decks">
//         {decks.map((item, index) => (
//           <div key={index}>{item.deck_name}</div>
//         ))}
//         <button>+</button>
//       </div>
//     </div>
//   );
// };

// export default DeckList;

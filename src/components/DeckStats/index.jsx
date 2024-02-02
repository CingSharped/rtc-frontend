import React, { useState } from 'react';


const DeckStats = ({ ownedCountProp, valueProp, mainDeckProp, sideDeckProp, extraDeckProp }) => {
  const [ownedCount, setOwnedCount] = useState(ownedCountProp || 0);
  const [value, setValue] = useState(valueProp || 0);
  const [mainDeck, setMainDeck] = useState(mainDeckProp || 0);
  const [sideDeck, setSideDeck] = useState(sideDeckProp || 0);
  const [extraDeck, setExtraDeck] = useState(extraDeckProp || 0);
  
  return (
    <div className="deck-stats">
      <div className="main">Main: {mainDeck} / 60</div>
      <div className="side">Side: {sideDeck} / 15</div>
      <div className="extra">Extra: {extraDeck} / 15</div>
      <div className="value">Value: {value}</div>
      <div className="owned-count">Owned Count: {ownedCount}</div>
    </div>
  );
}

export default DeckStats
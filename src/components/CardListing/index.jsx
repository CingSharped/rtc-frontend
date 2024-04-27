import { useState } from 'react';
import './style.css'

function CardListing({ name, card_images, type, attribute, desc, atk, def, level , scale, linkval, card_prices}) {
    const imageUrl = card_images[0].image_url_small;
    const [clicked,setClicked] = useState(false);

    function userClicked() {
      setClicked(!clicked)
    }
    // This will be used to display corresponding image to type of card, e.g. quickplay, counter, continuous, etc
    // const spellAndTrapIdentifier = {"Quick-Play": "image-link"};

    return (
      <div>
        <div className="card" onClick={() => userClicked()}>
          <div className="card-image">
            <img src={imageUrl} alt="" />
          </div>
          <div className="card-info">
            <h2 className="card-name">{name}</h2>
            <div className="card-stats">
              {level ? (
                <p className="card-level">
                  {type === "XYZ Monster" ? "Rank: " : "Level: "}
                  {level}
                </p>
              ) : (
                <></>
              )}
              {linkval ? (
                <p className="card-linkval">Link Val: {linkval}</p>
              ) : (
                <></>
              )}
              {scale ? <p className="card-scale">Scale: {scale}</p> : <></>}
              <p className="card-type">Type: {type}</p>
              <p className="card-attribute">Attribute: {attribute}</p>
              <p className="card-atk">Atk:{atk}</p>
              {def ? <p className="card-def">Def:{def}</p> : <></>}
            </div>
            <p className="card-desc">{desc}</p>
          </div>
        </div>
        {clicked ? (
          <div className="card-controls">
            <p>Cardmarket: £{card_prices[0].cardmarket_price}</p>
            <p>TCG Player: £{card_prices[0].tcgplayer_price}</p>
            <p>Ebay: £{card_prices[0].ebay_price}</p>
            <p>Amazon: £{card_prices[0].amazon_price}</p>
            <p>Cool Stuff Inc: £{card_prices[0].coolstuffinc_price}</p>
          </div>
        ) : (
          <></>
        )}
      </div>
    );
}

export default CardListing
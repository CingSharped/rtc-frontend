import React from 'react'
import { DeckInfo, DeckStats, CardList } from '../../components'
import "./style.css";

function DeckDisplay() {
  return (
    <div>
      <div className="deck-display">
        <section className="top">
          <DeckInfo />
          <div className="featured-card">
            <div className="card-art">Featured Card Art</div>
            <p>Flame Swordsman</p>
            <button className="edit-deck-button">
              + Add to my decks / Edit
            </button>
          </div>
          <DeckStats />
        </section>
        <section className="bottom">
          <div className="deck-actions">
            <button className="share-button">Share</button>
            <button className="download-button">Download YDK</button>
            <button className="share-link-button">Share Link</button>
          </div>
          <div className="comments">
            <p>Comments: 12</p>
          </div>
        </section>
        <section>
          <CardList />
        </section>
      </div>
    </div>
  );
}

export default DeckDisplay
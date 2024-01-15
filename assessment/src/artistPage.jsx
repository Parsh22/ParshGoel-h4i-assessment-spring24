import React from "react";

import "./artistPage.css";
import "./artistPage.css";

const ArtistPage = ({ artist }) => {
  return (
    <div className="artist-container">
      <div className="artist-card">
        <h2 className="artist-name">{artist.name}</h2>
        <p className="artist-minutes">
          Minutes spent listening: {artist.minutes}
        </p>
        <div className="artist-image-div">
          <img src={artist.image_src} className="artist-image"></img>
        </div>
        <div className="artist-top-songs">
          <h3>Top Songs:</h3>
          <ul>
            {artist.songs.map((song, index) => (
              <li key={index}>{song}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="navigation">
        <div className="nav-arrow left-arrow">←</div>
        <div className="nav-arrow right-arrow">→</div>
      </div> */}
    </div>
  );
};

export default ArtistPage;

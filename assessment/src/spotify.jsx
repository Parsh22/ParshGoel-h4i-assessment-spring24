import React, { useState } from "react";

import artists from "./artists.jsx";
import "./spotify.css";
import ArtistPage from "./artistPage";

const Spotify = (props) => {
  const [currArtist, setCurrArtist] = useState(0);

  const handleNextArtist = () => {
    setCurrArtist((prevArtist) => (prevArtist + 1) % artists.length);
  };

  const handlePrevArtist = () => {
    setCurrArtist(
      (prevArtist) => (prevArtist - 1 + artists.length) % artists.length
    );
  };

  const curr = artists[currArtist];

  return (
    <div className="spotify-app">
      <div className="nav-arrows">
        <button className="nav-arrow left-arrow" onClick={handlePrevArtist}>
          &#8249;
        </button>
        <button className="nav-arrow right-arrow" onClick={handleNextArtist}>
          &#8250;
        </button>
      </div>
      <ArtistPage artist={curr} />
    </div>
  );
};

export default Spotify;

import React from "react";
import MacWindow from "./MacWindow";
import "./spotify.scss";

const Spotify = () => {
  return (
    <MacWindow>
      <div className="spotify-window">
        <iframe
          src="https://open.spotify.com/embed/track/0J6YQ9KDwmnwD1sboA8UPZ?utm_source=generator"
          width="300"
          height="380"
          border-radius="12px"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;

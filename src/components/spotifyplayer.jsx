import React, {useState} from 'react';
import './spotifyplayer.css';

const Player = () => {
    const [expand, setExpand] = useState(true);
    const playerClass = expand ? "expanded-player" : "mini-player";
    const arrowClass = expand ? "mini-arrow" : "expand-arrow";

    const spotifyWidth = "300";
    const spotifyHeight = "300";
    const spotifyAlbumID = "5mZ4fryjWGX8dw1NVygHdd";
    const spotifyAlbumURI = `https://open.spotify.com/embed/playlist/${spotifyAlbumID}`;
    const getSpotifyPlayer = () => {
        return (
            // eslint-disable-next-line jsx-a11y/iframe-has-title
            <iframe
                src={spotifyAlbumURI}
                width={spotifyWidth}
                height={spotifyHeight}
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
            >
            </iframe>
        );
    }

    return (
        <div className="Music">
            <div>
                <label
                    className={`arrow ${arrowClass}`}
                    onClick={() => setExpand(!expand)}
                >
                </label>
            </div>
            <div className={`player ${playerClass}`}>
                {getSpotifyPlayer()}
            </div>
        </div>
    );
}

export default Player;

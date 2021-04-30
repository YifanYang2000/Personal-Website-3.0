/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './navbar.css';

function Navbar() {
    const spotifyWidth = "300";
    const spotifyHeight = "80";
    const spotifyAlbumURI = "https://open.spotify.com/embed/playlist/02OndpKWhBJfgkLAnIAVXp";
    const getSpotifyPlayer = () => {
        return (
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
        <div className="Navbar">
            <div className='logo'>
                <a href="yifanyang.ca">YIFAN<br/><span>YANG</span></a>
            </div>
            <div>
                <ul className='categories-list'>
                    <li><span className='categories'>.skills( )</span></li>
                    <li><span className='categories'>.portfolio( )</span></li>
                    <li><span className='categories'>.experience( )</span></li>
                    <li><span className='categories'>.contact( )</span></li>
                </ul>
            </div>
            <div className='music'>
                {getSpotifyPlayer()}
            </div>
        </div>
    );
}

export default Navbar;
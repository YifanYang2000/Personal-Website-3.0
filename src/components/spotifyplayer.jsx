import './spotifyplayer.css';

const Player = () => {
    const spotifyWidth = "300";
    const spotifyHeight = "300";
    const spotifyAlbumID = "2IUxd871Ji58B68jQYagwz";
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
        <div className="Player">
            <div className='playerlength'>
                {getSpotifyPlayer()}
            </div>
        </div>
    );
}

export default Player;

import React, { useState, useEffect } from 'react';
import '../../css/partial/nowplaying.css';
import Record from '../../media/images/record.png';

const LASTFM_API_KEY = process.env.REACT_APP_LASTFM_API_KEY;

function NowPlaying() {
    const [playingTracklist, setPlayingTracklist] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=inkvoiid&api_key=${LASTFM_API_KEY}&format=json&limit=5`);
            const data = await response.json();
            setPlayingTracklist(data.recenttracks.track);
        };
        fetchData();
    }, []);

    return (
        <div className="now-playing">
            <h1>What is inkvoiid listening to?</h1>
            
                <div width="auto">
                    {playingTracklist.map((track, index) => (
                        // Add the "now-playing" class to the track that is currently playing
                        <div className={track["@attr"] && track["@attr"].nowplaying === "true" ? "nowplaying track" : "track"} key={index}>
                        <div className='trackimages'>
                            <img className='trackcover' src={track.image[2]["#text"]} width="75px" alt={track.name} />
                            {track["@attr"] && track["@attr"].nowplaying === "true" ? (
                            <img className='spinningrecord' src={Record} width="70px" height="70px" alt="Record" />) : ("")}
                        </div>

                        <div className="trackinfo" key={index}>
                                <p className='trackname'>{track.name} - {track.artist["#text"]}</p>

                                {track["@attr"] && track["@attr"].nowplaying === "true" ? (
                                    <span className='trackplaydate'>Now Playing</span>
                                ) : (
                                    <i className='trackplaydate'>Played {track.date["#text"]}</i>
                                )}
                        </div>
                    </div>
                    ))}
                </div>
        </div>
    );
}

export default NowPlaying;
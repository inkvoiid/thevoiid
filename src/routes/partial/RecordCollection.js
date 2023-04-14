import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/recordcollection.css';
import NoCover from '../../media/images/nocover.png';

const DISCOGS_API_KEY = process.env.REACT_APP_DISCOGS_API_KEY;
const DISCOGS_API_SECRET = process.env.REACT_APP_DISCOGS_API_SECRET;
const LASTFM_API_KEY = process.env.REACT_APP_LASTFM_API_KEY;


function RecordCollection() {
    const [collection, setCollection] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(
          "https://api.discogs.com/users/inkvoiid/collection/folders/0/releases?per_page=250",
          {
            headers: {
                Authorization: `Discogs key=${DISCOGS_API_KEY}, secret=${DISCOGS_API_SECRET}`,
            },
          }
        );
        
        const collectionData = await Promise.all(response.data.releases.map(async (release) => {
            const album = {
              id: release.id,
              title: release.basic_information.title,
              artist: release.basic_information.artists[0].name,
              year: release.basic_information.year,
              image: release.basic_information.thumb,
            };

            if(album.artist === "Wings (2)") album.artist = "Wings";
    
            try {
                // Fetch album image from Last.fm API
                const lastfmResponse = await axios.get(
                  `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${LASTFM_API_KEY}&artist=${encodeURIComponent(
                    album.artist
                  )}&album=${encodeURIComponent(album.title)}&format=json`
                );
    
                const image =
                  lastfmResponse.data.album && lastfmResponse.data.album.image
                    ? lastfmResponse.data.album.image.find(
                        (image) => image.size === ""
                      )["#text"] || ""
                    : "";
    
                if(image !== "") album.image = image;
              } catch (error) {
                console.log("Error fetching last.fm album image for", album.title);
              }
              if(album.image === "") album.image = NoCover;
    
            return album;
          }));
    
          setCollection(collectionData);
        };
    
        fetchData();
      }, []);

  return (
    <div className="record-collection inner-container">
      {collection.map((album) => (
        <div className="record" key={album.id} style={{backgroundImage:`url(${album.image})`}}>
            <div className="record-info">
            <h2 className="title">{album.title}</h2>
            <p className="artist year">{album.artist} ({album.year})</p>
            </div>
        </div>
      ))}
    </div>
  );
}

export default RecordCollection;
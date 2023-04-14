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

      // Sort the filtered collection by artist name and album name
      collection.sort((a, b) => {
        if (a.artist < b.artist) {
          return -1;
        }
        if (a.artist > b.artist) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });

      const beatlesRecords = [];

      // Remove records from John Lennon, Paul McCartney, George Harrison, Ringo Starr, The Beatles, Traveling Wilburys, and Wings
      const filteredCollection = collection.filter((album) => {
        if (
          album.artist === "John Lennon" ||
          album.artist === "Paul McCartney" ||
          album.artist === "George Harrison" ||
          album.artist === "Ringo Starr" ||
          album.artist === "The Beatles" ||
          album.artist === "Traveling Wilburys" ||
          album.artist === "Wings"
        ) {
          beatlesRecords.push(album);
          return false;
        }
        return true;
      });

      const chunkSize = 25;
      const chunkedCollection = [];

      for (let i = 0; i < filteredCollection.length; i += chunkSize) {
        chunkedCollection.push(filteredCollection.slice(i, i + chunkSize));
      }
  
      return (
        <div>
        <h2 className='underline'>Beatles Collection</h2>
          <RecordShelf style={{marginBlock:"1rem"}} data={beatlesRecords} />

          {chunkedCollection.map((chunk, index) => (
            
            <div>
            <h2 className='underline'>Shelf {index+1}</h2>
            <RecordShelf style={{marginBlock:"1rem"}} key={index} data={chunk} />
            </div>
          ))}
        </div>
      );
}

function RecordShelf({ data }) {
  return (
    <div className="record-collection">
      {data.map((album) => (
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
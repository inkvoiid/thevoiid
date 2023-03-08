import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Link } from 'react-router-dom';
import TitleBackground from './media/images/title-background.png';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import './css/main.css';
import Navbar from "./Navbar";
import Voiidpack from "./Voiidpack";
import Photography from "./Photography";
import Music from "./Music";

import Profpic from './media/images/profpic.jpg';

function App() 
{
  return (
    <div style={{backgroundImage: "url(" + TitleBackground + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPositionY: "50%"}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Voiidpack" element={<Voiidpack />} />
          <Route path="/Photography" element={<Photography />} />
          <Route path="/Music" element={<Music />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <main>
      <div style={{color: "white", padding: 20, textAlign: 'right', height: "65vh"}}>
        <h1 style={{marginBottom: "0", paddingBottom: "0", fontSize: "10rem"}}>the voiid.</h1>
        <p style={{marginTop: "-2rem", marginRight: "3rem", paddingTop: "0", fontSize: "4vh", opacity: "75%"}}>by inkvoiid</p>
      </div>
    </main>
  );
}

export default App;

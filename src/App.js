import {BrowserRouter, Routes, Route} from "react-router-dom";
import TwitterIcon from './media/images/icons/twitter.svg';
import GitHubIcon from './media/images/icons/github.svg';

import './css/main.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Voiidpack from "./Voiidpack";
import Photography from "./Photography";
import Music from "./Music";
import MinecraftWorlds from "./MinecraftWorlds";

function App() 
{
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Voiidpack" element={<Voiidpack />} />
          <Route path="/Photography" element={<Photography />} />
          <Route path="/MinecraftWorlds" element={<MinecraftWorlds />} />
          <Route path="/Music" element={<Music />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <main>
      <div className="title">
        <h1 className="titleText">the voiid.</h1>
        <p className="titleSubtext">by inkvoiid</p>

        <br/>
        <h2>Software Developer, Web Designer, Guitarist</h2>
        <br/>

        <h3 className="center">Stalk me, why don't ya?</h3>
        <ul className="titleLinkList">
          <li><a href="https://twitter.com/inkvoiid" target="_blank" rel="noreferrer"><img src={TwitterIcon} width="50px" alt="twitter"/><br/>Twitter</a></li>
          <li><a href="https://github.com/inkvoiid" target="_blank" rel="noreferrer"><img src={GitHubIcon} width="50px" alt="github"/><br/>GitHub</a></li>
        </ul>
      </div>

      <div className="container">
        <h1>Yo bitch</h1>
        <p>Yeah, you heard me. You a bitch.</p>
      </div>
      <div className="container" style={{backgroundColor: "#6F8583"}}>
        <br></br>
      </div>
      <div className="container">
        <br></br>
      </div>
      <div className="container" style={{backgroundColor: "#5FB4D1"}}>
        <br></br>
      </div>
      <div className="container" style={{backgroundColor: "whitesmoke"}}>
        <h1>Bugger it</h1>
      </div>
    </main>
  );
}

export default App;

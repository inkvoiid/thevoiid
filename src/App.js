import {BrowserRouter, Routes, Route} from "react-router-dom";
import TwitterIcon from './media/images/icons/twitter.svg';
import GitHubIcon from './media/images/icons/github.svg';

import './css/main.css';
import Navbar from "./routes/partial/Navbar";
import Footer from "./routes/partial/Footer";
import VOIIDPack from "./routes/VOIIDPack";
import Photography from "./routes/Photography";
import Music from "./routes/Music";
import VOIIDOS from "./routes/VOIIDOS";
import MinecraftWorlds from "./routes/MinecraftWorlds";
import PageNotFound from "./routes/PageNotFound";

function App() 
{
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/VOIIDPack" element={<VOIIDPack />} />
          <Route path="/Photography" element={<Photography />} />
          <Route path="/MinecraftWorlds" element={<MinecraftWorlds />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/VOIIDOS" element={<VOIIDOS />} />
          <Route path="*" element={<PageNotFound />} />
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

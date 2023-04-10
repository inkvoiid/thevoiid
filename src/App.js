import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import TwitterIcon from './media/images/icons/twitter.svg';
import GitHubIcon from './media/images/icons/github.svg';
import AndMyRookPreview from './media/images/home/andmyrook-preview.png';
import VoiidOSPreview from './media/images/home/voiidos-preview.png';
import VOIIDPackPreview from './media/images/home/voiidpack-preview.png';

import './css/main.css';
import Navbar from "./routes/partial/Navbar";
import Footer from "./routes/partial/Footer";
import VOIIDPack from "./routes/projects/VOIIDPack";
import Photography from "./routes/Photography";
import Music from "./routes/Music";
import VoiidOS from "./routes/projects/VoiidOS";
import MinecraftWorlds from "./routes/MinecraftWorlds";
import PageNotFound from "./routes/PageNotFound";
import AndMyRook from "./routes/projects/AndMyRook";

function App() 
{
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects/AndMyRook" element={<AndMyRook />} />
          <Route path="/projects/VoiidOS" element={<VoiidOS />} />
          <Route path="/projects/VOIIDPack" element={<VOIIDPack />} />
          <Route path="/Photography" element={<Photography />} />
          <Route path="/MinecraftWorlds" element={<MinecraftWorlds />} />
          <Route path="/Music" element={<Music />} />
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

      <article className="container">
        <h1>Yo bitch</h1>
        <p>Yeah, you heard me. You a bitch.</p>
      </article>
      <article className="container outer-container container-green">
        <h1>Projects</h1>
        <section className="inner-container">
        <p>You can find my most popular projects on this site, such as my Resource Pack <Link to="/projects/voiidpack">VOIIDPack</Link> and my Chess-like game <Link to="/projects/andmyrook">And My Rook!</Link></p>
        <div style={{display:"flex",flex:"1",gap:"1rem"}}>
          <Link to="/projects/andmyrook.js" style={{backgroundColor:"transparent"}}>
            <div className="container outer-container">
              <img src={AndMyRookPreview} alt="And My Rook Preview" width="100%"/>
              <h2 style={{color:"var(--text-color)"}}>And My Rook!</h2>
            </div>
          </Link>
          <Link to="/projects/voiidos.js" style={{backgroundColor:"transparent"}}>
            <div className="container outer-container">
              <img src={VoiidOSPreview} alt="VoiidOS Preview" width="100%"/>
              <h2 style={{color:"var(--text-color)"}}>VoiidOS</h2>
            </div>
          </Link>
          <Link to="/projects/voiidpack.js" style={{backgroundColor:"transparent"}}>
            <div className="container outer-container">
              <img src={VOIIDPackPreview} alt="VOIIDPack Preview" width="100%"/>
              <h2 style={{color:"var(--text-color)"}}>VOIIDPack</h2>
            </div>
          </Link>
        </div>
        
        </section>
      </article>
      <article className="container">
        <br></br>
      </article>
      <article className="container" style={{backgroundColor: "#5FB4D1"}}>
        <br></br>
      </article>
      <article className="container" style={{backgroundColor: "whitesmoke"}}>
        <h1>Bugger it</h1>
      </article>
    </main>
  );
}

export default App;

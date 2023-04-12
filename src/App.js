import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import TwitterIcon from './media/images/icons/twitter.svg';
import GitHubIcon from './media/images/icons/github.svg';
import AndMyRookPreview from './media/images/home/andmyrook-preview.png';
import LegoIndyPuzzlePreview from './media/images/home/legoindypuzzle-preview.png';
import MCPetListPreview from './media/images/home/mcpetlist-preview.png';
import VoiidOSPreview from './media/images/home/voiidos-preview.png';
import VOIIDPackPreview from './media/images/home/voiidpack-preview.png';

import './css/main.css';
import './css/home.css';

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
        <div className="projects-grid">
          <Link to="/projects/andmyrook" style={{backgroundColor:"transparent"}}>
            <div className="container container-green no-m no-p" style={{padding:"1rem"}} >
              <div>
                <img src={AndMyRookPreview} alt="And My Rook Preview" width="100%"/>
              </div>
              <h2>And My Rook!</h2>
              <p>My Chess-like game about leveling up your Chess pieces.</p>
            </div>
          </Link>

          <Link to="/projects/legoindypuzzle" style={{backgroundColor:"transparent"}}>
            <div className="container container-green no-m no-p" style={{padding:"1rem"}}>
              <div>
                <img src={LegoIndyPuzzlePreview} alt="Lego Indy Puzzle Preview" width="100%"/>
              </div>
              <h2>LEGO Indy Puzzle</h2>
              <p>A recreation of the LEGO Indiana Jones Hieroglyphics puzzle.</p>
            </div>
          </Link>

          <Link to="/projects/mcpetlist" style={{backgroundColor:"transparent"}}>
            <div className="container container-green no-m no-p" style={{padding:"1rem"}}>
              <div>
                <img src={MCPetListPreview} alt="MCPetList Preview" width="100%"/>
              </div>
              <h2>MCPetList</h2>
              <p>A program to categorise your Minecraft pets.</p>
            </div>
          </Link>

          <Link to="/projects/voiidos" style={{backgroundColor:"transparent"}}>
            <div className="container container-green no-m no-p" style={{padding:"1rem"}}>
              <div>
                <img src={VoiidOSPreview} alt="VoiidOS Preview" width="100%"/>
              </div>
              <h2>VoiidOS</h2>
              <p>My CLI style "OS".</p>
            </div>
          </Link>

          <Link to="/projects/voiidpack" style={{backgroundColor:"transparent"}}>
            <div className="container container-green no-m no-p" style={{padding:"1rem"}}>
              <div>
                <img src={VOIIDPackPreview} alt="VOIIDPack Preview" width="100%"/>
              </div>
              <h2>VOIIDPack</h2>
              <p>My Minecraft Resource Pack</p>
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

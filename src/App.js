import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/main.css';
import Navbar from "./Navbar";
import Photography from "./Photography";

import Profpic from './media/images/profpic.jpg';

function App() 
{
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Voiidpack" element={<Home />} />
          <Route path="/Photography" element={<Photography />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <main>

      <div className="row">
        <div className="col" style={{flex: 3, marginTop:"5%"}}>
      <article className="rainbowBorder1" style={{marginTop: 0}}>
          <p class="tabTitle">main.txt</p>
          <h1>Welcome to <span title="pogpogpogpogpog"><u>the voiid!</u></span></h1>
          <p>inkvoiid's personal website, entirely self-designed and coded.</p>
			</article>

      <article className="rainbowBorder4" style={{marginTop: ""}}>
          <p class="tabTitle">asdf.json</p>
          <h1>Things you can find on here</h1>
          <p>On this site, you can find: my resourcepack Voiidpack, now known as <a href="/voiidpack">voopack</a>, my <a href="/photography">photography</a> and my <a href="/music">music collection</a>.</p>
			</article>
      </div>

      <article className="col rainbowBorder3">
        <p class="tabTitle">inkvoiid.nfo</p>
        <h1><u>inkvoiid</u></h1>
        <img className="center" src={Profpic} alt="inkvoiid Profile Pic" width="75%"></img>
        <p style={{textAlign: "center"}}>Artist, Guitarist, Programmer</p>
        <p style={{textAlign: "center"}}><a href="https://twitter.com/inkvoiid?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="true">Follow @inkvoiid</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></p>
      </article>
      </div>
    </main>
  );
}

export default App;

import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/main.css';
import Navbar from "./Navbar";

function App() 
{
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Voo" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <main className="main">

      <article>
          <p class="tabTitle">main.txt</p>
          <h1>Welcome to <span title="pogpogpogpogpog"><u>the voiid!</u></span></h1>
          <p>inkvoiid's personal website, entirely self-designed and coded.</p>
			</article>

    </main>
  );
}

export default App;

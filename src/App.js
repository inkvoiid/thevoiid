import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import AndMyRookPreview from "./media/images/home/andmyrook-preview.png";
import ClientServerPreview from "./media/images/home/clientserver-preview.png";
import LegoIndyPuzzlePreview from "./media/images/home/legoindypuzzle-preview.png";
import MCPetListPreview from "./media/images/home/mcpetlist-preview.png";
import MOEBILEPreview from "./media/images/home/moebile-preview.png";
import OurKitchenPreview from "./media/images/home/ourkitchen-preview.png";
import StarWarsPreview from "./media/images/home/starwars-preview.png";
import VoiidOSPreview from "./media/images/home/voiidos-preview.png";
import VOIIDPackPreview from "./media/images/home/voiidpack-preview.png";

import "./css/main.css";
import "./css/home.css";

import Navbar from "./routes/partial/Navbar";
import Footer from "./routes/partial/Footer";
import VOIIDPack from "./routes/projects/VOIIDPack";
import Photography from "./routes/Photography";
import Music from "./routes/Music";
import About from "./routes/About";
import VoiidOS from "./routes/projects/VoiidOS";
import MinecraftWorlds from "./routes/MinecraftWorlds";
import PageNotFound from "./routes/PageNotFound";
import AndMyRook from "./routes/projects/AndMyRook";
import ProjectPreview from "./routes/partial/ProjectPreview";

function App() {
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
          <Route path="/About" element={<About />} />
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

        <br />
        <h2 style={{ fontSize: "2em", marginBottom: "0" }}>
          Hey, I am{" "}
          <a
            style={{ color: "var(--textcolor)" }}
            href="https://www.linkedin.com/in/kaleb-dickson/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Kaleb Dickson
          </a>
        </h2>
        <p
          style={{
            fontStyle: "italic",
            marginTop: "0.5em",
            color: "gainsboro",
          }}
        >
          I'm a software developer, web developer and guitarist.
        </p>
        <Link className="button" to="/about">
          About Me
        </Link>

        <br />
        <br />
      </div>

      <article className="container">
        <h1>Welcome</h1>
        <p>
          Welcome to my small corner of the internet. This is where I
          conglomerate everything I work on so I can display it in one place.
        </p>
      </article>
      <article className="container outer-container container-green">
        <h1>Projects</h1>
        <section className="inner-container">
          <p>
            You can find my most popular projects on this site, such as my
            Resource Pack <Link to="/projects/voiidpack">VOIIDPack</Link> and my
            Chess-like game <Link to="/projects/andmyrook">And My Rook!</Link>
          </p>
          <p>Note: Projects marked with a ⚠️ don't have a page yet.</p>
          <div className="projects-grid">
            <ProjectPreview
              url={"/projects/andmyrook"}
              image={AndMyRookPreview}
              title={"And My Rook!"}
              description={
                "My Chess-like game about leveling up your Chess pieces."
              }
            />

            <ProjectPreview
              url={"/"}
              image={ClientServerPreview}
              title={"⚠️Client Server Web Development Site"}
              description={
                "A site that explores single page apps and javascript frameworks."
              }
            />

            <ProjectPreview
              url={"/"}
              image={LegoIndyPuzzlePreview}
              title={"⚠️LEGO Indy Puzzle"}
              description={
                "A recreation of the LEGO Indiana Jones Hieroglyphics puzzle."
              }
            />

            <ProjectPreview
              url={"/"}
              image={MCPetListPreview}
              title={"⚠️MCPetList"}
              description={"A program to categorise your Minecraft pets."}
            />

            <ProjectPreview
              url={"/"}
              image={MOEBILEPreview}
              title={"⚠️MOEBILE"}
              description={"A mock phone app for Moe's Bar."}
            />

            <ProjectPreview
              url={"/"}
              image={OurKitchenPreview}
              title={"⚠️Our Kitchen"}
              description={"A web app to upload and view family recipes."}
            />

            <ProjectPreview
              url={"/"}
              image={StarWarsPreview}
              title={"⚠️Star Wars Movie Site"}
              description={
                "A dynamic site that displays info about the Star Wars movies."
              }
            />

            <ProjectPreview
              url={"/projects/voiidos"}
              image={VoiidOSPreview}
              title={"VoiidOS"}
              description={'My CLI style "OS".'}
            />

            <ProjectPreview
              url={"/projects/voiidpack"}
              image={VOIIDPackPreview}
              title={"VOIIDPack"}
              description={"My Minecraft Resource Pack"}
            />
          </div>
        </section>
      </article>

      <article className="container">
        <h1>How this site was made.</h1>
        <p>
          You wouldn't be seeing this site if it weren't for these technologies:
        </p>
        <div className="left">
          <h3>React</h3>
          <p>
            It's a Javascript framework which allows me to split areas of my
            site in modules, make the navigation seem instantanious and import
            Node.js packages for me to utilise on this site.
          </p>

          <h3>GitHub</h3>
          <p>
            It allows me to push my code to an online repository, where all the
            changes are staged, the code can be viewed by people, the repo can
            be forked by someone and if I ever wanted to, I could let multiple
            people push to it.
          </p>

          <h3>Netlify</h3>
          <p>
            It's a such a great site for deploying sites. I've been using it
            since like 2017 when it was called BitBalloon and I would zip up my
            HTML site and upload it on there to deploy new changes. Nowadays, I
            have deploys linked to a GitHub repo, so any time it gets a new
            push, Netlify builds the latest update.
          </p>
        </div>
      </article>
    </main>
  );
}

export default App;

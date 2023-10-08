import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function About() {
  return (
    <main>
      <div className="page-title underline">
        <h1>About Me</h1>
      </div>

      <article>
        <section id="About Me" className="container">
          <h2>My name is Kaleb Dickson and I am a developer.</h2>
          <p>
            I'm 20 years old and a student at Toi Ohomai Institute of
            Technology, studying a Bachelor of Applied Information Technology.
          </p>
          <p>
            I love building systems to organise information, that look good
            while doing it. I'm experienced in C#, UWP, React, Angular and Unity
            development.
          </p>
          <p>
            Some of my most proud work I've done would be my{" "}
            <Link>Angular recipe app</Link>, my{" "}
            <Link to="">Star Wars EJS site</Link>, which just looks nice, and my
            UWP app in the style of a <Link>phone app for Moe's Bar</Link>.
          </p>
        </section>

        <div className="titleLinkList">
          <a
            href="https://github.com/inkvoiid"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
            <br />
            Personal
            <br />
            GitHub
          </a>
          <a
            href="https://github.com/30050248Kaleb"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
            <br />
            Student
            <br />
            GitHub
          </a>
        </div>
      </article>
    </main>
  );
}

export default About;

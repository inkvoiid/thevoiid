import React from "react";
import ScrollSpy from "react-ui-scrollspy";
import '@splidejs/react-splide/css';
import "../css/minecraftworlds.css"

import minecraftServers from "../data/minecraft-servers.json";
import ServerEntry from "./partial/ServerEntry";

function getYearFromJsonDate(jsonDate) {
	const date = new Date(jsonDate.split(' ').pop());
	console.log(date)
	const year = date.getFullYear();
	console.log(year)
	return year;
  }
  

function MinecraftWorlds(){

	const serversByYear = {};
  minecraftServers.data.forEach((server) => {
    const year = getYearFromJsonDate(server.datecreated);
    if (!serversByYear[year]) {
      serversByYear[year] = [];
    }
    serversByYear[year].push(server);
  });

  const yearHeadings = Object.keys(serversByYear).sort();

	return (
	<main>
		<div className="scrollspyNav">
        <ul>
          {yearHeadings.map((year) => (
            <li key={year}>
              <a data-to-scrollspy-id={`mc${year}`} href={`#mc${year}`}>
                {year}
              </a>
            </li>
          ))}
        </ul>
      </div>

		<div className="page-title underline">
        	<h1>Minecraft Worlds</h1>
		</div>

		<section className="container">
			<p>View some of the Minecraft server worlds I've catalogued. Who knows? Perhaps you might have taken part in some of them.</p>
			<h2>Filters</h2>
			<p>
				<span className="playertag">DumbleDog_</span> 
				<span className="playertag">inkvoiid</span> 
				<span className="playertag">WispyDutchess</span>
			</p>
		</section>
		<ScrollSpy>
        {yearHeadings.map((year) => (
          <div key={year}>
            <h1
              id={`mc${year}`}
              className="underline"
              style={{ textAlign: "center", color: "white", textDecorationColor: "steelblue" }}
            >
              {year}
            </h1>
            {serversByYear[year].map((server, idx) => (
              <ServerEntry key={idx} server={server} />
            ))}
          </div>
        ))}
      </ScrollSpy>
	</main>
	  );
}

export default MinecraftWorlds;
import ScrollSpy from "react-ui-scrollspy";
import '@splidejs/react-splide/css';
import Panorama from "./partial/Panorama";
import DamonBase from "../media/images/minecraftworlds/panoramas/damonskybase.jpg";
import ZachHouse from "../media/images/minecraftworlds/panoramas/zachhouse.jpg";



function MinecraftWorlds(){
	return (
	<main>
		<div className="scrollspyNav">
			<ul>
				<li><a data-to-scrollspy-id="mc2017" href="#mc2017">2017</a></li>
				<li><a data-to-scrollspy-id="mc2018" href="#mc2018">2018</a></li>
				<li><a data-to-scrollspy-id="mc2019" href="#mc2019">2019</a></li>
				<li><a data-to-scrollspy-id="mc2020" href="#mc2020">2020</a></li>
				<li><a data-to-scrollspy-id="mc2021" href="#mc2021">2021</a></li>
				<li><a data-to-scrollspy-id="mc2022" href="#mc2022">2022</a></li>
				<li><a data-to-scrollspy-id="mc2023" href="#mc2023">2023</a></li>
			</ul>
		</div>

		<div className="page-title underline">
        	<h1>Minecraft Worlds</h1>
		</div>

		<div className="container">
		<p>
			View some of the Minecraft server worlds I've catalogued. Who knows? Perhaps you might have taken part in some of them.
		</p>
		</div>
		<ScrollSpy>
			<h1 id="mc2017" className="underline" style={{textAlign:"center",color:"white", textDecorationColor:"steelblue"}}>2017</h1>

			<h1 id="mc2018" style={{textAlign:"center",color:"white"}}>2018</h1>

			<h1 id="mc2019" style={{textAlign:"center",color:"white"}}>2019</h1>

			<h1 id="mc2020" style={{textAlign:"center",color:"white"}}>2020</h1>

			<div className="container mcworldcontainer">
				<div>
					
				</div>
				<div>
					<h2>Parasite Server (August 2020)</h2>
					<ul>
						<li>Server Owner: inkvoiid</li>
						<li>Date Started: August 2020</li>
						<li>Date Ended: September 2020</li>
					</ul>
				</div>
			</div>

			<h1 id="mc2021" style={{textAlign:"center",color:"white"}}>2021</h1>

			<h1 id="mc2022" style={{textAlign:"center",color:"white"}}>2022</h1>

			<h1 id="mc2023" style={{textAlign:"center",color:"white"}}>2023</h1>

			<div className="container">
				
				<Panorama src={DamonBase} />
				<Panorama src={ZachHouse} />
			</div>
		</ScrollSpy>
	</main>
	  );
}

export default MinecraftWorlds;
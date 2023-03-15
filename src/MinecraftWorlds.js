import DamonBase from "./media/images/minecraftworlds/damonskybase.png";
import Panorama from "./Panorama";



function MinecraftWorlds(){
	return (
	<main>

		<div id="firstDiv" style={{textAlign: "center"}}>
        	<h1>Minecraft Worlds</h1>
			<p>View some screenshots in 360 degrees.</p>

		</div>

		<div className="center" style={{padding: "1rem", maxWidth: "100vh"}}>
			<Panorama src={DamonBase} />
		</div>
	</main>
	  );
}

export default MinecraftWorlds;
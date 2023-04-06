// eslint-disable-next-line no-unused-vars
import tiltJquery from "tilt.js";
import jQuery from "jquery";
import CameraPic from "../media/images/camera.jpg"

const images = require.context("../media/images/gallery", false)

const imagePaths = images.keys();

function Photography(){
	return (
	<main>
		<div className="page-title underline">
        	<h1>Photography</h1>
		</div>
		<article className="column-layout container">
			<div>
				<img className="rounded" src={CameraPic} width="100%" alt="My father's Canon EOS550D"/>
			</div>
			<div style={{textAlign:"center"}}>
				<p>I garnered a passion in photography when I opted to take it as a subject in high school in 2019. Most, if not all of these photos have been taken on my father's Canon EOS550D.</p>
				<p>The photography classes taught me all about aperture, shutter speed, leading lines and the rule of thirds. You may be able to tell I like to do some digital manipulation.</p>
				<p>Take a look at some snaps I've done in my lifetime.</p>
			</div>
		</article>

		<div className="gallery">			
			{imagePaths.map((path, index) => (
			<div data-tilt className="polaroid">
				<img src={images(path)} alt={images(path)}/>
				<p>{images.keys()[index].split('/').pop().replace(/\.[^/.]+$/, "")}</p>
			</div>))}
		</div>
	</main>
	  );
}

export default Photography;
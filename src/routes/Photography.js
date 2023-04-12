import Tilt from "react-vanilla-tilt";
import '../css/photography.css';
import CameraPic from "../media/images/camera.jpg"

const mainImagesPath = require.context("../media/images/gallery", false)
const mainImages = mainImagesPath.keys();

const bakingImagesPath = require.context("../media/images/gallery/baking", false)
const bakingImages = bakingImagesPath.keys();

const japanImagesPath = require.context("../media/images/gallery/japan", false)
const japanImages = japanImagesPath.keys();

function Photography(){
	return (
	<main>
		<div className="page-title underline">
        	<h1>Photography</h1>
		</div>
		<article>
			<section className="photography-intro container">
				<div>
					<img className="rounded" src={CameraPic} width="100%" alt="My father's Canon EOS550D"/>
				</div>
				<div className="left" style={{paddingInline:"2%"}}>
					<p>I garnered a passion in photography when I opted to take it as a subject in high school in 2019. Most, if not all of these photos have been taken on my father's Canon EOS550D.</p>
					<p>The photography classes taught me all about aperture, shutter speed, leading lines and the rule of thirds. You may be able to tell I like to do some digital manipulation.</p>
					<p>Take a look at <a href="#Gallery">some snaps I've done in my lifetime</a>, some <a href="#Baking">photos of my baking</a>, or <a href="#Japan">my dad's photos from Japan</a>.</p>
				</div>
			</section>
	
			<section id="Gallery" className="container">
				<h1>Gallery</h1>
			</section>
			<section className="gallery">	
				{mainImages.map((path, index) => (
				<Tilt max="25" glare="true" max-glare="1" glare-prerender="true" style={{}} className="polaroid">
						<img src={mainImagesPath(path)} alt={mainImagesPath(path)}/>
						<p style={{zIndex:"20"}}>
							{mainImagesPath.keys()[index].split('/').pop().replace(/\.[^/.]+$/, "")}
						</p>
				</Tilt>
				))}
			</section>

			<section id="Baking" className="container">
				<h1>Baking Photos</h1>
			</section>
			<section className="gallery">
				{bakingImages.map((path, index) => (
				<Tilt max="25" glare="true" max-glare="1" glare-prerender="true" style={{}} className="polaroid">
						<img src={bakingImagesPath(path)} alt={bakingImagesPath(path)}/>
						<p style={{zIndex:"20"}}>
							{bakingImagesPath.keys()[index].split('/').pop().replace(/\.[^/.]+$/, "")}
						</p>
				</Tilt>
				))}
			</section>

			<section id="Japan" className="container">
				<h1>Dad's Japan Trip</h1>
			</section>
			<section className="gallery">
				{japanImages.map((path, index) => (
				<Tilt max="25" glare="true" max-glare="1" glare-prerender="true" style={{}} className="polaroid">
						<img src={japanImagesPath(path)} alt={japanImagesPath(path)}/>
						<p style={{zIndex:"20"}}>
							{japanImagesPath.keys()[index].split('/').pop().replace(/\.[^/.]+$/, "")}
						</p>
				</Tilt>
				))}
			</section>
		</article>
	</main>
	  );
}

export default Photography;
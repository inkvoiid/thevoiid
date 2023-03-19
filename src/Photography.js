// eslint-disable-next-line no-unused-vars
import tiltJquery from "tilt.js";

const images = require.context("./media/images/gallery", false)

const imagePaths = images.keys();

function Photography(){
	return (
	<main>
		<div className="page-title underline">
        	<h1>Photography</h1>
		</div>
		<div className="container">
			<p>Take a look at some snaps I've done in my lifetime.</p>
		</div>

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
const images = require.context("./media/images/gallery", false)

const imagePaths = images.keys();

function Photography(){
	return (
	<main>
		<div id="firstDiv" className="rainbowBorder2" style={{textAlign: "center"}}>
        	<h1>Photography</h1>
			<p>Take a look at some snaps I've done in my lifetime.</p>

		</div>

		<div>			
			{imagePaths.map((path, index) => (
			<div data-tilt className="paper">
				<img src={images(path)} alt={images(path)}/>
				<p>{images.keys()[index].split('/').pop()}</p>
			</div>
		))}</div>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/tilt.js/1.2.1/tilt.jquery.min.js"></script> 
	</main>
	  );
}

export default Photography;
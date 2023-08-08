import NowPlaying from "./partial/NowPlaying";
import RecordCollection from "./partial/RecordCollection";

function Music(){
	return (
	<main>
			<div className="page-title underline">
				<h1>Music</h1>
			</div>
			
		<article>
			<section className="container left">
				<p>Welcome to the Music page! This is where you can check out my <a href="#Record-Collection">Record Collection</a> or my <a href="#Music-Gear">Music Gear</a>. Big fan of The Beatles and Peach Pit.</p>
			</section>

			<section className="container">
				<NowPlaying />
			</section>

			<section id="Record-Collection" className="container inner-container container-green">
				<h1>Record Collection</h1>
				<RecordCollection />
			</section>

			<section id="Music-Gear" className="container">
				<h1>Music Gear</h1>
				<div className="inner-container">
					<p>Coming soon...</p>
				</div>
			</section>
		</article>
	</main>
	  );
}

export default Music;
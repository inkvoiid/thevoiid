import Coverflow from "./partial/Coverflow";

const images = [
	'https://www.thebeatles.com/sites/default/files/styles/max_1300x1300/public/2021-06/Please%20Please%20Me.jpg',
	'https://www.thebeatles.com/sites/default/files/styles/max_1300x1300/public/2021-06/Please%20Please%20Me.jpg',
	'https://www.thebeatles.com/sites/default/files/styles/max_1300x1300/public/2021-06/Please%20Please%20Me.jpg',
  ];

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
				<h1>What is inkvoiid listening to?</h1>
				<p>Your Mother Should Know - The Beatles</p>
			</section>

			<section id="Record-Collection" className="container container-green">
				<h1>Record Collection</h1>
				<div className="inner-container">
					<Coverflow images={images}></Coverflow>
				</div>
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
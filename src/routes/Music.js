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
		<div className="container">
			<p>Big fan of The Beatles and Peach Pit. Own some records.</p>
		</div>

		<div className="container container-green">
		<h1>Record Collection</h1>
		<div className="inner-container"><Coverflow images={images}></Coverflow></div>
		</div>
	</main>
	  );
}

export default Music;
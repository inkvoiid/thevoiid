const AlbumCoverflow = ({images}) => {
  const handleWheel = (e) => {
    e.preventDefault();
  };

  return <div onWheel={handleWheel}>
<ul class="cards" id="cards">
    <li id="card_0">
        <img src="https://assets.codepen.io/89905/coverflow--Front-1024x1024.jpg" width="1200" height="1200" />
    </li>
    <li id="card_1">
        <img src="https://assets.codepen.io/89905/coverflow--A-Thousand-Clouds-Front-Cover-1024x1024.jpg" width="1200" height="1200" />
    </li>
    <li id="card_2">
        <img src="https://assets.codepen.io/89905/coverflow--Front-1024x1024.jpg" width="1200" height="1200" />
    </li>
    <li id="card_3">
        <img src="https://assets.codepen.io/89905/coverflow--A-Thousand-Clouds-Front-Cover-1024x1024.jpg" width="1200" height="1200" />
    </li>
    </ul>

    <script src="https://rawcdn.githack.com/flackr/scroll-timeline/637746fa559c3f9d01fcdaf2fcb7e649d18dfc33/dist/scroll-timeline.js"></script>
  </div>
}

export default AlbumCoverflow;
function AndMyRook() {
  return (
    <main>
      <div className="page-title underline">
        <h1>And My Rook!</h1>
        <a
          href="https://github.com/inkvoiid/ChessGame"
          className="button"
          target="_blank"
          rel="noreferrer"
        >
          Repository Link
        </a>
      </div>
      <div className="container left">
        <h2>About the game</h2>
        <p>
          <a href="https://github.com/inkvoiid/ChessGame">And My Rook!</a> is a
          Chess-like game I created in 2022 for my project in my 2nd year of my
          Applied I.T. degree. It combines the rules of Chess with a leveling up
          system, health bars, upgrades and more.
        </p>

        <h2>Basic Rules</h2>
        <ul>
          <li>
            The pieces start off made out of glass, which shatter in one hit.
          </li>
          <li>
            Pieces can be upgraded to be made out of wood, stone, iron and
            diamond.
          </li>
          <li>
            Each upgrade increases the health of the piece by 1, meaning a
            diamond piece has 5 health.
          </li>
          <li>
            Pieces can also be trained to have special abilities, which can
            modify where they can move.
          </li>
        </ul>
      </div>
    </main>
  );
}

export default AndMyRook;

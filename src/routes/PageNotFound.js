import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <main>
      <div className="page-title underline">
        <h1>Found Not Paged</h1>
      </div>
      <div className="container">
        <p>Big unfortunate</p>
        <Link to="/" className="button">
          Back to home
        </Link>
      </div>
    </main>
  );
}

export default PageNotFound;

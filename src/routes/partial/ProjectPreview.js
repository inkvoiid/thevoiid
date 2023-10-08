import React from "react";
import { Link } from "react-router-dom";

function ProjectPreview({ url, image, title, description }) {
  return (
    <Link
      to={url}
      className="project-preview"
      style={{ backgroundColor: "transparent" }}
    >
      <div>
        <img src={image} alt={title + " Preview"} width="100%" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </Link>
  );
}

export default ProjectPreview;

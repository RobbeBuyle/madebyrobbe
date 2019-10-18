import React from "react"
import { Link } from "gatsby"

const ProjectPreview = ({ slug, tags, title }) => {
  return (
    <article>
      <Link to={`/${slug}`}>
        <h3>{title}</h3>
      </Link>
      <p>{tags}</p>
    </article>
  )
}

export default ProjectPreview

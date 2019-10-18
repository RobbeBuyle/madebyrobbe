import React from "react"
import { Link } from "gatsby"

const ProjectPreview = ({ slug, desc, title }) => {
  return (
    <article>
      <Link to={`/${slug}`}>
        <h3>{title}</h3>
      </Link>
      <p>{desc}</p>
    </article>
  )
}

export default ProjectPreview

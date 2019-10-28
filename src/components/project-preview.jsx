import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import style from "./Project-preview.module.css"

const ProjectPreview = ({ slug, tags, title, imageData }) => {
  return (
    <Link to={`/${slug}`}>
      <article>
        <Image fluid={imageData} alt={title} />
        <h3 className={style.ppTitle}>{title}</h3>
        <p>{tags}</p>
      </article>
    </Link>
  )
}

export default ProjectPreview

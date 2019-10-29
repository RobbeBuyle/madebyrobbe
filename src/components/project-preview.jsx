import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styles from "./Project-preview.module.css"

const ProjectPreview = ({ slug, tags, title, imageData }) => {
  return (
    <Link to={`/${slug}`} className={styles.cardLink}>
      <article className={styles.projectCard}>
        <div className={styles.ppImgContainer}>
          <Image fluid={imageData} alt={title} className={styles.ppImg} />
        </div>

        <h3 className={styles.ppTitle}>{title}</h3>
        <p className={styles.ppTags}>{tags}</p>
      </article>
    </Link>
  )
}

export default ProjectPreview

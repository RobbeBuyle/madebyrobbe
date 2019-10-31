import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

import styles from "./Project.module.css"

const Project = ({
  title,
  tags,
  date,
  customer,
  tools,
  desc,
  link,
  imageData,
}) => {
  return (
    <>
      <Link to="/" className={styles.arrow}>
        Back to all projects
      </Link>
      <article className={styles.projectContainer}>
        <div className={styles.pImgContainer}>
          <Image fluid={imageData} className={styles.pImg} />
        </div>
        <h1 className={styles.pTitle}>{title}</h1>
        <p className={styles.pTags}>{tags}</p>
        <time className={styles.pDate}>{date}</time>
        <p className={styles.pTools}>{tools}</p>
        <p className={styles.pCustomer}>{customer}</p>
        <p className={styles.pDesc}>{desc}</p>
        <a href={link} className={styles.pLink}>
          visit project
        </a>
      </article>
    </>
  )
}

export default Project

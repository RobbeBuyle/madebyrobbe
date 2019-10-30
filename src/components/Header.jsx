import React from "react"
import styles from "./Header.module.css"

import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "pf_winter2019_crop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header className={styles.header}>
      <h1 className={styles.visualyHidden}>
        Robbe: digital designer/ developer
      </h1>
      <Img
        fluid={data.file.childImageSharp.fluid}
        className={styles.headerImg}
      />
      <div className={styles.chatBox}>
        <div className={styles.tag}>
          <p className={styles.txtBubbleRes}>
            Hey!
            <span role="img" aria-label="wave">
              {" "}
              👋{" "}
            </span>
            I'm Robbe.
          </p>
        </div>
        <div className={styles.tag}>
          <p className={styles.txtBubbleRes}>
            I'm a{" "}
            <strong className={styles.strong}>
              digital designer / developer
            </strong>{" "}
            ready to help shape the future.
          </p>
        </div>
        <div className={styles.tag_right}>
          {/* <p className={styles.txtBubbleSent}>contact</p> */}
          <a
            href="mailto:robbedoesstuff@gmail.com"
            className={styles.txtBubbleSent}
          >
            contact
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header

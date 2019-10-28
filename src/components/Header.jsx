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
    <header>
      <h1>Robbe: digital designer/ developer</h1>
      <div>
        <p>
          Hey!
          <span role="img" aria-label="wave">
            {" "}
            👋{" "}
          </span>
          I'm Robbe.
        </p>
        <p>
          I'm a <strong>digital designer / developer</strong> ready to help
          shape the future.
        </p>
        <p>contact</p>
      </div>
      <Img
        fluid={data.file.childImageSharp.fluid}
        className={styles.headerImg}
      />
    </header>
  )
}

export default Header

import React from "react"
import ProjectPreview from "../components/Project-preview"
import { graphql, useStaticQuery } from "gatsby"

import styles from "./Projects.module.css"

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            id
            tags
            slug
            img {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const projects = data.allProjectsJson.edges

  return (
    <section>
      <h2>Some of my work</h2>
      {projects.map(({ node: project }) => {
        const id = project.id
        const title = project.title
        const tags = project.tags
        const slug = project.slug
        const imageData = project.img.childImageSharp.fluid

        return (
          <ProjectPreview
            title={title}
            imageData={imageData}
            tags={tags}
            id={id}
            key={id}
            slug={slug}
          />
        )
      })}
    </section>
  )
}

export default Projects

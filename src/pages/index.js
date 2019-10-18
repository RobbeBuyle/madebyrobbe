import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout"
import ProjectPreview from "../components/Project-preview"

export default () => {
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
    <Layout>
      <h1>hej!</h1>
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
    </Layout>
  )
}

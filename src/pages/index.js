import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import ProjectPreview from "../components/project-preview"

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

        return (
          <ProjectPreview
            title={title}
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

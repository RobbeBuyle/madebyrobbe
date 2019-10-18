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
            desc
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
        const desc = project.desc

        return <ProjectPreview title={title} desc={desc} id={id} />
      })}
    </Layout>
  )
}

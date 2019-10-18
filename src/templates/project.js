import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Project from "../components/Project"

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      tags
      date
      customer
      tools
      desc
      link
    }
  }
`

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson
  const title = project.title
  const tags = project.tags
  const date = project.date
  const customer = project.customer
  const tools = project.tools
  const desc = project.desc
  const link = project.link

  return (
    <Layout>
      <Link to="/">Back to all projects</Link>
      <Project
        title={title}
        tags={tags}
        date={date}
        customer={customer}
        tools={tools}
        desc={desc}
        link={link}
      />
    </Layout>
  )
}

export default ProjectTemplate

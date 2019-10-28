import React from "react"

import Layout from "../components/Layout.jsx"
import Header from "../components/Header.jsx"
import Projects from "../components/Projects.jsx"
import About from "../components/About.jsx"

export default () => {
  return (
    <Layout>
      <Header />
      <Projects />
      <About />
    </Layout>
  )
}

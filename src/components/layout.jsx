import React from "react"

// import Lottie from "lottie-web"
// import Animation from "../../data/logo_data.json"

import Footer from "../components/Footer.jsx"
import Nav from "../components/Nav.jsx"

import "../styles/index.css"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Nav />
      <main className="contentContainer">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

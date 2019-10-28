import React from "react"

// import Lottie from "lottie-web"
// import Animation from "../../data/logo_data.json"

import Footer from "../components/Footer.jsx"
import Nav from "../components/Nav.jsx"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

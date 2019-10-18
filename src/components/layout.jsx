import React from "react"
import { Link } from "gatsby"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Link to="/">My Portfolio</Link>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout

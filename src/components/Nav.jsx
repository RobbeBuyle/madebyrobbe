import React from "react"
import { Link } from "gatsby"

const Nav = () => {
  return (
    <nav>
      <Link to="/">Robbe</Link>
      <Link to="/">Home</Link>
      <a href="https://medium.com/@robbebuyle">Blog</a>
    </nav>
  )
}

export default Nav

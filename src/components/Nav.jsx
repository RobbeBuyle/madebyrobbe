import React from "react"
import { Link } from "gatsby"

// import Lottie from "react-lottie"
import styles from "./Nav.module.css"

// const defaultOptions = {
//   loop: false,
//   autoplay: true,
//   animationData: require("../../data/demo.json"),
// }

const Nav = () => {
  return (
    <>
      {/* <Lottie options={defaultOptions} className={styles.logoAnim} /> */}
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLogo}>
          Robbe
          <span className={styles.visualyHidden}>Robbe</span>
        </Link>

        <div>
          <Link to="/" className={styles.navItem}>
            Home
          </Link>
          <a href="https://medium.com/@robbebuyle" className={styles.navItem}>
            Blog
          </a>
        </div>
      </nav>
    </>
  )
}

export default Nav

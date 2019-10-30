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
      <nav className={styles.navContainer}>
        <ul className={styles.nav}>
          <li className={styles.li}>
            <Link to="/" className={styles.navLogo}>
              Robbe
              <span className={styles.visualyHidden}>Robbe</span>
            </Link>
          </li>
          <div>
            <li className={styles.li}>
              <Link to="/" className={styles.navItem}>
                Home
              </Link>
            </li>
            <li className={styles.li}>
              <a
                href="https://medium.com/@robbebuyle"
                className={styles.navItem}
              >
                Blog
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  )
}

export default Nav

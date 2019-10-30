import React from "react"
import styles from "./Footer.module.css"
import logo from "../../static/Robbe_logo_small.svg"

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <img src={logo} width="120" className={styles.logo_big} />
      <div>
        <address className={styles.email}>
          <a href="mailto:robbedoesstuff@gmail.com" className={styles.email}>
            robbedoesstuff@gmail.com
          </a>
        </address>
        <ul className={styles.socialList}>
          <li>
            <a
              href="https://github.com/RobbeBuyle"
              className={`${styles.social} ${styles.github}`}
            >
              <span className={styles.visualyHidden}>Github</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/robbebuyle/"
              className={`${styles.social} ${styles.insta}`}
            >
              <span className={styles.visualyHidden}>Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/RobbeBuyle"
              className={`${styles.social} ${styles.twitter}`}
            >
              <span className={styles.visualyHidden}>Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/robbebuyle79c9"
              className={`${styles.social} ${styles.behance}`}
            >
              <span className={styles.visualyHidden}>Behance</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer

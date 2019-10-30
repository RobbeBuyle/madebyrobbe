import React from "react"

import styles from "./About.module.css"

const About = () => {
  return (
    <>
      <h2 className={styles.sectionTitle}>About me</h2>
      <p className={styles.paragraph}>
        I’m a Digital Design and Development student at Howest based in the
        fries-and-wafflecountry, also known as Belgium. I’m really passionate
        about creating human-centric and performant digital products by using
        the latest technologies.
      </p>
      <div className={styles.gridContainer}>
        <section className={styles.moduleContainer}>
          <article className={`${styles.moduleDev} ${styles.module}`}>
            <h3 className={`${styles.moduleTitleDev} ${styles.moduleTitle}`}>
              Development
            </h3>
            <ul className={styles.moduleList}>
              <li className={styles.moduleListItemDev}>Responsive websites</li>
              <li className={styles.moduleListItemDev}>React (MobX)</li>
              <li className={styles.moduleListItemDev}>
                Basic NodeJS and Express
              </li>
              <li className={styles.moduleListItemDev}>ES6 Javascript</li>
              <li className={styles.moduleListItemDev}>Basic Swift</li>
            </ul>
          </article>
          <article className={`${styles.moduleDes} ${styles.module}`}>
            <h3 className={styles.moduleTitle}>Design</h3>
            <ul className={styles.moduleList}>
              <li className={styles.moduleListItem}>UX research and testing</li>
              <li className={styles.moduleListItem}>
                Design systems (Sketch / Figma)
              </li>
              <li className={styles.moduleListItem}>After Effects animation</li>
              <li className={styles.moduleListItem}>Basic Cinema 4D</li>
              <li className={styles.moduleListItem}>
                Visual Design (Logo, Illustration, ...)
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  )
}

export default About

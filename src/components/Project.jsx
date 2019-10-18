import React from "react"

const Project = ({ title, tags, date, customer, tools, desc, link }) => {
  return (
    <article>
      <h1>{title}</h1>
      <p>{tags}</p>
      <time>{date}</time>
      <p>{customer}</p>
      <p>{tools}</p>
      <p>{desc}</p>
      <a href={link}>{link}</a>
    </article>
  )
}

export default Project

import React from "react"
import Image from "gatsby-image"

const Project = ({
  title,
  tags,
  date,
  customer,
  tools,
  desc,
  link,
  imageData,
}) => {
  return (
    <article>
      <Image fluid={imageData} />
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

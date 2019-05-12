import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/Layout"

import Button from "../components/Button"
import Project from "../components/Project"

const projects = [
  {
    name: "Portfolio",
    technologies: "GatsbyJS, React, Styled-Components, animate.css",
    link: "/",
    image: "portfolio.png",
  },
  {
    name: "IN PROGRESS",
    technologies: "",
    link: "",
    image: "mama.png",
  },
]

export default () => (
  <>
    <Layout isRed>
      <div>
        {projects.map(element => (
          <Project info={element} key={element.name} />
        ))}
      </div>
      <Link to="/contact/">
        <Button>Contact with me!</Button>
      </Link>
    </Layout>
  </>
)

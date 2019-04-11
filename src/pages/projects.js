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
]

export default () => (
  <>
    <Layout isRed>
      <div className="animated bounceInDown delay-1s">
        {projects.map(element => (
          <Project info={element} key={element.name} />
        ))}
      </div>
      <Link to="/contact/" className="animated bounceInLeft delay-2s">
        <Button>Contact with me!</Button>
      </Link>
    </Layout>
  </>
)

import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/Layout"

import Paragraph from "../components/Paragraph"
import Button from "../components/Button"

export default () => (
  <>
    <Layout>
      <Paragraph>
        My name is Dmitro Szewczuk, <br /> I'm a 17 years old full-stack web
        developer. <br />
        Programming is my passion, at which I'm really good. <br />
        Despite my young age, I have a long programming experience. <br />
        <br />I want to help people by my passion. <br /> Check what I can do
        for you!
      </Paragraph>
      <Link to="/offer/">
        <Button>My offer</Button>
      </Link>
    </Layout>
  </>
)

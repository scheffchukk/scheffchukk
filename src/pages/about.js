import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/Layout"

import Paragraph from "../components/Paragraph"
import Button from "../components/Button"

export default () => (
  <>
    <Layout>
      <Paragraph className="animated bounceInDown">
        My name is Dmitro Szewczuk, <br /> I'm young, 17 years old full-stack
        web developer. <br />
        Programming is my passion, in which I'm good at. <br />
        Despite my young age, I have long programming experience. <br />
        <br />I want to help people by my passion. <br /> Check what can I do
        for you!
      </Paragraph>
      <Link to="/offer/" className="animated bounceInLeft">
        <Button>My offer</Button>
      </Link>
    </Layout>
  </>
)

import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/Layout"

import Paragraph from "../components/Paragraph"
import Button from "../components/Button"

export default () => (
  <>
    <Layout isRed>
      <Paragraph className="animated bounceInDown delay-1s">
        I love people, <br />
        I love working with people, <br />
        And I love solving people's problems.
        <br />
        <br />
        What problem can I solve for you?
      </Paragraph>
      <Link to="/about/" className="animated bounceInLeft delay-2s">
        <Button>Who am I?</Button>
      </Link>
    </Layout>
  </>
)

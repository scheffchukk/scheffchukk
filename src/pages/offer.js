import React from "react"

import { Link } from "gatsby"

import Layout from "../layout/Layout"

import OfferPill from "../components/OfferPill"
import Button from "../components/Button"
import Container from "../components/Pill/Container"

const offer = [
  {
    red: true,
    src: "svg/feature.svg",
    text: "Web applications",
  },
  {
    red: false,
    src: "svg/coding.svg",
    text: "Responsive websites",
  },
  {
    red: true,
    src: "svg/photoshop-file-format.svg",
    text: "Coding PSD files",
  },
  {
    red: false,
    src: "svg/reuse.svg",
    text: "Refreshing old websites",
  },
]

export default () => (
  <>
    <Layout isRed>
      <Container>
        {offer.map(data => (
          <OfferPill data={data} key={data.text} />
        ))}
      </Container>
      <Link to="/advantages/">
        <Button>My advantages</Button>
      </Link>
    </Layout>
  </>
)

import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/Layout"

import AdvantagePill from "../components/AdvantagePill"
import Button from "../components/Button"
import Container from "../components/Pill/Container"

const advantages = [
  {
    red: true,
    iconOnLeft: true,
    src: "svg/smartphone.svg",
    text: "Responsive design",
    subtext:
      "My websites are designed to be good-looking even on tablets or smartphones.",
  },
  {
    red: false,
    iconOnLeft: false,
    src: "svg/gearwheels-couple.svg",
    text: "Newest technologies",
    subtext:
      "I won't write you website, that works on 10 years technology. Except if you want to.",
  },
  {
    red: true,
    iconOnLeft: true,
    src: "svg/programming-code-signs.svg",
    text: "Effective, clean code",
    subtext:
      "My code is clear and maintainable, soeven after long break, I we can cooperate",
  },
  {
    red: false,
    iconOnLeft: false,
    src: "svg/chatting-oval-speech-bubbles.svg",
    text: "Clear communication",
    subtext:
      "I haven't problems with clear communication, I do what you want in my way of doing.",
  },
]

export default () => (
  <>
    <Layout>
      <Container className="animated fadeInLeft">
        {advantages.map(data => (
          <AdvantagePill data={data} key={data.text} />
        ))}
      </Container>
      <Link to="/projects/" className="animated fadeInUp">
        <Button>My projects</Button>
      </Link>
    </Layout>
  </>
)

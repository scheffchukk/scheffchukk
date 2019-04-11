import React from "react"

import Navigation from "./Navigation"
import List from "./List"
import Item from "./Item"
import Link from "./Link"

import Hamburger from "../Hamburger"

import Paragraph from "../Paragraph"
import HyperText from "../HyperText"

const links = [
  {
    text: "Main",
    to: "/",
  },
  {
    text: "About",
    to: "/about/",
  },
  {
    text: "Offer",
    to: "/offer/",
  },
  {
    text: "Advantages",
    to: "/advantages/",
  },
  {
    text: "Projects",
    to: "/projects/",
  },
  {
    text: "Contact",
    to: "/contact/",
  },
]

export default ({ navigationToggled, onClick }) => (
  <Navigation navigationToggled={navigationToggled}>
    <div className="animated bounceInDown" onClick={onClick}>
      <Hamburger reverse />
    </div>
    <List className="animated bounceInDown delay-1s">
      {links.map(link => (
        <Item key={link.text}>
          <Link to={link.to}>{link.text}</Link>
        </Item>
      ))}
    </List>

    <>
      <Paragraph
        size="12"
        reversed
        style={{
          position: "absolute",
          top: "calc(100vh - 22px)",
          left: "10px",
        }}
      >
        Icons made by{" "}
        <HyperText href="https://www.flaticon.com/authors/" title="">
          Users of www.flaticon.com
        </HyperText>{" "}
        from{" "}
        <HyperText href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </HyperText>{" "}
        is licensed by{" "}
        <HyperText
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
        >
          CC 3.0 BY
        </HyperText>
      </Paragraph>
    </>
  </Navigation>
)

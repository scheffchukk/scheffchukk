import React from "react"
import { withPrefix } from "gatsby"

import Layout from "../layout/Layout"

import Paragraph from "../components/Paragraph"
import Icon from "../components/Pill/Icon"
import HyperText from "../components/HyperText"
import Wrapper from "../components/Wrapper"

const contacts = [
  {
    icon: "svg/email.svg",
    text: "E-mail: scheffchukk@gmail.com",
  },
  {
    icon: "svg/phone-call.svg",
    text: "Phone: +48 793-208-003",
  },
  {
    icon: "svg/github.svg",
    text: "Github: scheffchukk",
    hyperlink: "https://github.com/scheffchukk",
  },
]

export default () => (
  <>
    <Layout>
      <Wrapper>
        {contacts.map(contact => (
          <HyperText
            href={contact.hyperlink}
            target="_blank"
            key={contact.text}
          >
            <Wrapper bordered>
              <Icon src={withPrefix(contact.icon)} alt="" />
              <Paragraph>{contact.text}</Paragraph>
            </Wrapper>
          </HyperText>
        ))}
      </Wrapper>
    </Layout>
  </>
)

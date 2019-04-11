import React from "react"
import { withPrefix } from "gatsby"

import Paragraph from "./Pill/Paragraph"
import Icon from "./Pill/Icon"
import Wrapper from "./Pill/Wrapper"

export default ({ data }) => {
  const { red, text, src } = data
  return (
    <Wrapper red={red} radius="50">
      <Icon src={withPrefix(src)} />
      <Paragraph red={red}>{text}</Paragraph>
    </Wrapper>
  )
}

import React from "react"
import { withPrefix } from "gatsby"

import Paragraph from "./Pill/Paragraph"
import Icon from "./Pill/Icon"
import Wrapper from "./Pill/Wrapper"

export default ({ data }) => {
  const { red, src, text, subtext } = data
  return (
    <Wrapper extended red={red} radius="15">
      <Icon size="48" src={withPrefix(src)} />
      <div>
        <Paragraph red={red}>{text}</Paragraph>
        <Paragraph size="14" red={red}>
          {subtext}
        </Paragraph>
      </div>
    </Wrapper>
  )
}

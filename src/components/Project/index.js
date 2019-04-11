import React, { Component } from "react"
import { withPrefix } from "gatsby"

import Background from "./Background"
import Text from "./Text"
import Wrapper from "./Wrapper"

export default class extends Component {
  state = {
    hover: false,
  }

  render() {
    const { link, image, name, technologies } = this.props.info
    return (
      <a href={link}>
        <Wrapper
          onMouseEnter={() => {
            this.setState({ hover: true })
          }}
          onMouseLeave={() => {
            this.setState({ hover: false })
          }}
        >
          <Background src={withPrefix(image)} hovered={this.state.hover} />
          <Text hovered={this.state.hover}>
            {name} <br /> {technologies}
          </Text>
        </Wrapper>
      </a>
    )
  }
}

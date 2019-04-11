import React, { Component } from "react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

import "animate.css"

import Header from "../components/Header"
import Navigation from "../components/Navigation"

import redTheme from "./redTheme"
import whiteTheme from "./whiteTheme"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Titillium+Web');

		*, *::before, *::after {
			box-sizing: border-box;
		}
		
		body {
			margin: 0;
		}
  `

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 10px;

  min-height: calc(100vh - 70px);

  background: ${({ theme: { colors } }) => colors.primary};

  @media (min-width: ${({ theme: { sizes } }) => sizes.desktop}) {
    min-height: calc(100vh - 91px);
  }
`

export default class extends Component {
  state = {
    navigationToggled: false,
  }

  toggleNavigation() {
    this.setState(prevState => ({
      navigationToggled: !prevState.navigationToggled,
    }))
  }

  render() {
    const { isRed, children } = this.props
    return (
      <ThemeProvider theme={isRed ? redTheme : whiteTheme}>
        <>
          <GlobalStyle />
          <Header onClick={() => this.toggleNavigation()} />
          <Navigation
            navigationToggled={this.state.navigationToggled}
            onClick={() => this.toggleNavigation()}
          />
          <Wrapper className={isRed ? "animated fadeInLeft" : ""}>
            {children}
          </Wrapper>
        </>
      </ThemeProvider>
    )
  }
}

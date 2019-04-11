import styled from "styled-components"

const Background = styled.div`
  width: 300px;
  height: 150px;

  background: ${({ src }) => `url(${src})`};
  background-size: contain;
  background-position: center;

  transition: filter 0.25s linear;

  filter: ${({ hovered }) => (hovered ? "blur(2px);" : "none")};

  @media (min-width: ${({ theme: { sizes } }) => sizes.desktop}) {
    width: 400px;
    height: 175px;
  }
`

export default Background

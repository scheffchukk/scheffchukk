import styled from "styled-components"

const H1 = styled.h1`
  margin: 0;
  color: ${({ theme: { colors } }) => colors.secondary};
  font-family: ${({ theme: { font } }) => font.family};
  text-align: center;
  letter-spacing: 1.5px;

  font-size: 32px;
  @media (min-width: ${({ theme: { sizes } }) => sizes.desktop}) {
    font-size: 38px;
  }
`
export default H1

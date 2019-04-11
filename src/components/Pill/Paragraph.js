import styled from "styled-components"

const Paragraph = styled.p`
  padding: 0;
  margin: 0;

  color: ${({ red, theme: { colors } }) =>
    red ? colors.secondary : colors.primary};
  font-family: ${({ theme: { font } }) => font.family};

  font-size: ${({ size }) => (size ? `${size}px` : "22px")};

  @media (min-width: ${({ theme: { sizes } }) => sizes.desktop}) {
    font-size: ${({ size }) => (size ? `${size * 1.5}px` : "32px")};
  }
`

export default Paragraph

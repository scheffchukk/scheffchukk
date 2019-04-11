import styled from "styled-components"

const Paragraph = styled.p`
  padding: 0;
  margin: 0;

  color: ${({ reversed, theme: { colors } }) =>
    reversed ? colors.primary : colors.secondary};
  font-family: ${({ theme: { font } }) => font.family};

  font-size: ${({ size }) => (size ? `${size}px` : "22px")};

  @media (min-width: ${({ theme: { sizes } }) => sizes.desktop}) {
    font-size: ${({ size }) => (size ? `${size}px` : "28px")};
  }
`

export default Paragraph

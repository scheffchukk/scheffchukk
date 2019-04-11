import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  color: ${({ theme: { colors } }) => colors.primary};
  font-family: ${({ theme: { font } }) => font.family};
  text-decoration: none;

  font-size: 26px;

  @media (min-width: ${({ theme: { sizes } }) => sizes.desktop}) {
    font-size: 32px;
  }
`

export default StyledLink

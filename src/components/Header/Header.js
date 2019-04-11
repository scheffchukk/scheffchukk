import styled from "styled-components"

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  background: ${({ theme: { colors } }) => colors.primary};
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.secondary};

  position: sticky;
  top: 0;

  z-index: 1;

  @media (min-width: ${({ theme: { sizes } }) => sizes.desktop}) {
    padding: 15px;
    border-bottom: 3px solid ${({ theme: { colors } }) => colors.secondary};
  }
`

export default Header

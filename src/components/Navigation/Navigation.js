import styled from "styled-components"

const Navigation = styled.nav`
  background: ${({ theme: { colors } }) => colors.secondary};

  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background: ${({ theme: { colors } }) => colors.secondary};
  color: ${({ theme: { colors } }) => colors.primary};

  display: ${({ navigationToggled }) => (navigationToggled ? "flex" : "none")};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  z-index: 1;

  padding: 30px;
`

export default Navigation

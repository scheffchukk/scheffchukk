import styled from "styled-components"

const ProjectText = styled.p`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  padding: 10px;

  text-shadow: 2px 2px black;

  color: ${({ theme: { colors } }) => colors.secondary};
  font-family: ${({ theme: { font } }) => font.family};
  text-align: center;

  display: ${({ hovered }) => (hovered ? "block" : "none")};
`

export default ProjectText

import styled from "styled-components"

const Icon = styled.img`
  width: ${({ size }) => (size ? `${size}px` : "64px")};
  height: auto;

  margin: 10px;
`

export default Icon

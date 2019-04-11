import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  border: 1px solid ${({ theme: { colors } }) => colors.secondary};
`

export default Wrapper

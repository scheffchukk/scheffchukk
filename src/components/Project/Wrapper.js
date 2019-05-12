import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  border: 1px solid ${({ theme: { colors } }) => colors.secondary};

  margin-bottom: 10px;
`

export default Wrapper

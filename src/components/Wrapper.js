import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-bottom: ${({ bordered, theme: { colors } }) =>
    bordered ? `2px solid ${colors.secondary}` : "none"};
`

export default Wrapper

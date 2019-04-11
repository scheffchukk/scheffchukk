import styled from "styled-components"

const Item = styled.li`
  color: ${({ theme: { colors } }) => colors.primary};
  text-align: center;

  margin-bottom: 10px;
  @media (min-width: ${({ theme: { sizes } }) => sizes.desktop}) {
    margin-bottom: 20px;
  }
`

export default Item

import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 10px;
  padding: 5px;

  border: 2px solid
    ${({ red, theme: { colors } }) => (red ? colors.secondary : colors.primary)};

  background: ${({ red, theme: { colors } }) =>
    red ? colors.primary : colors.secondary};

  border-radius: ${({ radius }) => `${radius}px`};

  transition: transform 0.5s linear;
  :hover {
    transform: ${({ red }) => (red ? "translateX(-5px)" : "translateX(5px)")};
  }

  width: ${({ extended }) => (extended ? "300px" : "300px")};
  height: ${({ extended }) => (extended ? "125px" : "100px")};

  @media (min-width: ${({ theme: { sizes } }) => sizes.desktop}) {
    border: 4px solid
      ${({ red, theme: { colors } }) =>
        red ? colors.secondary : colors.primary};

    padding: 15px;
    margin: 20px;

    width: ${({ extended }) => (extended ? "425px" : "450px")};
    height: ${({ extended }) => (extended ? "175px" : "125px")};

    border-radius: ${({ radius }) => `${radius * 2}px`};
  }
`

export default Wrapper

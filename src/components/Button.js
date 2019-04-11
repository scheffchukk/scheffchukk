import styled from "styled-components"

const Button = styled.button`
  width: 196px;
  height: 47px;

  border-radius: 50px;

  font-family: ${({ theme: { font } }) => font.family};
  font-size: 19px;
  color: ${({ theme: { colors } }) => colors.secondary};

  background: ${({ theme: { colors } }) => colors.primary};
  border: 2px solid ${({ theme: { colors } }) => colors.secondary};
  outline: none;

  cursor: pointer;
  transition: transform 0.5s linear;
  :hover {
    transform: translateY(-5px);

    color: ${({ theme: { colors } }) => colors.primary};

    background: ${({ theme: { colors } }) => colors.secondary};
    border: 2px solid ${({ theme: { colors } }) => colors.primary};
  }

  @media (min-width: ${({ theme: { sizes } }) => sizes.desktop}) {
    font-size: 26px;
    width: 260px;
    height: 70px;
  }
`

export default Button

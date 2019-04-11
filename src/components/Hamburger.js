import styled from "styled-components"

const Hamburger = styled.div`
  width: 25px;
  height: 17px;
  background: ${({ reverse, theme: { colors } }) =>
    reverse ? colors.primary : colors.secondary};

  position: relative;

  cursor: pointer;

  ::after,
  ::before {
    content: "";

    position: absolute;
    top: 3px;
    left: 0;

    width: inherit;
    height: 4px;
    background: ${({ reverse, theme: { colors } }) =>
      reverse ? colors.secondary : colors.primary};
  }

  ::after {
    top: 10px;
  }

  @media (min-width: ${({ theme: { sizes } }) => sizes.desktop}) {
    width: 36px;
    height: 24px;

    ::before,
    ::after {
      height: 6px;
      top: 4px;
    }

    ::after {
      top: 14px;
    }
  }
`
export default Hamburger

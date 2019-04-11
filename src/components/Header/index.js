import React from "react"

import Hamburger from "../Hamburger"
import Header from "./Header"
import H1 from "./H1"

export default ({ onClick }) => {
  return (
    <>
      <Header>
        <H1>scheffchukk</H1>
        <div onClick={onClick}>
          <Hamburger />
        </div>
      </Header>
    </>
  )
}

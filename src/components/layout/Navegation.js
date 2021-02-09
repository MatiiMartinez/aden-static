import React from "react"
import styled from "styled-components"

import { Button } from "@material-ui/core"
import AdenLogo from "../../images/logo-aden-red-lg.png"

const Navegation = () => {
  return (
    <Header>
      <Logo src={AdenLogo} alt="logo" />
      <Button
        variant="outlined"
        size="large"
        style={{
          textTransform: "capitalize",
          backgroundColor: "#b31d15",
          color: "#ffffff",
          borderRadius: "5px",
        }}
        href="https://app.aden.org/"
      >
        ¡Conoce más!
      </Button>
    </Header>
  )
}

export default Navegation

const Header = styled.header`
  background-color: #ffffff;
  box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.5);
  padding: 0 8rem;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1200px) {
    padding: 0 2rem;
  }
`

const Logo = styled.img`
  width: 250px;
  height: auto;

  @media (max-width: 992px) {
    width: 150px;
  }
`

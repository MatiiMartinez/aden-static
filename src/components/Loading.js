import React from "react"
import styled from "styled-components"

import AdenLogoRed from "../images/logo-aden-red-lg.png"
import { CircularProgress } from "@material-ui/core"

const Loading = () => {
  return (
    <LoadingContainer>
      <img src={AdenLogoRed} alt="logo" />
      <CircularProgress style={{ color: "#B31D15" }} />
    </LoadingContainer>
  )
}

export default Loading

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;

  img {
    width: 350px;
    height: auto;
  }
`

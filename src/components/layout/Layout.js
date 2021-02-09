import React from "react"
import { theme } from "./theme"
import "./Layout.css"

import Navegation from "./Navegation"
import { MuiThemeProvider } from "@material-ui/core"
import Footer from "./Footer"

const Layout = props => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <Navegation />
        <main>{props.children}</main>
        <Footer />
      </MuiThemeProvider>
    </>
  )
}

export default Layout

import React from "react"
import { theme } from "./theme"
import "./Layout.css"

import Navegation from "./Navegation"
import { MuiThemeProvider } from "@material-ui/core"
import Footer from "./Footer"
import SEO from "../seo"

const Layout = props => {
  const { title, description, image } = props

  return (
    <>
      <SEO title={title} description={description} image={image} />
      <MuiThemeProvider theme={theme}>
        <Navegation />
        <main>{props.children}</main>
        <Footer />
      </MuiThemeProvider>
    </>
  )
}

export default Layout

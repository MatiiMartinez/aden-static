import React from "react"
import { Router as ReachRouter } from "@reach/router"
import Workshop from "../modules/Workshop"
import NotFoundPage from "./404"

const Router = () => {
  return (
    <ReachRouter>
      <Workshop path="/app/:type/:id" />
      <NotFoundPage default />
    </ReachRouter>
  )
}

export default Router

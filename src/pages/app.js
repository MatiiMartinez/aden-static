import React from "react"
import { Router as ReachRouter } from "@reach/router"
import Workshop from "../modules/Workshop"

const Router = () => {
  return (
    <ReachRouter basepath="/">
      <Workshop path="/app/:type/:id" />
    </ReachRouter>
  )
}

export default Router

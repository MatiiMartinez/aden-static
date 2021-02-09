import React, { useEffect } from "react"
import Loading from "../components/Loading"

const IndexPage = () => {
  useEffect(() => {
    const isBrowser = () => typeof window !== "undefined"
    isBrowser() && window.location.replace("https://app.aden.org/")
  }, [])

  return <Loading />
}

export default IndexPage

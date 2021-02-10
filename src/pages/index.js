import React, { useEffect } from "react"
import Loading from "../components/Loading"
import SEO from "../components/seo"

const IndexPage = () => {
  useEffect(() => {
    const isBrowser = () => typeof window !== "undefined"
    isBrowser() && window.location.replace("https://app.aden.org/")
  }, [])

  return (
    <>
      <SEO />
      <Loading />
    </>
  )
}

export default IndexPage

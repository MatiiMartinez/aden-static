import React, { useEffect, useState } from "react"
import Loading from "../components/Loading"
import SEO from "../components/seo"

const IndexPage = () => {
  /*useEffect(() => {
    const isBrowser = () => typeof window !== "undefined"
    isBrowser() && window.location.replace("https://app.aden.org/")
  }, [])*/
  const [item, setItem] = useState(null)

  useEffect(() => {
    async function getSource() {
      await fetch(`${process.env.GATSBY_REPO}workshop/5626`)
        .then(res => res.json())
        .then(res => setItem(res))
        .catch(err => console.log(err))
    }
    getSource()
  }, [])

  if (!item) {
    return <Loading />
  }

  return (
    <>
      <Loading />
    </>
  )
}

export default IndexPage

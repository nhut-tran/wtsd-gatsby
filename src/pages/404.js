import React from "react"
import { graphql } from "gatsby"


const NotFoundPage = () => {

  return (
    <div className="mx-auto w-[80%] h-[50vh] flex items-center justify-center flex-col">
      <h2 className="text-6xl font-bold">Page Not Found</h2>
      <a href='/' className="flex items-center justify-between text-3xl">Home page</a>
    </div>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

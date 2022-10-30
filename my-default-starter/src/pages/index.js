import * as React from "react"
import AniBox from "../components/AniBox"

import ColorCount from "../components/colorCount"

import Counter from "../components/Counter"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <>
      <Layout>
        <AniBox />
        <ColorCount />

        <Counter />
      </Layout>
    </>
  )
}

// )

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export default IndexPage

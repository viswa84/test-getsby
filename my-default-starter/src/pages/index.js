import * as React from "react"
// import { useSelector } from "react-redux"
import Counter from '../components/Counter';
// import ColorCount from '../components/colorCount';

import Layout from "../components/layout"


const IndexPage = () => {

 

return <>
<Layout>
   <center>Hallo world</center>
   {/* <ColorCount/> */}
   <Counter/>
  </Layout></>

}

  
// )

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
// export const Head = () => <Seo title="Home" />

export default IndexPage

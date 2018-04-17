import React from 'react'
import Box from '../components/Box'

function ProductsPage({ data }) {
  return (
    <div>
      <p>Single smoothie page</p>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <Box html>{data.markdownRemark.html}</Box>
    </div>
  )
}

export const query = graphql`
  query ProductsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default ProductsPage

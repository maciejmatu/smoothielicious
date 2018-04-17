import React from 'react'

function ProductsPage({ data }) {
  return (
    <div>
      <h1>Description: {data.markdownRemark.frontmatter.description}</h1>
    </div>
  )
}

export const query = graphql`
  query ProductsQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        description
      }
    }
  }
`

export default ProductsPage

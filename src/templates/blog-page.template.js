import React from 'react'

function BlogPage({ data }) {
  return (
    <div>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>{node.frontmatter.title}</li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query BlogQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post.template" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default BlogPage

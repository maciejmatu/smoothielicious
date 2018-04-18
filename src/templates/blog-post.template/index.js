import React from 'react'
import Box from '../../components/Box';

function BlogPost({ data: { markdownRemark } }) {
  return (
    <Box>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <Box html>{markdownRemark.html}</Box>
    </Box>
  )
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`

export default BlogPost

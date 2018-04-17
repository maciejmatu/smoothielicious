import React from 'react'
import Box from '../components/Box'

function AboutPage({ data }) {
  return (
    <Box>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <Box html>{data.markdownRemark.html}</Box>
    </Box>
  )
}

export const query = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default AboutPage

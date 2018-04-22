import React from 'react'
import Box from '../../components/Box'
import Header from '../../components/Header'
import blueOrangeImg from '../../img/orangeBg.png'
import './style.scss'

function BlogPost({ data: { markdownRemark } }) {
  return (
    <Box className="PostPage">
      <Header imageSrc={blueOrangeImg} />
      <Box className="PostPage__container">
        <h1 className="PostPage__heading">{markdownRemark.frontmatter.title}</h1>
        <Box html className="PostPage__text">{markdownRemark.html}</Box>
      </Box>
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

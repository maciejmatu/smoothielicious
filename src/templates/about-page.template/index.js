import React from 'react'
import Box from '../../components/Box'
import blueOrangeImg from '../../img/orangeBg.png'
import Header from '../../components/Header'
import './style.scss'

function AboutPage({ data }) {
  return (
    <Box className="AboutPage">
      <Header imageSrc={blueOrangeImg} />
      <Box className="AboutPage__container">
        <h1 className="AboutPage__heading">{data.markdownRemark.frontmatter.title}</h1>
        <Box html className="AboutPage__text">{data.markdownRemark.html}</Box>
      </Box>
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

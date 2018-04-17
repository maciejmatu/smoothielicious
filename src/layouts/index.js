import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navigation from '../components/Navigation'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet title={data.site.siteMetadata.title} />
    <Navigation />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
}

export const query = graphql`
  query TemplateQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper

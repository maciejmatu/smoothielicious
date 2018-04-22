import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import '../style/main.scss'
import './index.scss'

const TemplateWrapper = ({ children, data }) => (
  <div className="Layout">
    <Helmet title={data.site.siteMetadata.title} />
    {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
}

export const query = graphql`
  query Metadata {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper

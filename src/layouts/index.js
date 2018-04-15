import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import * as config from '../config'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title={config.PROJECT_NAME} />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

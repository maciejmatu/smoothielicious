import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import PageCounter from '../components/PageCounter'
import '../style/main.scss'
import './index.scss'

class TemplateWrapper extends React.Component {
  state = {
    visitCount: null
  }

  componentDidMount() {
    fetch('/api/add-page-visit')
      .then(res => res.json())
      .then(data => {
        this.setState({ visitCount: data.value.requests })
      })
  }

  render() {
    const { children, data } = this.props;

    return (
      <div className="Layout">
        <Helmet title={data.site.siteMetadata.title} />
        <PageCounter count={this.state.visitCount} />
        {children()}
      </div>
    );
  }
}

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

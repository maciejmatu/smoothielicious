import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import PageCounter from '../components/PageCounter'
import '../style/main.scss'
import './index.scss'

class TemplateWrapper extends React.Component {
  state = {
    visitCount: null,
    noDbConnection: false
  }

  componentDidMount() {
    fetch('/api/add-page-visit')
      .then(res => {
        if (res.status < 200 || res.status >= 300) {
          return Promise.reject('No db connection')
        }

        const data = res.json()

        this.setState({ visitCount: res.data.value.requests })
      })
      .catch(console.warn);
  }

  render() {
    const { children, data } = this.props;

    return (
      <div className="Layout">
        <Helmet title={data.site.siteMetadata.title} />
        <PageCounter {...this.state} />
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

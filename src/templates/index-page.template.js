import React, { Component } from 'react'
import Link from 'gatsby-link'

class IndexPage extends Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <h1>View Products:</h1>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'product-page.template')
            .map(({ node: product }) => (
              <div key={product.id}>
                <Link to={product.fields.slug}>{product.title}</Link>
              </div>
            ))}
        </div>
        <div className="container">
        <h1>View Latest Posts:</h1>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'blog-post.template')
            .map(({ node: post }) => (
              <div key={post.id}>
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}<br />
                  <Link className="button is-small" to={post.fields.slug}>Keep Reading →</Link>
                </p>
              </div>
            ))}
      </div>
      </section>
    )
  }
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`

export default IndexPage

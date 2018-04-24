import React, { Component } from 'react'
import Link from 'gatsby-link'
import Header from '../../components/Header'
import './style.scss'

class IndexPage extends Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="IndexPage">
        <Header />
        <main className="IndexPage__container">
          <h3 className="IndexPage__heading">{data.markdownRemark.frontmatter.smoothiesHeading}</h3>
          <div className="ProductGrid">
            {posts
              .filter(post => post.node.frontmatter.templateKey === 'product-page.template')
              .map(({ node: product }) => (
                <div key={product.id} className="ProductGrid__item Product">
                  <div className="Product__image" style={{ backgroundImage: `url(${product.frontmatter.image})` }}></div>
                  <div className="Product__detail">
                    <h4 className="Product__name">{product.frontmatter.title}</h4>
                    <p className="Product__description">{product.frontmatter.description}</p>
                    <div className="Product__tags">
                      {product.frontmatter.ingredients.map((ingredient, index) => (
                        <span key={index} className="Product__tag">{ingredient}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <h3 className="IndexPage__heading">{data.markdownRemark.frontmatter.postsHeading}</h3>
          <div className="PostsGrid">
            {posts
              .filter(post => post.node.frontmatter.templateKey === 'blog-post.template')
              .map(({ node: post }) => (
                <div key={post.id} className="PostsGrid__item Post">
                  <Link className="Post__heading Post__link" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <br />
                  <small className="Post__date">{post.frontmatter.date}</small>
                  <p>{post.excerpt}</p>
                  <Link className="Post__link" to={post.fields.slug}>Keep Reading →</Link>
                </div>
              )
            )}
          </div>
        </main>
      </div>
    )
  }
}

export const query = graphql`
  query IndexQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        postsHeading
        smoothiesHeading
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            image
            description
            ingredients
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

export default IndexPage

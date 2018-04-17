import React from 'react'
import Link from 'gatsby-link'

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About page</Link>
      <Link to="/products">Products page</Link>
      <Link to="/blog">Blog</Link>
    </nav>
  )
}

export default Navbar
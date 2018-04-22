import React from 'react'
import Link from 'gatsby-link'
import './style.scss'

function Navbar() {
  return (
    <nav className="nav">
      <Link exact className="nav__item h5 p1" activeClassName="nav__item--active" to="/">Home</Link>
      <Link className="nav__item h5 p2" activeClassName="nav__item--active" to="/about">About</Link>
    </nav>
  )
}

export default Navbar
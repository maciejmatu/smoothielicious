import React from 'react'
import Navbar from '../Navbar'
import Box from '../Box'
import bananaBg from '../../img/bananaBg.png'
import './style.css'

function Header({ imageSrc }) {
  return (
    <header className="p3 header" style={{ backgroundImage: `url(${imageSrc})` }}>
      <Box className="flex justify-between items-center">
        <h1 className="m0 font-secondary">Smoothielicious</h1>
        <Navbar />
      </Box>
    </header>
  )
}

Header.defaultProps = {
  imageSrc: bananaBg
}

export default Header
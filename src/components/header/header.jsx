import React from 'react'
import { Link } from 'react-router-dom'

import './header-styles.scss'

const Header = () => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <img className='logo' src="https://img.icons8.com/pastel-glyph/64/000000/clew--v1.png" alt="logo" />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>
                Shop
            </Link>
            <Link to='/' className='option'>
                Contact
            </Link>
            <Link to='/signin' className='option'>
                Sign-In
            </Link>
        </div>
    </div>
)

export default Header
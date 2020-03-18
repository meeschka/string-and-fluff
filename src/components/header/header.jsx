import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './header-styles.scss'

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'

const Header = ({ currentUser, hidden }) => (
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
            {currentUser ?
            <div className='option' onClick = {() => auth.signOut()}>
                Sign Out
            </div>
            :
            <Link to='/signin' className='option'>
                Sign In
            </Link>}
            <CartIcon />
            {
                hidden ? null :
                <CartDropdown />
            }
        </div>
    </div>
)

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden

})

export default connect(mapStateToProps)(Header)
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './header-styles.scss'

import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import { selectCartHidden } from '../../redux/cart/cart-selectors'
import { selectCurrentUser } from '../../redux/user/user-selectors'
import { signOutStart } from '../../redux/user/user-actions'

const Header = ({ currentUser, hidden, signOutStart }) => (
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
            <div className='option' onClick = { signOutStart }>
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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
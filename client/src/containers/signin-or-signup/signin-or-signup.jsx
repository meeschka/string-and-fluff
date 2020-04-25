import React from 'react'

import './signin-or-signup-styles.scss'

import SignIn from '../../components/signin/signin'
import SignUp from '../../components/signup/signup'

const SignInOrSignUp = () => (
    <div className='signin-and-signup'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInOrSignUp
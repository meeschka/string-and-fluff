import React, { useState } from 'react'
import { connect } from 'react-redux'

import './signin-styles.scss'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user-actions'

const SignIn = ({googleSignInStart, emailSignInStart}) => {
    const [userCredentials, setUserCredentials] = useState({email: '', password: ''})
    const {email, password} = userCredentials

    const handleSubmit = async event => {
        event.preventDefault()
        emailSignInStart(email, password)
    }

    const handleChange = event => {
        const {value, name} = event.target
        setUserCredentials({...userCredentials, [name]: value})
    }

    return (
        <div className='signin'>
            <h2>I already have an account</h2>
            <span>Sign-in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    handleChange={handleChange}
                    label='email'
                    required />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    required />
                <div className='btn-row'>
                    <CustomButton type='submit'>Sign-In</CustomButton>
                    <CustomButton type='button' onClick={ googleSignInStart } isGoogleSignIn>Sign-In With Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)
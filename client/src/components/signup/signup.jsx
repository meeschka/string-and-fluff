import React, {useState} from 'react'
import { connect } from 'react-redux'

import './signup-styles.scss'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { signUpStart } from '../../redux/user/user-actions'

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { displayName, email, password, confirmPassword } = userCredentials

    const handleSubmit = async event => {
        event.preventDefault()

        if (password !== confirmPassword){
            alert(`Passwords don't match`)
            return
        }
        
        signUpStart(email, password, displayName)
    }

    const handleChange = (event) => {
        setUserCredentials({...userCredentials, [event.target.name]: event.target.value})
    }

    return (
        <div className='signup'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>

            <form className='signup-form' onSubmit={ handleSubmit }>
                <FormInput
                    type='text'
                    name='displayName'
                    value={ displayName }
                    onChange={ handleChange }
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={ email }
                    onChange={ handleChange }
                    label='Email Address'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={ password }
                    onChange={ handleChange }
                    label='Password - at least 6 characters long'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={ confirmPassword }
                    onChange={ handleChange }
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>Sign up!</CustomButton>

            </form>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (email, password, displayName) => dispatch(signUpStart({email, password, displayName}))
})

export default connect(null, mapDispatchToProps)(SignUp)
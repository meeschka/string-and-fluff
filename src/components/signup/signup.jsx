import React from 'react'
import { connect } from 'react-redux'

import './signup-styles.scss'

import FormInput from '../form-input/form-input'
import CustomButton from '../custom-button/custom-button'
import { signUpStart } from '../../redux/user/user-actions'

class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state
        const { signUpStart } = this.props

        if (password !== confirmPassword){
            alert(`Passwords don't match`)
            return
        }
        
        signUpStart(email, password, displayName)
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className='signup'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className='signup-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={ displayName }
                        onChange={ this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={ email }
                        onChange={ this.handleChange}
                        label='Email Address'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={ password }
                        onChange={ this.handleChange}
                        label='Password - at least 6 characters long'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={ confirmPassword }
                        onChange={ this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>Sign up!</CustomButton>


                </form>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (email, password, displayName) => dispatch(signUpStart({email, password, displayName}))
})

export default connect(null, mapDispatchToProps)(SignUp)
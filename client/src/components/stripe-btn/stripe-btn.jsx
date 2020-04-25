import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutBtn = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_0SsnP4rOxy2nI0G8kz4Ca6gQ00M4lu0XJV'

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(res => {
            alert('Payment successful')
        }).catch(err => {
            console.log('Payment error: ', JSON.parse(err))
            alert('There was an issue with your payment. Please make sure you use the provided sample credit card')
        })
        
    }

     return (
        <StripeCheckout
            name='String and Fluff'
            label='Pay now'
            billingAddress
            shippingAddress
            image='https://img.icons8.com/pastel-glyph/64/000000/clew--v1.png'
            description={`Your total is ${price}`}
            amout={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        />
     )
}

export default StripeCheckoutBtn
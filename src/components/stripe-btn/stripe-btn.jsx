import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutBtn = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_0SsnP4rOxy2nI0G8kz4Ca6gQ00M4lu0XJV'

    const onToken = token => {
        console.log(token)
        alert('Payment successful')
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
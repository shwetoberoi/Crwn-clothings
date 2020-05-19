import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const publishableKey = 'pk_test_i3r51CIIV76LYUaWHpQHcDEz00aSObXvqR';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ₹${price}`}
            amount={price}
            panelLabel='Pay Now'
            token={onToken}
            currency="INR"
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
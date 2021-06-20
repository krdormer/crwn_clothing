import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51J4Vr5DUmocGVNa0tvafyqgjbz1dTQ0ecMjnH7oSzGsgJFLERMmItNPyuvKGSvtr4iQYK5MCtzKtPDdMB0FMCY4F00UZfF31P2"
    
    const onToken = token => {
        console.log(token)
        alert('Payment Successful!')
    }
    return (
        <StripeCheckout 
            label="Pay Now" 
            name="CRWN Clothing" 
            billingAddress 
            shippingAddress 
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;
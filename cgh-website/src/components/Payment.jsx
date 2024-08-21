// Payment.jsx
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// Replace with your own publishable key
const stripePromise = loadStripe('your_stripe_publishable_key');

const Payment = () => {
    return (
        <div>
            <h1>Stripe Payment Example</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;

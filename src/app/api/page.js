
import Stripe from 'stripe';


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1000, // amount in cents
        currency: 'usd',
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  } catch (error) {
    console.error('Error:', error.message || error);

    if (res) { // Check if res is defined
      res.status(500).json({ error: 'Failed to create PaymentIntent' });
    }
  }
}
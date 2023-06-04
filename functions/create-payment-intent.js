require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items, shipping_fee, total_amount) => {
  // functionality to confirm products from the db
  return total_amount + shipping_fee;
};
exports.handler = async (event, context) => {
  if (event.body) {
    const { items, shipping_fee, total_amount } = JSON.parse(event.body);
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items, shipping_fee, total_amount),
        currency: 'usd',
        automatic_payment_methods: {
          enabled: true,
        },
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 200,
        body: JSON.stringify({ msg: error.message }),
      };
    }
  }
  return {
    statusCode: 200,
    body: 'Hello payment intent',
  };
};

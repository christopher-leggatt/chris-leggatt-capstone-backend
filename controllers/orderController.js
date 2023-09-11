const knex = require("knex")(require("../knexfile"));
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const orderModel = require("../models/orderModel");
require("dotenv").config();
const { BACKEND_URL, PORT, CORS_ORIGIN } = process.env;

exports.createOrdersEntry = async (req, res) => {
  const {
    products,
    username,
    email,
    user_id,
    billing_address_id,
    shipping_address_id,
    price_total,
  } = req.body;
  try {
    const lineItems = products.map((product) => ({
      price_data: {
        currency: "cad",
        product_data: {
          name: product.name,
        },
        unit_amount: product.price * 100,
      },
      quantity: product.count,
    }));

    // Step 3: Create a Stripe Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: email,
      mode: "payment",
      success_url: `${CORS_ORIGIN}/checkout/success`,
      cancel_url: `${CORS_ORIGIN}/checkout/`,
      line_items: lineItems,
    });

    // Step 4: Insert Order into Database
    const orderDetails = {
      user_id: user_id,
      username,
      billing_address_id,
      shipping_address_id,
      payment_method: payment_method_types,
      price_total,
      products,
      stripeSessionId: session.id,
    };
    // await orderModel.createOrderEntry(orderDetails);

    // Step 5: Send Response
    res.json({ id: session.id });
  } catch (error) {
    res
      .status(500)
      .send({ message: "There was a problem creating the charge" });
  }
};

const knex = require("../db");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const orderModel = require("../models/orderModel");

const YOUR_DOMAIN = `${process.env.BACKEND_URL}:${process.env.PORT}`;

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
          description: product.description,
        },
        unit_amount: product.price * 100,
      },
      quantity: product.count,      
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.CORS_ORIGIN}/checkout/success`,
      cancel_url: `${process.env.CORS_ORIGIN}/checkout/`,
      customer_email: email,     
      line_items: lineItems,
    });

    const orderDetails = {
      user_id,
      billing_address_id,
      shipping_address_id,
      payment_method: "card",
      price_total,
      products: JSON.stringify(products),
      stripe_session_id: session.id,
      status: "completed",
    };

    await orderModel.createOrderEntry(orderDetails);

    res.json({ id: session.id });

  } catch (error) {
    console.log(
      "🚀 ~ file: orderController.js:57 ~ exports.createOrdersEntry= ~ error:",
      error
    );
    res
      .status(500)
      .send({ message: "There was a problem creating the charge" });
  }
};

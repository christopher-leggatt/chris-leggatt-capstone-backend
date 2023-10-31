const router = require("express").Router();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const YOUR_DOMAIN = `${process.env.BACKEND_URL}:${process.env.PORT}`;

const sessionObj = {
  payment_method_types: ["card"],
  mode: "payment",
  success_url: `${process.env.CORS_ORIGIN}/checkout/success`,
  cancel_url: `${process.env.CORS_ORIGIN}/checkout/`,
};

router.route("/").post(async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "{{PRICE_ID}}",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });

    res.redirect(303, session.url);
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    res.status(500).send("Failed to create Stripe session");
  }
});

module.exports = router;

const express = require("express");
const knex = require("./db");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { CORS_ORIGIN, PORT, BACKEND_URL } = process.env;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const productRoutes = require("./routes/productRoute");
const orderRoutes = require("./routes/orderRoute");
// const inventoryRoutes = require('./routes/inventoryRoute');
const authRoutes = require("./routes/authRoute");
const checkoutRoutes = require("./routes/checkoutRoute");
// const environment = process.env.NODE_ENV || 'development';
const corsOptions = {
  origin: CORS_ORIGIN,
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"));
// app.use('/inventories', inventoryRoutes);
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/create-checkout-session", checkoutRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`🚀 App listening at ${BACKEND_URL}:${PORT}`);
});

app.get("/", (req, res) => {
  return res.send("Test successful");
});

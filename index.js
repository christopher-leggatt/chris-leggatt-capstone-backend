const dotenv = require('dotenv');
const path = require('path');
const env = process.env.NODE_ENV || 'development';
const envFile = env === 'production' ? '.env.production' : '.env';
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

const express = require("express");
const knex = require("./db");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const productRoutes = require("./routes/productRoute");
const orderRoutes = require("./routes/orderRoute");
const authRoutes = require("./routes/authRoute");
const checkoutRoutes = require("./routes/checkoutRoute");


const app = express();
const { CORS_ORIGIN, PORT, BACKEND_URL } = process.env;

const corsOptions = {
  origin: CORS_ORIGIN,
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"));
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/create-checkout-session", checkoutRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`🚀 App listening at ${BACKEND_URL}:${PORT}`);
});

app.get("/test", (req, res) => {
  return res.json({ message: "Test successful" });
});

app.get("/", (req, res) => {
  return res.send("Test successful");
});



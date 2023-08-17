const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { CORS_ORIGIN, PORT, BACKEND_URL } = process.env;
const userRoutes = require('./routes/userRoute');
const productRoutes = require('./routes/productRoute');
const orderRoutes = require('./routes/orderRoute');
const inventoryRoutes = require('./routes/inventoryRoute');
const authRoutes = require('./routes/authRoute');



app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/users', userRoutes);
app.use('/inventories', inventoryRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/auth', authRoutes);



app.listen(PORT, () => {
    console.log(`🚀 App listening at ${BACKEND_URL}:${PORT}`);
});

app.get("/", (req,res) => {    
    return res.send("Test successful");
})

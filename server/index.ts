import express from 'express';
import dotenv from "dotenv";
import connectDB from './db/connectDB';
import userRoute from "./routes/user.route";
import orderRoute from "./routes/order.route";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Log Stripe key for debugging
console.log('Stripe Secret Key:', process.env.STRIPE_SECRET_KEY!);

// API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/order", orderRoute);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

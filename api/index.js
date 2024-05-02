import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';




dotenv.config();

// MongoDB connection
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
  const __dirname=path.resolve();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: "http://localhost:5174"}));

// Stripe
const stripe = require("stripe")(process.env.SECRET_STRIPE_KEY);

// Routes
app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/post',postRoutes);
app.use('/api/comment',commentRoutes);


app.use(express.static(path.join(__dirname,'client/dist')));

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'client','dist','index.html'));
});
// Stripe Checkout


// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import productsRoute from './routes/products.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productsRoute);

const PORT = process.env.PORT || 5173;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error(err));

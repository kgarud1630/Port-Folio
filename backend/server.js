import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('Portfolio Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import cors from 'cors';
import authRoute from './src/routes/authRoute.js';
dotenv.config();

const app = express();
connectDB();
app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoute);
const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'All Good' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

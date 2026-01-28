import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import cors from 'cors';
import authRoute from './src/routes/authRoute.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './src/swagger/swagger-output.json' with { type: "json" };

dotenv.config();

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'All Good' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

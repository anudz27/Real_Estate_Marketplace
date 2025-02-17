import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import propertyRoutes from './routes/propertyRoutes.js';
import connectDB from './config/mongodb.js';
import authRouter from './routes/userRoutes.js';




const app = express();
//API endpoints
app.get('/', (req, res) => {
  res.send('API is ...');
}); 
app.use('/api/auth', authRouter);

// Start the server
const PORT = process.env.PORT || 8080;
connectDB();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


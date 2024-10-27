import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import propertyRoutes from './routes/propertyRoutes.js';

dotenv.config();
const app = express();


app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/properties', propertyRoutes);

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Real Estate Marketplace Backend');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

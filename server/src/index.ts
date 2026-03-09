import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to your SaaS Backend API' });
});

// Auth Routes placeholder
app.post('/api/auth/login', (req, res) => {
  res.json({ success: true, token: 'mock-jwt-token' });
});

app.listen(port, () => {
  console.log(`SaaS Server running on port ${port}`);
});

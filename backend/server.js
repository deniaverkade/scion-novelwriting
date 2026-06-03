// Importeer Express
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import workoutRoutes from './src/routes/workoutRoutes.js';

// Maak Express app
const app = express();


// Haal PORT uit .env
const PORT = process.env.PORT || 4000;

// CORS toestaan voor frontend — VOOR alle andere middleware
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Middleware: lees JSON
app.use(express.json());

// Verbind met MongoDB en start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Verbonden met MongoDB');

    // Start server ALLEEN als database gelukt is
    app.listen(PORT, () => {
      console.log(`Server draait op http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database verbinding mislukt:', error.message);
  });

// Routes
app.use('/api/workouts', workoutRoutes);


// Test route
app.get('/', (req, res) => {
  res.json({
    message: 'Mijn eerste backend!',
    success: true
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});
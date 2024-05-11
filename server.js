import express from 'express';
import cors from 'cors';
import apiRouter from './api/index.js';

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: ['http://localhost:3000'], // Adjust this if your frontend runs on a different port
  methods: ['GET', 'POST', 'OPTIONS'], // Ensure OPTIONS is included
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Enable preflight requests for all routes
app.options('*', cors()); // This will enable preflight across-the-board

// Parse JSON request bodies
app.use(express.json());

// Use the API router
app.use('/api', apiRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

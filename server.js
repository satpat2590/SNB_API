import express from 'express';
import cors from 'cors';
import apiRouter from './api/index.js';

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: '*'
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

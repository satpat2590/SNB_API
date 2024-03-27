import express from 'express';
import apiRouter from './api/index.js';

const app = express();

// Parse JSON request bodies
app.use(express.json());

// Use the API router
app.use('/api', apiRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
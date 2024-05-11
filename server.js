/*
import express from 'express';
import cors from 'cors';
import apiRouter from './api/index.js';

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

// Enable preflight requests for all routes
app.options('*', cors()); // This will enable preflight across-the-board
app.options('*', (req, res) => res.sendStatus(200));


// Parse JSON request bodies
app.use(express.json());

// Use the API router
app.use('/api', apiRouter);

app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  console.log('Headers:', req.headers);
  next();
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
*/

// server.js

import express from 'express';
import cors from 'cors';
import apiRouter from './api/index.js';

const app = express();

// Enable CORS for all routes
app.use(cors({
    origin: '*', // Adjust this to your front-end's actual URL or '*' for all
    optionsSuccessStatus: 200 // Handles legacy browsers' issue with 204 status
}));

// Enable preflight requests for all routes
app.options('*', cors());

// Parse JSON request bodies
app.use(express.json());

// Use the API router
app.use('/api', apiRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


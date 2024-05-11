import express from 'express';
import sendMail from './sendMail.js';

const router = express.Router();

// POST route to handle form submission
router.post('/sendMail', sendMail);

export default router;
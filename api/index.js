import express from 'express';
import multer from 'multer';
import sendMail from './sendMail.js';

const upload = multer();
const router = express.Router();

// POST route to handle form submission
router.post('/sendMail', upload.any(), sendMail);

export default router;
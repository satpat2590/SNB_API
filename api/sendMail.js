import nodemailer from 'nodemailer';
import cors from 'cors';

// CORS Middleware setup for serverless
const corsHandler = cors({
  origin: true, // Reflects the request origin, or false if the origin is not allowed
  optionsSuccessStatus: 200
});

// Promisify cors middleware to use in async function
const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
          if (result instanceof Error) {
              return reject(result);
          }
          return resolve(result);
      });
  });
};

// Configure the email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Replace with your email service provider
  auth: {
    user: 'snbenergy231@gmail.com', // Replace with your email address
    pass: 'jbnawmbmtiemfrtv', // Replace with your email password
  },
});


// Handle the POST request to send email
const sendMail = async (req, res) => {
  await runMiddleware(req, res, corsHandler)
  
  try {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    // Prepare the email message
    const mailOptions = {
      from: 'snbenergy231@gmail.com', // Replace with your email address
      to: 'patelsatyam100@gmail.com', // Replace with the recipient email address
      subject: 'New Contact Form Submission',
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Message: ${message}
      `
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

export default sendMail;
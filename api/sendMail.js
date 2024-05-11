import nodemailer from 'nodemailer';

// Configure the email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Replace with your email service provider
  auth: {
    user: 'snbenergy231@gmail.com', // Replace with your email address
    pass: 'jbnawmbmtiemfrtv', // Replace with your email password
  },
});

// CORS headers
const headers = {
  'Access-Control-Allow-Origin': '*',  // Adjust this to match your frontend's origin for security in production
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
};

// Handle the POST request to send email
const sendMail = async (req, res) => {
  // Handle OPTIONS request (CORS preflight)
  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end();
    return;
  }
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
import nodemailer from 'nodemailer';

// Configure the email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Replace with your email service provider
  auth: {
    user: 'snbenergy232@gmail.com', // Replace with your email address
    pass: 'Ningning1231!!', // Replace with your email password
  },
});

// Handle the POST request to send email
const sendMail = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber } = req.body;

    // Prepare the email message
    const mailOptions = {
      from: 'snbenergy232@gmail.com', // Replace with your email address
      to: 'patelsatyam100@gmail.com', // Replace with the recipient email address
      subject: 'New Contact Form Submission',
      text: `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Phone Number: ${phoneNumber}
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
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const app = express();

app.use(bodyParser.json());

app.post('/send-booking', [
  body('fullName').notEmpty(),
  body('email').isEmail(),
  body('phoneNumber').notEmpty(),
  body('checkinDate').notEmpty(),
  body('checkoutDate').notEmpty(),
  body('numberOfGuests').isInt({ min: 1, max: 6 }),
  body('stayWithPets').isIn(['yes', 'no']),
  body('captchaToken').notEmpty()
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    fullName,
    email,
    phoneNumber,
    checkinDate,
    checkoutDate,
    numberOfGuests,
    stayWithPets,
    comments
  } = req.body;

  // Configura Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'storagebear@gmail.com',
      pass: 'okhGNxCpB36q2$'
    }
  });

  const mailOptions = {
    from: 'storagebear@gmail.com',
    to: 'g.alonso.ct@gmail.com',
    subject: 'New Booking Request',
    text: `
      Full Name: ${fullName}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Date Checkin: ${checkinDate}
      Date Checkout: ${checkoutDate}
      Number of Guests: ${numberOfGuests}
      Stay with Pets: ${stayWithPets}
      Comments: ${comments}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ error: 'Failed to send email' });
    }
    res.status(200).json({ message: 'Email sent successfully' });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

import nodemailer from 'nodemailer';

export const sendMail = async (options) => {
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const message = {
    from: options.email,
    to: 'eemils@gmail.com',
    bcc: options.email,
    subject: 'Kontaktform epost - LG Rørlegger',
    text: options.message,
  };

  await transport.sendMail(message);
};

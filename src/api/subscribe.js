const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function Subscribe(req, res) {
  const msg = {
    to: 'dustin@gatsbyjs.com', // Change to your recipient
    from: 'dustin@gatsbyjs.com', // Change to your verified sender
    subject: 'Thank you for subscribing!',
    text: 'Thanks for subscribing, we will send you updates from time-to-time!',
  }

  await sgMail.send(msg)
  return res.status(200).json({
    success: true,
    message: 'Succeeded in sending e-mail'
  })
}
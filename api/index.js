const express = require('express')
const cors = require("cors");
const app = express()
const port = 80
const nodemailer = require("nodemailer")
require('dotenv').config()
const axios = require('axios');

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('backend for Krishna Portfolio')
})

app.post("/contact", async (req, res) => {
    try {
        var user_ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const captchaResponse = await axios.get(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.body.reCaptchaToken}&remoteip=${user_ip}`)
        if (!captchaResponse.data.success) {
            console.log(captchaResponse)
            return res.status(409).json({ success: false, error: "Invalid Captcha Response!" })
        }
        const transport = nodemailer.createTransport({
            host: process.env.node_mailer_url,
            port: 465,
            secure: true,
            auth: {
                user: process.env.node_mailer_username,
                pass: process.env.node_mailer_password
            }
        });
        const message = {
            from: process.env.node_mailer_username,
            replyTo: req.body.email,
            to: "contact@krishna.lol",
            subject: "Contact From Krishna Agarwal - Portfolio",
            html: `From ${req.body.firstName} ${req.body.lastName},<br>${req.body.message}`
        }
        transport.sendMail(message);
        return res.json({ success: true })
    }
    catch (error) {
        console.error(error.message)
        return res.status(500).json({ success: false, error: "Internal Server Error Occurred!" })
    }
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
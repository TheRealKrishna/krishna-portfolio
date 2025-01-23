const express = require('express')
const cors = require("cors");
const app = express()
const port = 80
const nodemailer = require("nodemailer")
require('dotenv').config()
const axios = require('axios');

app.use(express.json())

const corsOptions = {
    origin: 'https://krishna.codes', // Allow your frontend origin
    methods: 'GET, POST, OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true, // Allow cookies and credentials
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));


app.get('/', (req, res) => {
    res.send('backend for Krishna Portfolio')
});


app.use("/contact", async (req, res) => {
    try {
        const captchaResponse = await axios.get(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${req.body.reCaptchaToken}`)
        if (!captchaResponse.data.success) {
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
        return res.status(500).json({ success: false, error: "Internal Server Error Occured!" })
    }
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
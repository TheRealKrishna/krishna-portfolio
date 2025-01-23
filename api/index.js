const express = require('express')
const app = express()
const port = 80
const nodemailer = require("nodemailer")
require('dotenv').config()
const axios = require('axios');
const cors = require("cors");

const corsOptions = {
    origin: 'https://krishna.codes', // Your frontend URL
    methods: ['GET', 'POST', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed request headers
    credentials: true, // Allow cookies and credentials
};

// Use CORS middleware globally
app.use(cors(corsOptions));

// Handle preflight requests explicitly (optional, for clarity)
app.options('*', cors(corsOptions));

// Remove this block; it's redundant with the cors middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://krishna.codes');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    next();
});

app.use(express.json())
app.use(cors(corsOptions));


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
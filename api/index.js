const express = require('express')
const cors = require("cors");
const app = express()
const port = 80
const nodemailer = require("nodemailer")

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('backend for Krishna Portfolio')
})

app.use("/contact", async (req, res) => {
    try {
        const transport = nodemailer.createTransport({
            host: process.env.node_mailer_url,
            port: 465,
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
            html: `<p>From ${req.body.firstName} ${req.body.lastName},<br>${req.body.message}</p>`
        }
        transport.sendMail(message, (error) => {
            if (error) {
                return res.json({success: false})
            }
        });
        return res.json({ success: true })
    }
    catch (error) {
        console.error(error.message)
        return res.status(500).json({ success:false, error: "Internal Server Error Occured!" })
    }
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
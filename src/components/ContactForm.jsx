import React, { useRef, useState } from 'react'
import Styles from "../css/ContactForm.module.css"
import toast from 'react-hot-toast'
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
    const [mailInfo, setMailInfo] = useState({ firstName: "", lastName: "", email: "", message: "" })
    const recaptchaRef = useRef()
    const [isMailSent, setIsMailSent] = useState(false)

    const onChange = (e) => {
        setMailInfo({ ...mailInfo, [e.target.name]: e.target.value })
    }

    const onFormSubmit = async (e) => {
        e.preventDefault()
        const reCaptchaToken = await recaptchaRef.current.executeAsync();
        toast.promise(
            new Promise(async (resolve, reject) => {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/contact`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ ...mailInfo, reCaptchaToken }),
                })
                const json = await response.json();
                if (json.success) {
                    setMailInfo({ firstName: "", lastName: "", email: "", message: "" })
                    resolve("Mail Sent, We will get back to you soon.")
                    setIsMailSent(true)
                }
                else {
                    reject(json.error)
                }
            }),
            {
                style: {
                    background: '#7c66e3',
                },
                loading: 'Sending mail...',
                success: (message) => message,
                error: (message) => message,
            }
        )
    }
    if (isMailSent) {
        return (
            <div className={Styles.mailSentMessage}>
                <h6>We have successfully received your mail and we will get back to you soon.</h6>
            </div>
        )
    }
    else {
        return (
            <div className={Styles.contactFormContent}>
                <form onSubmit={onFormSubmit} className={Styles.contactForm}>
                    <div className={Styles.nameContainer}>
                        <input type="text" name="firstName" onChange={onChange} value={mailInfo.firstName} placeholder="First Name" />
                        <input type="text" name="lastName" onChange={onChange} value={mailInfo.lastName} placeholder="Last Name" />
                    </div>
                    <input type="text" name="email" onChange={onChange} value={mailInfo.email} placeholder="Email" />
                    <textarea type="text" name="message" onChange={onChange} value={mailInfo.message} placeholder="Message" rows={3} />
                    <button type='submit'>SEND</button>
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        size="invisible"
                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                    />
                </form>
            </div>
        )
    }
}

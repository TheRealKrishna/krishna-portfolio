import React from 'react'
import Styles from "../css/ContactForm.module.css"

export default function ContactForm() {
    return (
        <div className={Styles.contactFormContent}>
            <form>
                <div className={Styles.nameContainer}>
                    <input type="text" name="firstname" placeholder="First Name" />
                    <input type="text" name="lastname" placeholder="Last Name" />
                </div>
                <input type="text" name="email" placeholder="Email" />
                <textarea type="text" name="message" placeholder="Message" rows={3} />
                <button>SEND</button>
            </form>
        </div>
    )
}

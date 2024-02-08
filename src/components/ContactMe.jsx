import React, { useEffect, useRef } from 'react'
import ContactInfoCard from './ContactInfoCard';
import Styles from "../css/ContactMe.module.css"
import ContactForm from './ContactForm';
import discordLogo from "../assets/discord.png"
import mailLogo from "../assets/mail.png"

export default function ContactMe({isInView}) {
    const contactInfoCard = useRef()
    const contactForm = useRef()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            isInView(contactInfoCard, Styles)
            isInView(contactForm, Styles)
        });
        return () => {
            window.removeEventListener('scroll', () => {
                isInView(contactInfoCard, Styles)
                isInView(contactForm, Styles)
            });
        };
    }, []);

    return (
        <section className={Styles.contactContainer} id='contact-me'>
            <h5>Contact Me</h5>
            <div className={Styles.contactContent}>
                <div className={Styles.contactInfoCard} ref={contactInfoCard}>
                    <ContactInfoCard
                        iconUrl={mailLogo}
                        text="contact@krishna.lol"
                        link="mailto:contact@krishna.lol"
                    />
                    <ContactInfoCard
                        iconUrl={discordLogo}
                        text="@therealkrishna"
                        textToCopy="therealkrishna"
                    />
                </div>
                <div className={Styles.contactForm} ref={contactForm}>
                    <ContactForm />
                </div>
            </div>
        </section >

    );
}

import React, { useState } from 'react'
import Styles from "../css/Footer.module.css"
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import toast from 'react-hot-toast';

export default function Footer() {
  const [newsLetterEmail, setNewsLetterEmail] = useState("")
  const onNewsLetterSubmit = (e) => {
    e.preventDefault();
    toast.promise(
      new Promise(async (resolve, reject) => {
        setTimeout(() => {
          setNewsLetterEmail("")
          resolve("Successfully subscribed!")
        }, 1000)
      }),
      {
        style: {
          background: '#7c66e3',
        },
        loading: 'Processing subscription request...',
        success: (message) => message,
        error: (message) => message,
      }
    )
  }

  return (
    // <section className={Styles.footerContainer}>Copyright &copy; {(new Date()).getFullYear()} Krishna Agarwal, Happy Coding</section>
    <section className={Styles.footerContainer}>
      <div className={Styles.footerContent}>
        <div className={Styles.aboutMeContainer}>
          <h5>
            About Me
          </h5>
          <p>
            I'm Krishna Agarwal, a student of computer science deeply passionate about programming and web development. From mastering HTML, CSS & JS to exploring advanced JavaScript frameworks, I thrive on creating seamless digital experiences. Beyond coding, I'm driven by the challenge of innovation and seek to blend technical expertise with creative flair in every project I undertake.
          </p>
        </div>
        <div className={Styles.linksContainer}>
          <h5>
            Sections
          </h5>
          <ul>
            {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
            <li><a href="#">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact-me">Contact Me</a></li>
          </ul>
        </div>
        <div className={Styles.linksContainer}>
          <h5>
            Links
          </h5>
          <ul>
            {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
            <li><a href="https://www.linkedin.com/in/therealkrishna/" target="_blank" rel="noreferrer">Linkedin</a></li>
            <li><a href="https://leetcode.com/TheRealKrishna/" target="_blank" rel="noreferrer">Leetcode</a></li>
            <li><a href="https://github.com/TheRealKrishna/" target="_blank" rel="noreferrer">Github</a></li>
            <li><a href="https://auth.geeksforgeeks.org/user/therealkrishna" target="_blank" rel="noreferrer">GeeksForGeeks</a></li>
          </ul>
        </div>
        <div className={Styles.newsletterContainer}>
          <h5>
            Subscribe to our newsletter
          </h5>
          <p>
            Monthly digest of what's new and exciting from us.
          </p>
          <form onSubmit={onNewsLetterSubmit}>
            <div className={Styles.newsletterInputContainer}>
              <input type="email" name="newsLetterEmail" onChange={(e)=>setNewsLetterEmail(e.target.value)} value={newsLetterEmail} placeholder='email address' />
              <button className={Styles.newsletterSubmitButton}>
                <FaEnvelope className={Styles.newsletterSubmitButton} type='submit' />
              </button>
            </div>
          </form>
          <div className={Styles.socialIcons}>
            <a href="https://www.facebook.com/TheRealKrishnaAgarwal" target='_blank' rel="noreferrer"><FaFacebook /></a>
            <a href="https://x.com/TheRealKrishna_" target='_blank' rel="noreferrer"><FaXTwitter /></a>
            <a href="https://www.instagram.com/therealkrishna__/" target='_blank' rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/therealkrishna/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className={Styles.footerLine}>
        <p>Copyright &copy; {(new Date()).getFullYear()} Krishna Agarwal, Happy Coding</p>
      </div>
    </section>
  )
}

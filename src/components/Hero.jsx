import React from 'react'
import Styles from "../css/Hero.module.css"
import HeroImage from "../assets/Hero.png"
import HTMLImage from "../assets/html.png"
import CSSImage from "../assets/css.png"
import JSImage from "../assets/js.png"
import ReactImage from "../assets/react.png"
import Typewriter from 'typewriter-effect';
import ParticlesBackground from './ParticlesBackground'
import leetcodeIcon from "../assets/leetcode.png"
import githubIcon from "../assets/github.png"
import geeksforgeeksIcon from "../assets/geeksforgeeks.png"
import linkedinIcon from "../assets/linkedin.png"

export default function Hero() {
    return (
        <section className={Styles.heroContainer}>
            <div className={Styles.heroContent}>
                <h3>Hello, It's Me</h3>
                <h2>Krishna Agarwal</h2>
                <div className={Styles.typeWriterContainer}>
                    <span>And I'm A&nbsp;</span><Typewriter
                        options={{
                            strings: ['Web Developer', 'MERN Stack Developer', 'Programmer', 'Software Engineer', 'Full Stack Developer', 'React Developer'],
                            autoStart: true,
                            loop: true,
                        }} />
                </div>
                <p>
                    Passionate Full Stack Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions
                </p>
                <div className={Styles.socialIconsContainer}>
                    <img className={Styles.socialIconsImage} src={linkedinIcon} alt="linkedinIcon" />
                    <img className={Styles.socialIconsImage} src={leetcodeIcon} alt="leetcodeIcon" />
                    <img className={Styles.socialIconsImage} src={githubIcon} alt="githubIcon" />
                    <img className={Styles.socialIconsImage} src={geeksforgeeksIcon} alt="geeksforgeeksIcon" />
                </div>
                <ParticlesBackground/>
            </div>
            <div className={Styles.heroImg}>
                <div>
                    <div className={Styles.techIcon}>
                        <img src={ReactImage} className={Styles.techIconImage} alt="ReactImage" />
                    </div>
                    <img src={HeroImage} className={Styles.heroImage} alt="HeroImage" />
                </div>
                <div>
                    <div className={Styles.techIcon}>
                        <img src={HTMLImage} className={Styles.techIconImage} alt="HTMLImage" />
                    </div>
                    <div className={Styles.techIcon}>
                        <img src={CSSImage} className={Styles.techIconImage} alt="CSSImage" />
                    </div>
                    <div className={Styles.techIcon}>
                        <img src={JSImage} className={Styles.techIconImage} alt="JSImage" />
                    </div>
                </div>
            </div>
        </section>
    )
}

import React from 'react'
import Styles from "../css/Hero.module.css"
import HeroImage from "../assets/Hero.gif"
import NodeJSImage from "../assets/logos/nodejs.png"
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
        <section className={Styles.heroContainer} id='hero'>
            <div className={Styles.heroContent}>
                <h3>Hello, It's Me</h3>
                <h2>Krishna Agarwal</h2>
                <div className={Styles.typeWriterContainer}>
                    <span>And I'm A&nbsp;</span><Typewriter
                        options={{
                            strings: ['Web Developer', 'MERN Stack Developer', 'Programmer', 'Software Engineer', 'Full Stack Developer', 'React Developer'],
                            autoStart: true,
                            loop: true,
                            random: true,
                        }} />
                </div>
                <p>
                    Passionate Full Stack Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions
                </p>
                <div className={Styles.socialIconsContainer}>
                    <a href="https://www.linkedin.com/in/therealkrishna/" target="_blank" rel='noreferrer'><img title="Linkedin" className={Styles.socialIconsImage} src={linkedinIcon} alt="linkedinIcon" /></a>
                    <a href="https://leetcode.com/TheRealKrishna/" target="_blank" rel='noreferrer'><img title="Leetcode" className={Styles.socialIconsImage} src={leetcodeIcon} alt="leetcodeIcon" /></a>
                    <a href="https://github.com/TheRealKrishna/" target="_blank" rel='noreferrer'><img title="Github" className={Styles.socialIconsImage} src={githubIcon} alt="githubIcon" /></a>
                    {/* <a href="https://auth.geeksforgeeks.org/user/therealkrishna" target="_blank" rel='noreferrer'><img title="Geelsforgeeks" className={Styles.socialIconsImage} src={geeksforgeeksIcon} alt="geeksforgeeksIcon" /></a> */}
                </div>
                <div className={Styles.resumeDownloadContainer}>
                    <button className={Styles.resumeDownloadButton} onClick={()=>window.open('https://drive.google.com/file/d/1JJG1Qtet02jifRM2rtrqczS_jVIFhlcz/view?usp=sharing')}>Download Resume</button>
                    {/* <button className={Styles.resumeDownloadButton} onClick={()=>window.open('/download/resume.pdf')}>Download Resume</button> */}
                </div>
                <ParticlesBackground />
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
                        <img src={NodeJSImage} className={Styles.techIconImage}alt="HTMLImage" />
                    </div>
                    <div className={Styles.techIcon}>
                        <img src={HTMLImage} className={Styles.techIconImage}alt="HTMLImage" />
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

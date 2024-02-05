import React from 'react'
import Styles from "../css/Hero.module.css"
import HeroImage from "../assets/Hero.png"
import HTMLImage from "../assets/html.png"
import CSSImage from "../assets/css.png"
import JSImage from "../assets/js.png"
import ReactImage from "../assets/react.png"

export default function Hero() {
    return (
        <section className={Styles.heroContainer}>
            <div className={Styles.heroContent}>
                <h3>Hello, It's Me</h3>
                <h2>Krishna Agarwal</h2>
                <p>
                    Passionate Full Stack Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions
                </p>
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

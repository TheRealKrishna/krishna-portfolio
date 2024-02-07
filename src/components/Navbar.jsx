import React, { useState } from 'react'
import Styles from "../css/Navbar.module.css"
import logo from "../assets/logo.png"
import { FaBars, FaXmark } from "react-icons/fa6"
import MobileNavbar from './MobileNavbar'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <>
            <MobileNavbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <nav className={Styles.navWrapper} id='home'>
                <div className={Styles.navContent}>
                    <div className={Styles.navLogoContainer}><img className={Styles.navLogo} src={logo} alt="Logo" /></div>
                    <div></div>
                    <ul className={Styles.navList}>
                        <li><a className={Styles.navListItem} href="#hero">Home</a></li>
                        <li><a className={Styles.navListItem} href="#skills">Skills</a></li>
                        <li><a className={Styles.navListItem} href="#projects">Projects</a></li>
                        <li><a className={Styles.navListItem} href="#contact-me">Contact Me</a></li>
                        <li ><button className={Styles.hireMeButton}>Hire Me</button></li>
                    </ul>
                    <button className={Styles.menuButton} onClick={toggleMenu}>
                        <span className={"material-symbols-outlined"} style={{ fontSize: "1.4rem" }}>{isMenuOpen ? <FaXmark /> : <FaBars />}</span>
                    </button>
                </div>
            </nav>
        </>
    )
}

import React from 'react'
import Styles from "../css/MobileNavbar.module.css"
import logo from "../assets/logo.png"

export default function MobileNavbar({ isMenuOpen, toggleMenu }) {
  return (  
    <>
      <div className={`${Styles.mobileMenuOverlay} ${isMenuOpen ? Styles.active : ""}`}></div>
      <div className={`${Styles.mobileMenu} ${isMenuOpen ? Styles.active : ""}`} onClick={toggleMenu}>
        <div className={Styles.mobileMenuContainer}>
          <div className={Styles.navLogoContainer}><img className={Styles.navLogo} src={logo} alt="Logo" /></div>
          <ul className={Styles.navList}>
            <li><a className={Styles.navListItem} href="#hero">Home</a></li>
            <li><a className={Styles.navListItem} href="#skills">Skills</a></li>
            <li><a className={Styles.navListItem} href="#projects">Projects</a></li>
            <li><a className={Styles.navListItem} href="#contact-me">Contact Me</a></li>
            <li ><button className={Styles.hireMeButton}>Hire Me</button></li>
          </ul>
        </div>
      </div>
    </>
  )
}

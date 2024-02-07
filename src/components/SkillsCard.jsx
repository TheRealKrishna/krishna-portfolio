import React from 'react'
import Styles from "../css/SkillsCard.module.css"

export default function SkillsCard({ title, iconUrl, isActive, onClick }) {
    return (
        <div className={`${Styles.skillsCard} ${isActive ? Styles.active : ""}`} onClick={() => onClick()}>
            <div className={Styles.skillIcon}>
                <img src={iconUrl} alt={title} />
            </div>
            <span>{title}</span>
        </div>
    )
}

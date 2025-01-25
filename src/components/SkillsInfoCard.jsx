import React from 'react'
import Styles from "../css/SkillsInfoCard.module.css"

export default function SkillsInfoCard({ heading, skills }) {
    return (
        <div className={Styles.skillsInfoCard}>
            <h6>{heading}</h6>
            <div className={Styles.skillsInfoContent}>
                {skills.map((item, index) => (
                    <div key={index}>
                        <div className={Styles.skill} style={{ border: `3px solid ${item.color}` }}>
                            <img src={item.icon} alt={item.skill} className={Styles.skillIcon} />
                        </div>
                        <div className={Styles.skillTextContainer}>
                            <p style={{ color: item.color }}>{item.skill}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

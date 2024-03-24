import React from 'react'
import Styles from "../css/SkillsInfoCard.module.css"

export default function SkillsInfoCard({ heading, skills }) {
    return (
        <div className={Styles.skillsInfoCard}>
            <h6>{heading}</h6>
            <div className={Styles.skillsInfoContent}>
                {skills.map((item, index) => (
                    <React.Fragment key={`skill_${index}`}>
                        <div className={Styles.skillInfo}>
                            <p>{item.skill}</p>
                            {/* <p className="percentage">{item.percentage}</p> */}
                        </div>

                        <div className={Styles.skillProgressBg}>
                            <div className={Styles.skillProgress} style={{ width: item.percentage }} />
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div >
    )
}

import React, { useEffect, useRef, useState } from 'react'
import Styles from "../css/Skills.module.css"
import SkillsCard from './SkillsCard'
import SkillsInfoCard from './SkillsInfoCard';
import { skillsData } from '../utils/skills';

export default function Skills({ isInView }) {
    const [selectedSkill, setSelectedSkill] = useState(skillsData[0]);
    const skills = useRef()
    const skillsInfo = useRef()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            isInView(skills, Styles)
            isInView(skillsInfo, Styles)
        });
        return () => {
            window.removeEventListener('scroll', () => {
                isInView(skills, Styles)
                isInView(skillsInfo, Styles)
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <section className={Styles.skillsContainer} id='skills'>
            <h5>Technical Proficiency</h5>
            <div className={Styles.skillsContent}>
                <div className={Styles.skills} ref={skills}>
                    {skillsData.map((item) => (
                        <SkillsCard
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            isActive={selectedSkill.title === item.title}
                            onClick={() => setSelectedSkill(item)}
                        />
                    ))
                    }
                </div>
                <div className={Styles.skillsInfo} ref={skillsInfo}>
                    <SkillsInfoCard
                        heading={selectedSkill.title}
                        skills={selectedSkill.skills} />
                </div>
            </div>
        </section>
    )
}

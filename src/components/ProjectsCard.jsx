import React, { useEffect, useRef } from 'react'
import Image3D from "../components/Image3D"
import Styles from "../css/ProjectsCard.module.css"

export default function ProjectsCard({ details, isInView }) {

    const projectsCard = useRef();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            isInView(projectsCard, Styles)
        });
        return () => {
            window.removeEventListener('scroll', () => {
                isInView(projectsCard, Styles)
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={Styles.projectsCard} ref={projectsCard}>
            <div className={Styles.projectsLogo}>
                <Image3D image={details.logo} />
            </div>
            <h5 className={Styles.projectsHeading}>{details.title}</h5>
            <span className={Styles.projectsTools}>
                {
                    Object.keys(details.tools).map((tool, index) => (
                        <React.Fragment key={index}>
                            <span style={details.tools[tool]}>{tool}</span>{Object.keys(details.tools).length - 1 !== index ? <span> | </span> : ""}
                        </React.Fragment>
                    ))
                }
            </span>
            <p className={Styles.projectsDescription}>{details.description}</p>
            <div className={Styles.projectsLinks}>
                <a href={details.links.demo} target='_blank' rel="noreferrer" className={Styles.projectsLinksButtons}>Demo</a>
                <a href={details.links.code} target='_blank' rel="noreferrer" className={Styles.projectsLinksButtons}>Source Code</a>
            </div>
        </div>
    )
}

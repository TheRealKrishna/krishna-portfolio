import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import Styles from "../css/WorkExperience.module.css"

import workExperience from "../utils/WorkExperience";
import SectionWrapper from "./SectionWrapper";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
          <img
            src={experience.icon}
            alt={experience.company_name}
            style={{ width: '60%', height: '60%', objectFit: 'contain' }}
          />
        </div>
      }
    >
      <div>

        <h3 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold' }}><a href={experience.link} target="_blank" rel="noreferrer" className={Styles.companyLink}>{experience.company_name}</a></h3>

        <p style={{ color: '#A0AEC0', fontSize: '16px', fontWeight: '600', margin: 0 }}>{experience.title}, {experience.type}</p>
        <p style={{ color: '#A0AEC0', fontSize: '16px', fontWeight: '600', margin: 0 }}>{experience.place}</p>
      </div>
      {
        experience.description &&
        <div>
          <p style={{ color: '#E2E8F0', fontSize: '14px', marginTop: '16px' }}>
            {experience.description}
          </p>
        </div>
      }

      <ul className={Styles.experiencePointsUl} style={{ spaceY: '8px' }}>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            style={{ color: '#E2E8F0', fontSize: '14px', paddingLeft: '4px', letterSpacing: 'wider' }}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const WorkExperience = () => {
  return (
    <div>
      <section className={Styles.projectsContainer} id='workExperience'>
        <motion.div variants={textVariant()}>
          <h5>Work Experience</h5>
        </motion.div>
        <div style={{ marginTop: '80px', display: 'flex', flexDirection: 'column' }}>
          <VerticalTimeline>
            {workExperience.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </section>
    </div>
  );
};

export default SectionWrapper(WorkExperience, "work");

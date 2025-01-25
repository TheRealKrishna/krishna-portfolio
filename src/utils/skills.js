import frontendIcon from "../assets/frontend.png"
import backendIcon from "../assets/backend.png"
import toolsIcon from "../assets/tools.png"
import softSkillsIcon from "../assets/soft-skills.png"

export const skillsData = [
  {
      title: "Frontend",
      icon: frontendIcon,
      skills: [
          { skill: "HTML5", percentage: "100%" },
          { skill: "CSS3", percentage: "90%" },
          { skill: "JavaScript", percentage: "95%" },
          { skill: "React.js", percentage: "95%" },
          { skill: "Next.js", percentage: "90%" },
      ],
  },
  {
      title: "Backend",
      icon: backendIcon,
      skills: [
          { skill: "Node.js & Express.js", percentage: "98%" },
          { skill: "MongoDB", percentage: "97%" },
          { skill: "MySQL", percentage: "92%" },
          { skill: "GraphQL", percentage: "95%" },
          { skill: "Web Socket", percentage: "85%" },
      ],
  },
  {
      title: "Tools",
      icon: toolsIcon,
      skills: [
          { skill: "Visual Studio Code", percentage: "98%" },
          { skill: "CPanel And Web Hosting", percentage: "98%" },
          { skill: "Git & Github", percentage: "92%" },
          { skill: "Chat GPT & Other AI tools", percentage: "97%" },
          { skill: "Microsoft Apps(Excel, etc...)", percentage: "90%" },
      ],
  },
  {
      title: "Soft Skills",
      icon: softSkillsIcon,
      skills: [
          { skill: "Problem Solving", percentage: "98%" },
          { skill: "Team Co-ordination", percentage: "95%" },
          { skill: "Attention To Detail", percentage: "96%" },
          { skill: "Adapatation & Learning", percentage: "100%" },
          { skill: "Communication Skill", percentage: "90%" },
      ],
  },
]
import frontendIcon from "../../assets/frontend.png"
import backendIcon from "../../assets/backend.png"
import toolsIcon from "../../assets/tools.png"
import softSkillsIcon from "../../assets/soft-skills.png"

export const SKILLS = [
    {
        title:"Frontend",
        icon: frontendIcon,
        skills:[
            {skill:"HTML5", percentage:"100%"},
            {skill:"CSS3", percentage:"85%"},
            {skill:"JavaScript", percentage:"95%"},
            {skill:"React.js", percentage:"90%"},
        ],
    },
    {
        title:"Backend",
        icon: backendIcon,
        skills:[
            {skill:"Node.js", percentage:"98%"},
            {skill:"Express.js", percentage:"94%"},
            {skill:"MongoDB", percentage:"92%"},
            {skill:"PHP & SQL", percentage:"60%"},
        ],
    },
    {
        title:"Tools",
        icon: toolsIcon,
        skills:[
            {skill:"Visual Studio Code", percentage:"98%"},
            {skill:"Git & Github", percentage:"85%"},
            {skill:"Chat GPT & Other AI tools", percentage:"97%"},
            {skill:"CPanel And Web Hosting", percentage:"98%"},
        ],
    },
    {
        title:"Soft Skills",
        icon: softSkillsIcon,
        skills:[
            {skill:"Problem Solving", percentage:"98%"},
            {skill:"Team Co-ordination", percentage:"95%"},
            {skill:"Attention To Detail", percentage:"96%"},
            {skill:"Communication Skill", percentage:"90%"},
        ],
    },
]
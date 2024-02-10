import frontendIcon from "../../assets/frontend.png"
import backendIcon from "../../assets/backend.png"
import toolsIcon from "../../assets/tools.png"
import softSkillsIcon from "../../assets/soft-skills.png"
import xLogo from "../../assets/x.png"
import amazonLogo from "../../assets/amazon.png"
import inotebookLogo from "../../assets/inotebook.png"
import gigachatLogo from "../../assets/gigachat.png"
import newsmonkeyLogo from "../../assets/newsmonkey.png"
import portfolioLogo from "../../assets/Hero.gif"

export const PROJECTS = [
    {
        title: "Twitter Clone",
        tools: {
            "REACT": {
                background: "linear-gradient(to top, rgb(99 165 255), rgb(182 237 255))",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
            },
            "NODE JS": {
                background: "linear-gradient(to top, rgb(0 124 32), rgb(27 255 0))",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
            },
            "EXPRESS": {
                background: "linear-gradient(to top, rgb(90 90 90), rgb(255 255 255))",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
            },
            "MONGO DB": {
                background: "linear-gradient(to top, rgb(26 255 0), rgb(255 255 255))",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
            }
        },
        logo: xLogo,
        description: "My project is a comprehensive Twitter clone developed using React, Node.js, Express, and MongoDB. Mimicking the core features of Twitter, users can register accounts, compose tweets, manage individual profiles, follow other users, engage with tweets through likes, message each other in realtime. The platform boasts a responsive design and real-time updates, delivering an authentic Twitter experience within a custom framework.",
        links:{
            demo:"https://x.krishna.lol/",
            code:"https://github.com/TheRealKrishna/x.com-clone"
        }
    },
    {
        title: "Notes Application",
        tools: {
            "REACT": {
                background: "linear-gradient(to top, rgb(99 165 255), rgb(182 237 255))",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
            },
            "NODE JS": {
                background: "linear-gradient(to top, rgb(0 124 32), rgb(27 255 0))",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
            },
            "EXPRESS": {
                background: "linear-gradient(to top, rgb(90 90 90), rgb(255 255 255))",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
            },
            "MONGO DB": {
                background: "linear-gradient(to top, rgb(26 255 0), rgb(255 255 255))",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
            }
        },
        logo: inotebookLogo,
        description: "My note taking app iNoteBook which offers seamless organization and retrieval of notes is built with React, Node.js, Express, and MongoDB, it provides a user-friendly interface for creating, editing, and categorizing notes. Users can securely store their thoughts, ideas, and reminders while accessing them from any device. With backend support and intuitive frontend design, it ensures efficient note management for enhanced productivity.",
        links:{
            demo:"https://inotebook.krishna.lol/",
            code:"https://github.com/TheRealKrishna/inotebook"
        }
    },
    {
        title: "Chat Application",
        tools: {
            "REACT": {
                background: "linear-gradient(to top, rgb(99 165 255), rgb(182 237 255))",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
            },
            "NODE JS": {
                background: "linear-gradient(to top, rgb(0 124 32), rgb(27 255 0))",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
            },
            "WEB SOCKET": {
                background: "linear-gradient(to top, rgb(255 202 0), rgb(255 237 198))",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
            },
            "MONGO DB": {
                background: "linear-gradient(to top, rgb(26 255 0), rgb(255 255 255))",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
            }
        },
        logo: gigachatLogo,
        description: "Presenting my Chat Application GigaChat crafted with React, Node.js, WebSocket, and MongoDB. Engage in real-time conversations with friends and colleagues effortlessly. Seamlessly send messages and connect with others in a dynamic and responsive interface. Backed by MongoDB for efficient data management, this application ensures secure and seamless communication. Experience the power of instant messaging with this feature-rich chat platform.",
        links:{
            demo:"https://gigachat.krishna.lol/",
            code:"https://github.com/TheRealKrishna/giga-chat"
        }
    },
    {
        title: "News Website",
        tools: {
            "REACT": {
                background: "linear-gradient(to top, rgb(99 165 255), rgb(182 237 255))",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
            },
            "News API": {
                background: "linear-gradient(to top, rgb(163 0 0), rgb(255 47 47))",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
            }
        },
        logo: newsmonkeyLogo,
        description: "Introducing my News Website NewsMonkey developed with React and powered by the News API. Stay informed and up-to-date with the latest headlines and breaking news from around the globe. Explore diverse categories, from politics to technology, with a sleek and intuitive user interface. Seamlessly navigate through articles and experience the convenience of accessing comprehensive news coverage all in one place with this dynamic and engaging platform.",
        links:{
            demo:"https://newsmonkey.krishna.lol/",
            code:"https://github.com/TheRealKrishna/newsmonkey"
        }
    },
    {
        title: "Ecommerce Website",
        tools: {
            "NEXT JS": {
                background: "linear-gradient(to top, white, #717171)",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
            },
            "MONGO DB": {
                background: "linear-gradient(to top, rgb(26 255 0), rgb(255 255 255))",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
            }
        },
        logo: amazonLogo,
        description: "My ecommerce site FakeStore, built with NEXTJS and MongoDB, mirrors the seamless shopping experience of Amazon. Users navigate a dynamic interface, browsing through a diverse array of products. Robust MongoDB integration ensures smooth transactions and secure data handling. It's a modern, user-centric platform, combining the best of NEXTJS's efficiency with MongoDB's reliability for a shopping experience akin to industry giants.",
        links:{
            demo:"https://fakestore.krishna.lol/",
            code:"https://github.com/TheRealKrishna/fake-store"
        }
    },
    {
        title: "Personal Portfolio",
        tools: {
            "REACT": {
                background: "linear-gradient(to top, rgb(99 165 255), rgb(182 237 255))",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
            },
            "Three JS": {
                background: "linear-gradient(to top, rgb(255 0 0), rgb(255 0 200))",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
            },
            "NODE JS": {
                background: "linear-gradient(to top, rgb(0 124 32), rgb(27 255 0))",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
            },
            "EXPRESS": {
                background: "linear-gradient(to top, rgb(90 90 90), rgb(255 255 255))",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
            },
        },
        logo: portfolioLogo,
        description: "My Personal Portfolio, crafted with React, Three.js, Node.js, and Express. Explore a showcase of my projects, skills, and insights about me. Engage with dynamic Three.js visualizations, showcasing my creative prowess. Discover my diverse skill set and past projects, each reflecting my passion and expertise. Connect with me effortlessly through the contact form, enabling seamless communication and collaboration opportunities.",
        links:{
            demo:"https://krishna.lol/",
            code:"https://github.com/TheRealKrishna/krishna-portfolio"
        }
    }
]

export const SKILLS = [
    {
        title: "Frontend",
        icon: frontendIcon,
        skills: [
            { skill: "HTML5", percentage: "100%" },
            { skill: "CSS3", percentage: "85%" },
            { skill: "JavaScript", percentage: "95%" },
            { skill: "React.js", percentage: "90%" },
        ],
    },
    {
        title: "Backend",
        icon: backendIcon,
        skills: [
            { skill: "Node.js", percentage: "98%" },
            { skill: "Express.js", percentage: "94%" },
            { skill: "MongoDB", percentage: "92%" },
            { skill: "PHP & SQL", percentage: "60%" },
        ],
    },
    {
        title: "Tools",
        icon: toolsIcon,
        skills: [
            { skill: "Visual Studio Code", percentage: "98%" },
            { skill: "Git & Github", percentage: "85%" },
            { skill: "Chat GPT & Other AI tools", percentage: "97%" },
            { skill: "CPanel And Web Hosting", percentage: "98%" },
        ],
    },
    {
        title: "Soft Skills",
        icon: softSkillsIcon,
        skills: [
            { skill: "Problem Solving", percentage: "98%" },
            { skill: "Team Co-ordination", percentage: "95%" },
            { skill: "Attention To Detail", percentage: "96%" },
            { skill: "Communication Skill", percentage: "90%" },
        ],
    },
]
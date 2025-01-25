import frontendIcon from "../assets/frontend.png"
import backendIcon from "../assets/backend.png"
import codeIcon from "../assets/codeLogo.svg"
import toolsIcon from "../assets/tools.png"

import bootstrapLogo from "../assets/logos/bootstrap.png";
import cLogo from "../assets/logos/c.png";
import canvaLogo from "../assets/logos/canva.svg";
import chatgptLogo from "../assets/logos/chatgpt.png";
import cpanelLogo from "../assets/logos/cpanel.png";
import cppLogo from "../assets/logos/cpp.png";
import cssLogo from "../assets/logos/css.png";
import expressLogo from "../assets/logos/express.png";
import figmaLogo from "../assets/logos/figma.png";
import githubLogo from "../assets/logos/github.png";
import graphqlLogo from "../assets/logos/graphql.png";
import htmlLogo from "../assets/logos/html.png";
import javaLogo from "../assets/logos/java.png";
import jsLogo from "../assets/logos/js.png";
import mongodbLogo from "../assets/logos/mongodb.svg";
import mysqlLogo from "../assets/logos/mysql.png";
import nextjsLogo from "../assets/logos/nextjs.png";
import nodejsLogo from "../assets/logos/nodejs.png";
import pythonLogo from "../assets/logos/python.png";
import reactLogo from "../assets/logos/react.png";
import reduxLogo from "../assets/logos/redux.svg";
import replitLogo from "../assets/logos/replit.png";
import restapiLogo from "../assets/logos/restapi.png";
import socketioLogo from "../assets/logos/socket.io.png";
import tailwindLogo from "../assets/logos/tailwind.png";
import typescriptLogo from "../assets/logos/typescript.png";
import vercelLogo from "../assets/logos/vercel.svg";
import vitejsLogo from "../assets/logos/vitejs.png";
import vscodeLogo from "../assets/logos/vscode.png";
import websocketLogo from "../assets/logos/websocket.png";

export const skillsData = [
    {
        title: "Languages",
        icon: codeIcon,
        skills: [
            { skill: "HTML", color: "#ff4b00", icon: htmlLogo },
            { skill: "CSS", color: "#208db8", icon: cssLogo },
            { skill: "JavaScript", color: "#ffdf00", icon: jsLogo },
            { skill: "TypeScript", color: "#3178c6", icon: typescriptLogo },
            { skill: "Python", color: "#3771a1", icon: pythonLogo },
            { skill: "Java", color: "#da380e", icon: javaLogo },
            { skill: "C++", color: "#004283", icon: cppLogo },
            { skill: "C", color: "#649ad2", icon: cLogo },
        ],
    },
    {
        title: "Frontend",
        icon: frontendIcon,
        skills: [
            { skill: "React JS", color: "#5adafd", icon: reactLogo },
            { skill: "Next JS", color: "#000000", icon: nextjsLogo },
            { skill: "Vite JS", color: "#ffd224", icon: vitejsLogo },
            { skill: "Redux", color: "#764abc", icon: reduxLogo },
            { skill: "Tailwind CSS", color: "#35bef8", icon: tailwindLogo },
            { skill: "Bootstrap", color: "#7909f7", icon: bootstrapLogo },
        ],
    },
    {
        title: "Backend",
        icon: backendIcon,
        skills: [
            { skill: "Node JS", color: "#89bd5d", icon: nodejsLogo },
            { skill: "Express JS", color: "#212121", icon: expressLogo },
            { skill: "MongoDB", color: "#13aa52", icon: mongodbLogo },
            { skill: "MySQL", color: "#4479a1", icon: mysqlLogo },
            { skill: "REST API", color: "#58727f", icon: restapiLogo },
            { skill: "GraphQL", color: "#e632ad", icon: graphqlLogo },
            { skill: "Socket.io", color: "#ffffff", icon: socketioLogo },
            { skill: "Websocket", color: "#1e191a", icon: websocketLogo },
        ],
    },
    {
        title: "Tools",
        icon: toolsIcon,
        skills: [
            { skill: "VS Code", color: "#1daaf2", icon: vscodeLogo },
            { skill: "GitHub", color: "#000000", icon: githubLogo },
            { skill: "ChatGPT", color: "#75ac9d", icon: chatgptLogo },
            { skill: "Figma", color: "#a259ff", icon: figmaLogo },
            { skill: "Canva", color: "#4552ee", icon: canvaLogo },
            { skill: "cPanel", color: "#f36c31", icon: cpanelLogo },
            { skill: "Vercel", color: "#000000", icon: vercelLogo },
            { skill: "Replit", color: "#f26201", icon: replitLogo },
        ],
    },
]
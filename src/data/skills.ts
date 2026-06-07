export type Skill = {
  name: string;
  color: string;
  icon: string;
};

export type SkillCategory = {
  title: string;
  /** Short tagline shown under the category heading. */
  blurb: string;
  skills: Skill[];
};

const logo = (file: string) => `/assets/logos/${file}`;

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    blurb: "The foundations I build everything on.",
    skills: [
      { name: "HTML", color: "#ff4b00", icon: logo("html.png") },
      { name: "CSS", color: "#208db8", icon: logo("css.png") },
      { name: "JavaScript", color: "#ffdf00", icon: logo("js.png") },
      { name: "TypeScript", color: "#3178c6", icon: logo("typescript.png") },
      { name: "Python", color: "#3771a1", icon: logo("python.png") },
      { name: "Java", color: "#da380e", icon: logo("java.png") },
      { name: "C++", color: "#004283", icon: logo("cpp.png") },
      { name: "C", color: "#649ad2", icon: logo("c.png") },
    ],
  },
  {
    title: "Frontend",
    blurb: "Interfaces that feel alive and respond instantly.",
    skills: [
      { name: "React", color: "#5adafd", icon: logo("react.png") },
      { name: "Next.js", color: "#ffffff", icon: logo("nextjs.png") },
      { name: "Vite", color: "#ffd224", icon: logo("vitejs.png") },
      { name: "Redux", color: "#a877e6", icon: logo("redux.svg") },
      { name: "Tailwind CSS", color: "#35bef8", icon: logo("tailwind.png") },
      { name: "Bootstrap", color: "#9b5cf6", icon: logo("bootstrap.png") },
    ],
  },
  {
    title: "Backend",
    blurb: "APIs and data layers built to scale.",
    skills: [
      { name: "Node.js", color: "#89bd5d", icon: logo("nodejs.png") },
      { name: "Express", color: "#cfcfcf", icon: logo("express.png") },
      { name: "MongoDB", color: "#13aa52", icon: logo("mongodb.svg") },
      { name: "MySQL", color: "#4479a1", icon: logo("mysql.png") },
      { name: "REST API", color: "#7d97a3", icon: logo("restapi.png") },
      { name: "GraphQL", color: "#e632ad", icon: logo("graphql.png") },
      { name: "Socket.io", color: "#cfcfcf", icon: logo("socket.io.png") },
      { name: "WebSocket", color: "#9aa0a6", icon: logo("websocket.png") },
    ],
  },
  {
    title: "Tools",
    blurb: "The kit I reach for every day.",
    skills: [
      { name: "VS Code", color: "#1daaf2", icon: logo("vscode.png") },
      { name: "GitHub", color: "#cfcfcf", icon: logo("github.png") },
      { name: "ChatGPT", color: "#75ac9d", icon: logo("chatgpt.png") },
      { name: "Figma", color: "#a259ff", icon: logo("figma.png") },
      { name: "Canva", color: "#4552ee", icon: logo("canva.svg") },
      { name: "cPanel", color: "#f36c31", icon: logo("cpanel.png") },
      { name: "Vercel", color: "#cfcfcf", icon: logo("vercel.svg") },
      { name: "Replit", color: "#f26201", icon: logo("replit.png") },
    ],
  },
];

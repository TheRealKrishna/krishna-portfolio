export type Experience = {
  company: string;
  title: string;
  type: string;
  place: string;
  date: string;
  icon: string;
  iconBg: string;
  link?: string;
  experienceLetter?: string;
  description?: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    company: "Shri Genesis Software Solutions",
    link: "https://shrigenesis.com/",
    title: "Frontend Web Developer",
    type: "Full-Time",
    place: "Jaipur, Rajasthan, India · On-site",
    icon: "/assets/ShriGenesis.jpg",
    iconBg: "#ffffff",
    date: "February 2026 - Present",
    description:
      "Shri Genesis Software Solutions is a leading IT services and software development company based in Jaipur, specializing in custom web and mobile applications, AI-powered platforms, SaaS solutions, and secure scalable systems for global clients. Currently, I’m part of the Success.ai project — an AI-driven B2B lead generation and sales automation platform offering verified contacts, email outreach automation, CRM capabilities, and advanced data enrichment tools.",
    points: [
      "Collaborating on both frontend and backend development to enhance the Success.ai platform.",
      "Implementing optimizations and improving performance across key modules.",
      "Fixing bugs and resolving issues to ensure smooth, stable user experiences.",
      "Maintaining security, integrity, and data protection throughout the application.",
      "Building and integrating new features and pages to expand product capabilities.",
      "Participating in code reviews, testing, and deployment workflows to uphold high-quality standards.",
    ],
  },
  {
    company: "Rainforest.Zone",
    experienceLetter: "/download/Experience_Letter_Rainforest.pdf",
    title: "Full Stack Developer",
    type: "Part-Time",
    place: "Bengaluru, Karnataka, India · Remote",
    icon: "/assets/InstaPhotoAI.png",
    iconBg: "#000000",
    date: "July 2024 - March 2025",
    description:
      "Rainforest, developed by Thriving Journey Pvt. Ltd., is an AI-powered platform that generates high-quality images and videos from text descriptions or reference photos, serving creative needs across fashion, product, and portrait photography as well as video content creation.",
    points: [
      "Developed and maintained responsive, user-friendly interfaces for Rainforest’s AI generation tools.",
      "Worked on backend systems to manage data flow and ensure seamless performance of the platform.",
      "Utilized WebSocket and APIs to enable efficient communication and real-time updates.",
      "Managed code versions and streamlined collaboration through GitHub pull requests.",
      "Focused on delivering customizable visuals for fashion, product, and portrait photography, as well as video content.",
    ],
  },
  {
    company: "Loomerang",
    experienceLetter: "/download/Experience_Letter_Loomerang.pdf",
    title: "Frontend Web Developer",
    type: "Part-Time",
    place: "Seattle, Washington, United States · Remote",
    icon: "/assets/Loomerang.png",
    iconBg: "#eadbc8",
    date: "February 2024 - March 2024",
    description:
      "Loomerang, developed by Brighter Technology LLC, is an innovative platform that empowers creators to design and sell custom clothing using advanced 3D modeling technology, providing a seamless experience for both designers and buyers.",
    points: [
      "Refactored the entire mobile dashboard UI/UX for an improved user experience.",
      "Fixed multiple existing bugs on the mobile dashboard, enhancing stability and performance.",
      "Ensured full responsiveness of the mobile dashboard across various screen sizes.",
      "Made the web workspace fully responsive for a seamless experience on different devices.",
      "Implemented AI image generation functionality on the mobile dashboard.",
      "Resolved login-related bugs and fixed image cropping issues, ensuring proper integration with 3D models.",
    ],
  },
  {
    company: "Rainforest.Zone",
    experienceLetter: "/download/Experience_Letter_Rainforest.pdf",
    title: "ReactJS / NextJS Developer",
    type: "Internship",
    place: "Bengaluru, Karnataka, India · Remote",
    icon: "/assets/InstaPhotoAI.png",
    iconBg: "#000000",
    date: "April 2024 - June 2024",
    points: [
      "Contributed to the development of user interfaces for Rainforest’s AI-powered platform.",
      "Transformed design concepts into responsive and interactive web pages.",
      "Optimized the frontend for generating AI-based images and videos.",
      "Collaborated with the team to enhance the platform’s UI/UX for diverse creative industries.",
    ],
  },
  {
    company: "Loomerang",
    experienceLetter: "/download/Experience_Letter_Loomerang.pdf",
    title: "Frontend Web Developer",
    type: "Internship",
    place: "Seattle, Washington, United States · Remote",
    icon: "/assets/Loomerang.png",
    iconBg: "#eadbc8",
    date: "June 2024 - August 2024",
    points: [
      "Developed essential website pages, including landing pages and authentication pages.",
      "Integrated APIs to enable dynamic functionality across the platform.",
      "Built the entire user authentication flow — login, signup, password recovery, and verification.",
      "Used Next.js and Tailwind CSS to create a responsive and visually appealing web design.",
      "Focused on delivering a seamless user experience throughout the platform.",
    ],
  },
];

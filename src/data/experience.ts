/** One position held at a company. A company can list several over time. */
export type Role = {
  title: string;
  type: string;
  /** "Month YYYY - Month YYYY" or "Month YYYY - Present". */
  date: string;
  points: string[];
};

/** One card in the Experience section: a company and the roles held there. */
export type Experience = {
  company: string;
  place: string;
  icon: string;
  iconBg: string;
  link?: string;
  experienceLetter?: string;
  description?: string;
  /**
   * Product you're working on at this company; shown in the hero's "Now" card.
   * With `url`, every mention of `name` in this entry's text becomes a link.
   */
  project?: { name: string; summary: string; url?: string };
  /** Most recent first. */
  roles: Role[];
};

export const experiences: Experience[] = [
  {
    company: "Shri Genesis Software Solutions",
    link: "https://shrigenesis.com/",
    place: "Jaipur, Rajasthan, India · On-site",
    icon: "/assets/ShriGenesis.jpg",
    iconBg: "#ffffff",
    project: {
      name: "Success.ai",
      summary: "AI-driven B2B lead generation and sales automation platform",
      url: "https://www.success.ai/",
    },
    description:
      "Shri Genesis Software Solutions is a leading IT services and software development company based in Jaipur, specializing in custom web and mobile applications, AI-powered platforms, SaaS solutions, and secure scalable systems for global clients. Currently, I’m part of the Success.ai project — an AI-driven B2B lead generation and sales automation platform offering verified contacts, email outreach automation, CRM capabilities, and advanced data enrichment tools.",
    roles: [
      {
        title: "MERN Stack Developer",
        type: "Full-Time",
        date: "February 2026 - Present",
        points: [
          "Collaborating on both frontend and backend development to enhance the Success.ai platform.",
          "Implementing optimizations and improving performance across key modules.",
          "Fixing bugs and resolving issues to ensure smooth, stable user experiences.",
          "Maintaining security, integrity, and data protection throughout the application.",
          "Building and integrating new features and pages to expand product capabilities.",
          "Participating in code reviews, testing, and deployment workflows to uphold high-quality standards.",
        ],
      },
    ],
  },
  {
    company: "Rainforest.Zone",
    experienceLetter: "/download/Experience_Letter_Rainforest.pdf",
    place: "Bengaluru, Karnataka, India · Remote",
    icon: "/assets/InstaPhotoAI.png",
    iconBg: "#000000",
    description:
      "Rainforest, developed by Thriving Journey Pvt. Ltd., is an AI-powered platform that generates high-quality images and videos from text descriptions or reference photos, serving creative needs across fashion, product, and portrait photography as well as video content creation.",
    roles: [
      {
        title: "Full Stack Developer",
        type: "Part-Time",
        date: "April 2024 - March 2025",
        points: [
          "Developed and maintained responsive, user-friendly interfaces for Rainforest’s AI generation tools.",
          "Transformed design concepts into responsive, interactive web pages.",
          "Optimized the frontend for generating AI-based images and videos.",
          "Worked on backend systems to manage data flow and ensure seamless performance of the platform.",
          "Utilized WebSocket and APIs to enable efficient communication and real-time updates.",
          "Managed code versions and streamlined collaboration through GitHub pull requests.",
          "Collaborated with the team to enhance the platform’s UI/UX and deliver customizable visuals for fashion, product, and portrait photography, as well as video content.",
        ],
      },
    ],
  },
  {
    company: "Loomerang",
    link: "https://www.loomerang.com/",
    experienceLetter: "/download/Experience_Letter_Loomerang.pdf",
    place: "Seattle, Washington, United States · Remote",
    icon: "/assets/Loomerang.png",
    iconBg: "#eadbc8",
    description:
      "Loomerang, developed by Brighter Technology LLC, is an innovative platform that empowers creators to design and sell custom clothing using advanced 3D modeling technology, providing a seamless experience for both designers and buyers.",
    roles: [
      {
        title: "Frontend Web Developer",
        type: "Part-Time",
        date: "February 2025 - March 2025",
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
        title: "Frontend Web Developer",
        type: "Internship",
        date: "June 2024 - August 2024",
        points: [
          "Developed essential website pages, including landing pages and authentication pages.",
          "Integrated APIs to enable dynamic functionality across the platform.",
          "Built the entire user authentication flow — login, signup, password recovery, and verification.",
          "Used Next.js and Tailwind CSS to create a responsive and visually appealing web design.",
          "Focused on delivering a seamless user experience throughout the platform.",
        ],
      },
    ],
  },
];

/**
 * Central site configuration and personal profile data.
 * Everything that is "who Krishna is" lives here so SEO metadata, JSON-LD,
 * and the UI all read from a single source of truth.
 */

export const siteConfig = {
  name: "Krishna Agarwal",
  role: "Full Stack Developer",
  shortBio:
    "Full Stack Developer crafting scalable, visually striking web applications with the MERN stack and Next.js.",
  longBio:
    "I’m Krishna Agarwal, a Full Stack Developer with hands-on experience building and deploying scalable, user-friendly web applications. I’ve shipped real-world products — AI-powered platforms, real-time apps, and e-commerce solutions — using React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS. I care about clean, maintainable code, responsive interfaces, and smooth user experiences.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://krishna.works",
  email: "contact@krishna.works",
  discord: "therealkrishna",
  location: "India",
  avatar: "/assets/hero.jpeg",
  ogImage: "/assets/hero.jpeg",
  resumeUrl: "/resume",
  keywords: [
    "Krishna Agarwal",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Software Engineer",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
} as const;

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/therealkrishna/",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/TheRealKrishna/",
    icon: "github",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/TheRealKrishna/",
    icon: "leetcode",
  },
  {
    label: "X",
    href: "https://x.com/TheRealKrishna_",
    icon: "x",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/therealkrishna__/",
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/TheRealKrishnaAgarwal",
    icon: "facebook",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const typewriterRoles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "React Developer",
  "Next.js Developer",
  "Software Engineer",
  "Problem Solver",
];

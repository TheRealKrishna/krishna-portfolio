export type ProjectLink = {
  demo?: string;
  /** Omit for private repos, so visitors don't hit a 404. */
  code?: string;
  /** Google Play listing; shows a "Google Play" button. */
  play?: string;
};

export type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  logo: string;
  /** Accent color used for the card glow / gradient. */
  accent: string;
  /** Four-digit year; also drives the age colour of the year chip. */
  year: string;
  /** Short platform label shown on the card, e.g. "Android". */
  platform?: string;
  featured?: boolean;
  links: ProjectLink;
};

/**
 * Live demo subdomains are derived from the deploy host at render time
 * (e.g. krishna.lol → x.krishna.lol) so the data stays environment-agnostic.
 * Listed in display order.
 */
export function getProjects(host: string): Project[] {
  const base = host || "krishna.lol";

  return [
    {
      title: "Alarmer",
      tagline: "The alarm that actually wakes you up.",
      description:
        "A native Android alarm app built to ring reliably on phones that aggressively kill background apps, where ordinary alarms silently fail. Dismissing takes a sequence of wake-up challenges — math, memory match, connect-the-dots, patterns, typing, and QR scanning — with a post-alarm wake-up check, stopwatch, timer, world clock, widgets, and 10 languages. Built end to end with Claude.",
      tech: ["Android", "Kotlin", "Built with Claude"],
      logo: "/assets/alarmer.png",
      accent: "#7c4dff",
      year: "2026",
      platform: "Android",
      featured: true,
      links: {
        play: "https://play.google.com/store/apps/details?id=com.snowcapstudios.alarmer",
      },
    },
    {
      title: "Personal Portfolio",
      tagline: "The site you’re looking at — reimagined.",
      description:
        "My personal portfolio, now rebuilt with Next.js, TypeScript, and Tailwind CSS for server-side rendering and first-class SEO. A showcase of projects, skills, and experience with fluid motion, a custom contact pipeline, and a next-generation interface.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      logo: "/assets/Hero.gif",
      accent: "#a993fe",
      year: "2026",
      featured: true,
      links: {
        demo: `https://${base}/`,
        code: "https://github.com/TheRealKrishna/krishna-portfolio",
      },
    },
    {
      title: "Twitter Clone",
      tagline: "A full social network, rebuilt from scratch.",
      description:
        "A comprehensive Twitter clone built with React, Node.js, Express, and MongoDB. Users register accounts, compose tweets, manage profiles, follow others, like posts, and message each other in real time. Responsive design with live updates delivers an authentic Twitter experience in a custom framework.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      logo: "/assets/x.png",
      accent: "#63a5ff",
      year: "2024",
      featured: true,
      links: {
        demo: `https://x.${base}/`,
        code: "https://github.com/TheRealKrishna/x.com-clone",
      },
    },
    {
      title: "iNoteBook",
      tagline: "Capture every idea, retrieve it anywhere.",
      description:
        "A note-taking app offering seamless organization and retrieval, built with React, Node.js, Express, and MongoDB. A friendly interface for creating, editing, and categorizing notes — securely stored and accessible from any device for enhanced productivity.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      logo: "/assets/inotebook.png",
      accent: "#5adafd",
      year: "2023",
      links: {
        demo: `https://inotebook.${base}/`,
        code: "https://github.com/TheRealKrishna/inotebook",
      },
    },
    {
      title: "FakeStore",
      tagline: "An e-commerce experience inspired by the giants.",
      description:
        "An e-commerce site built with Next.js and MongoDB that mirrors the seamless shopping experience of Amazon. A dynamic interface for browsing a diverse catalog, with robust MongoDB integration for smooth transactions and secure data handling.",
      tech: ["Next.js", "MongoDB"],
      logo: "/assets/amazon.png",
      accent: "#ff9900",
      year: "2023",
      links: {
        demo: `https://fakestore.${base}/`,
        code: "https://github.com/TheRealKrishna/fake-store",
      },
    },
    {
      title: "NewsMonkey",
      tagline: "The world’s headlines, beautifully organized.",
      description:
        "A news website developed with React and powered by the News API. Stay up to date with the latest headlines from around the globe across diverse categories — politics to technology — through a sleek, intuitive interface with comprehensive coverage in one place.",
      tech: ["React", "News API"],
      logo: "/assets/newsmonkey.png",
      accent: "#ff2f2f",
      year: "2023",
      links: {
        demo: `https://newsmonkey.${base}/`,
        code: "https://github.com/TheRealKrishna/newsmonkey",
      },
    },
  ];
}

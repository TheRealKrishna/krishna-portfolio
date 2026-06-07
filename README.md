# Krishna Agarwal — Personal Portfolio

A next-generation developer portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Server-rendered for first-class SEO, with fluid motion powered by Framer Motion, a dependency-free animated starfield background, 3D tilt cards, and a self-hosted contact pipeline.

## ✨ Highlights

- **Server-side rendered** — all content ships in the initial HTML for SEO and fast first paint.
- **Rich SEO** — dynamic metadata, Open Graph + Twitter cards, JSON-LD `Person` schema (in SSR HTML), `sitemap.xml`, `robots.txt`, and a web manifest, all generated from a single data source.
- **Next-gen UI** — aurora-noir design system, glassmorphism, gradient borders, scroll-reveal animations, an interactive parallax starfield, orbiting tech icons, an animated experience timeline, and pointer-driven 3D tilt project cards.
- **Self-contained** — no external particle, tilt, typewriter, or 3D libraries; everything is hand-built and lightweight.
- **Built-in contact API** — a Next.js Route Handler validates input server-side and emails via SMTP (gracefully no-ops when SMTP is not configured).

## 🛠 Tech Stack

| Layer        | Technology                                  |
| ------------ | ------------------------------------------- |
| Framework    | Next.js (App Router) + React                |
| Language     | TypeScript                                  |
| Styling      | Tailwind CSS                                |
| Animation    | Framer Motion                               |
| Icons        | react-icons                                 |
| Email        | Nodemailer (via API Route Handler)          |

## 📁 Structure

```
krishna-portfolio/
├── public/
│   ├── assets/           # images, logos, avatar
│   └── download/         # résumé + experience letters
├── src/
│   ├── app/
│   │   ├── api/contact/  # contact form Route Handler
│   │   ├── layout.tsx    # root layout + SEO metadata + JSON-LD
│   │   ├── page.tsx      # home (server component)
│   │   ├── globals.css   # design system + Tailwind theme
│   │   ├── sitemap.ts / robots.ts / manifest.ts
│   │   └── not-found.tsx
│   ├── components/       # Navbar, Hero, Skills, Experience, Projects, Contact, Footer, …
│   └── data/             # profile, skills, projects, experience (typed)
└── next.config.ts
```

## 🔧 Environment Variables

Copy `.env.example` to `.env.local` and fill in what you need. The site builds and runs without these — the contact form just no-ops the email send.

| Variable                  | Purpose                                   |
| ------------------------- | ----------------------------------------- |
| `SMTP_HOST`               | SMTP server host                          |
| `SMTP_PORT`               | SMTP port (default `465`)                 |
| `SMTP_USER`               | SMTP username (also the `from` address)   |
| `SMTP_PASSWORD`           | SMTP password                             |
| `CONTACT_RECEIVING_EMAIL` | Inbox that receives contact messages      |
| `NEXT_PUBLIC_SITE_URL`    | Canonical site URL for SEO/OG/sitemap     |

## 🚀 Getting Started

```bash
# install dependencies
npm install

# run the dev server
npm run dev

# production build + start
npm run build
npm run start
```

Then open <http://localhost:3000>.

## 📦 Scripts

- `npm run dev` — start the development server
- `npm run build` — create an optimized production build
- `npm run start` — run the production server
- `npm run lint` — lint the project

## License

MIT. Feel free to reach out with questions or suggestions! 😊
